import { loadFont } from "@remotion/fonts";
import { interpolate, spring } from "remotion";
import geist from "../../src/app/geist-latin.woff2";
import geistMono from "../../src/app/geist-mono-latin.woff2";

// Same palette as src/app/globals.css.
export const C = {
  ink: "#0d110e",
  paper: "#f3f4ed",
  lime: "#c8f43d",
  muted: "#687169",
  line: "#cdd1c7",
  olive: "#718064",
  card: "#e7e9e0",
};

export const FPS = 30;
export const WIDTH = 720;
export const HEIGHT = 900;

loadFont({ family: "Geist", url: geist, weight: "100 900" });
loadFont({ family: "Geist Mono", url: geistMono, weight: "100 900" });

export const sans = "Geist, sans-serif";
export const mono = "'Geist Mono', monospace";
export const serif = "Georgia, serif";

export const monoLabel = {
  fontFamily: mono,
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
};

/** 0 → 1 spring that starts `delay` frames into the current sequence. */
export const enter = (frame: number, delay = 0, damping = 200) =>
  spring({ frame: frame - delay, fps: FPS, config: { damping } });

/** Fade + rise style for an element entering at `delay`. */
export const rise = (frame: number, delay = 0, distance = 28) => {
  const p = enter(frame, delay);
  return { opacity: p, transform: `translateY(${interpolate(p, [0, 1], [distance, 0])}px)` };
};
