// Renders the hero video (WebM + MP4) and its poster into ../public/hero/.
// Usage: npm run render   (set REMOTION_BROWSER to use an existing Chrome/Chromium headless shell)
import { bundle } from "@remotion/bundler";
import { renderMedia, renderStill, selectComposition } from "@remotion/renderer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, "..", "public", "hero");
const browserExecutable = process.env.REMOTION_BROWSER || null;

const serveUrl = await bundle({ entryPoint: path.join(here, "src/index.ts"), publicDir: path.join(here, "..", "public") });
const pick = (id) => selectComposition({ serveUrl, id, browserExecutable });

const showreel = await pick("Showreel");
const outputs = [
  { file: "motion-reel.webm", codec: "vp9", crf: 40 },
  { file: "motion-reel.mp4", codec: "h264", crf: 24 },
];
for (const { file, codec, crf } of outputs) {
  let last = -1;
  await renderMedia({
    serveUrl, composition: showreel, codec, crf, muted: true, browserExecutable,
    pixelFormat: "yuv420p", x264Preset: codec === "h264" ? "slow" : undefined,
    outputLocation: path.join(outDir, file),
    onProgress: ({ progress }) => {
      const pct = Math.floor(progress * 10) * 10;
      if (pct !== last) { last = pct; console.log(`${file}: ${pct}%`); }
    },
  });
}

const poster = await pick("Poster");
await renderStill({ serveUrl, composition: poster, frame: 80, imageFormat: "jpeg", jpegQuality: 88, browserExecutable, output: path.join(outDir, "motion-reel-poster.jpg") });
console.log(`Done: ${(showreel.durationInFrames / showreel.fps).toFixed(1)}s, files in public/hero/`);
