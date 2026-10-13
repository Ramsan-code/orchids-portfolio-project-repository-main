import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { siMongodb, siNextdotjs, siNodedotjs, siReact, siTailwindcss, siTypescript, type SimpleIcon } from "simple-icons";
import type { Project } from "../../src/data/portfolio";
import { profile } from "../../src/data/profile";
import { C, enter, mono, monoLabel, rise, sans, serif } from "./theme";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/* ---------- 1. Intro: monogram, name, role ---------- */
export function Intro() {
  const f = useCurrentFrame();
  const badge = enter(f, 4, 12);
  const [first, last] = [profile.name.split(" ")[0], profile.name.split(" ").slice(1).join(" ")];
  return <AbsoluteFill style={{ background: C.ink, color: "white", fontFamily: sans, padding: 52, justifyContent: "flex-end" }}>
    {/* Outlined name drifting behind, like the site's hero backdrop */}
    <div style={{ position: "absolute", top: 120, left: 0, whiteSpace: "nowrap", fontSize: 250, fontWeight: 800, letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "1.5px rgba(200,244,61,.18)", transform: `translateX(${interpolate(f, [0, 90], [40, -160])}px)`, opacity: interpolate(f, [0, 20], [0, 1], clamp) }}>RAMSAN</div>
    <div style={{ position: "absolute", top: 52, left: 52, width: 64, height: 64, borderRadius: "50%", background: C.lime, color: C.ink, display: "grid", placeItems: "center", fontFamily: mono, fontWeight: 600, fontSize: 20, transform: `scale(${badge}) rotate(${interpolate(badge, [0, 1], [-90, 0])}deg)` }}>{profile.initials}</div>
    <div style={{ ...monoLabel, fontSize: 14, color: C.lime, display: "flex", alignItems: "center", gap: 10, ...rise(f, 14) }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.lime }} /> {profile.location}
    </div>
    <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: "-0.07em", lineHeight: 0.9, margin: "26px 0 30px" }}>
      <div style={rise(f, 20, 60)}>{first}</div>
      <div style={rise(f, 26, 60)}>{last}</div>
    </div>
    <div style={{ height: 2, background: C.lime, width: `${interpolate(enter(f, 34), [0, 1], [0, 100])}%`, marginBottom: 26 }} />
    <div style={{ fontSize: 40, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
      <span style={{ display: "inline-block", fontWeight: 650, ...rise(f, 40) }}>AI-Assisted&nbsp;</span>
      <span style={{ display: "inline-block", fontFamily: serif, fontStyle: "italic", color: C.lime, ...rise(f, 46) }}>Full-Stack Developer</span>
    </div>
  </AbsoluteFill>;
}

/* ---------- 2. Core stack: brand logos popping in ---------- */
const icons: Record<string, SimpleIcon> = {
  "Next.js": siNextdotjs, React: siReact, "Node.js": siNodedotjs, MongoDB: siMongodb, TypeScript: siTypescript, "Tailwind CSS": siTailwindcss,
};

export function Stack() {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{ background: C.paper, color: C.ink, fontFamily: sans, padding: 52, justifyContent: "space-between" }}>
    <div>
    <div style={{ ...monoLabel, fontSize: 14, ...rise(f, 2) }}>01 / Core stack</div>
    <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-0.07em", lineHeight: 0.92, margin: "26px 0 0" }}>
      <div style={rise(f, 6, 40)}>Interfaces, APIs</div>
      <div style={rise(f, 11, 40)}>and data, <span style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 400, color: C.olive }}>end to end.</span></div>
    </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {profile.coreStack.map((name, i) => {
        const icon = icons[name];
        const p = enter(f, 20 + i * 5, 14);
        return <div key={name} style={{ height: 150, background: "white", border: `1.5px solid ${C.ink}`, display: "flex", alignItems: "center", gap: 18, padding: "0 22px", transform: `scale(${interpolate(p, [0, 1], [0.6, 1])})`, opacity: Math.min(1, p * 1.4), boxShadow: `6px 6px 0 ${i % 3 === 0 ? C.lime : C.card}` }}>
          {icon && <svg viewBox="0 0 24 24" width={58} height={58} fill={`#${icon.hex}`} style={{ flex: "none" }}><path d={icon.path} /></svg>}
          <span style={{ fontSize: 28, fontWeight: 650, letterSpacing: "-0.03em" }}>{name}</span>
        </div>;
      })}
    </div>
  </AbsoluteFill>;
}

/* ---------- 3. One project: browser mockup + kinetic title ---------- */
export function ProjectScene({ project, index, total }: { project: Project; index: number; total: number }) {
  const f = useCurrentFrame();
  const cover = project.images.find((image) => image.kind === "desktop") ?? project.images[0];
  const phone = project.images.find((image) => image.kind === "mobile");
  const browserIn = enter(f, 0, 18);
  const url = project.liveUrl?.replace("https://", "") ?? "Project preview";
  const num = String(index + 1).padStart(2, "0");
  return <AbsoluteFill style={{ background: C.paper, color: C.ink, fontFamily: sans, padding: 44 }}>
    <div style={{ position: "absolute", right: 34, bottom: 30, fontSize: 210, lineHeight: 1, fontWeight: 800, letterSpacing: "-0.07em", color: "transparent", WebkitTextStroke: `1.5px ${C.line}`, transform: `translateY(${interpolate(f, [0, 75], [0, -30])}px)` }}>{num}</div>
    <div style={{ ...monoLabel, fontSize: 13, ...rise(f, 2) }}>02 / Project {num} of {String(total).padStart(2, "0")}</div>

    <div style={{ position: "absolute", left: 44, right: 44, top: 96, border: `1.5px solid ${C.ink}`, background: "white", boxShadow: `0 34px 60px -32px rgba(13,17,14,.5)`, transform: `translateX(${interpolate(browserIn, [0, 1], [720, 0])}px) rotate(${interpolate(browserIn, [0, 1], [4, 0])}deg)` }}>
      <div style={{ height: 34, display: "flex", alignItems: "center", gap: 7, padding: "0 12px", borderBottom: `1.5px solid ${C.ink}`, background: C.paper }}>
        {[0, 1, 2].map((i) => <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", border: `1.5px solid ${C.ink}`, background: i === 0 ? C.lime : "transparent" }} />)}
        <span style={{ marginLeft: 10, fontFamily: mono, fontSize: 11, color: C.muted }}>{url}</span>
      </div>
      <div style={{ height: 392, overflow: "hidden", position: "relative" }}>
        <Img src={staticFile(cover.src)} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0", transformOrigin: "50% 0", transform: `scale(${interpolate(f, [0, 80], [1, 1.08])})` }} />
      </div>
    </div>
    {phone && (() => {
      const p = enter(f, 12, 14);
      return <div style={{ position: "absolute", right: 26, top: 330, width: 150, height: 318, border: `7px solid ${C.ink}`, borderRadius: 24, overflow: "hidden", background: "white", boxShadow: "0 24px 40px -18px rgba(13,17,14,.6)", transform: `translateY(${interpolate(p, [0, 1], [380, 0])}px) rotate(${interpolate(p, [0, 1], [10, 3])}deg)` }}>
        <Img src={staticFile(phone.src)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0" }} />
      </div>;
    })()}

    <div style={{ position: "absolute", left: 44, right: 44, bottom: 50 }}>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {project.categories.map((c, i) => <span key={c} style={{ ...monoLabel, fontSize: 11, border: `1.5px solid ${C.ink}`, padding: "6px 10px", ...rise(f, 14 + i * 3, 16) }}>{c}</span>)}
      </div>
      {/* Title wipes up out of a mask */}
      <div style={{ overflow: "hidden", paddingBottom: 6 }}>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.07em", lineHeight: 0.95, transform: `translateY(${interpolate(enter(f, 16), [0, 1], [100, 0])}%)` }}>{project.name}</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", marginTop: 14 }}>
        {project.stack.slice(0, 5).map((s, i) => <span key={s} style={{ ...monoLabel, fontSize: 12, display: "flex", alignItems: "center", gap: 7, ...rise(f, 24 + i * 3, 12) }}>
          <span style={{ width: 7, height: 7, background: i === 0 ? C.lime : C.ink, outline: i === 0 ? `1.5px solid ${C.ink}` : undefined }} />{s}
        </span>)}
      </div>
    </div>
  </AbsoluteFill>;
}

/* ---------- 4. Proof: what working with me looks like ---------- */
const proof = ["Product-focused", "Frontend + backend", "Internship experience", "Production deployment"];

export function Proof() {
  const f = useCurrentFrame();
  return <AbsoluteFill style={{ background: C.ink, color: "white", fontFamily: sans, padding: 52, justifyContent: "center" }}>
    <div style={{ ...monoLabel, fontSize: 14, color: C.lime, marginBottom: 34, ...rise(f, 2) }}>03 / How I work</div>
    {proof.map((line, i) => {
      const p = enter(f, 6 + i * 7);
      return <div key={line} style={{ display: "flex", alignItems: "center", gap: 22, padding: "22px 0", borderTop: "1px solid #2b332d" }}>
        <span style={{ color: C.lime, fontSize: 30, transform: `rotate(${interpolate(p, [0, 1], [-180, 0])}deg) scale(${p})` }}>✦</span>
        <span style={{ fontSize: 52, fontWeight: 650, letterSpacing: "-0.06em", clipPath: `inset(0 ${interpolate(p, [0, 1], [100, 0])}% 0 0)` }}>{line}</span>
      </div>;
    })}
  </AbsoluteFill>;
}

/* ---------- 5. Contact card ---------- */
export function Outro() {
  const f = useCurrentFrame();
  const arrow = enter(f, 34, 10);
  return <AbsoluteFill style={{ background: C.lime, color: C.ink, fontFamily: sans, padding: 52, justifyContent: "space-between" }}>
    <div style={{ ...monoLabel, fontSize: 14, display: "flex", alignItems: "center", gap: 10, ...rise(f, 2) }}>
      <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.ink }} /> Open to full-stack opportunities
    </div>
    <div style={{ fontSize: 106, fontWeight: 700, letterSpacing: "-0.075em", lineHeight: 0.86 }}>
      {["Have a", "product", "to build?"].map((w, i) => <div key={w} style={{ overflow: "hidden" }}><div style={{ transform: `translateY(${interpolate(enter(f, 6 + i * 5), [0, 1], [105, 0])}%)` }}>{w}</div></div>)}
    </div>
    <div style={{ borderTop: `1.5px solid ${C.ink}`, paddingTop: 24, ...rise(f, 24) }}>
      <div style={{ ...monoLabel, fontSize: 13 }}>Let&apos;s talk</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
        <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.04em" }}>{profile.email}</span>
        <span style={{ width: 52, height: 52, borderRadius: "50%", background: C.ink, color: C.lime, display: "grid", placeItems: "center", fontSize: 26, transform: `scale(${arrow}) rotate(${interpolate(arrow, [0, 1], [-45, 0])}deg)` }}>↗</span>
      </div>
    </div>
  </AbsoluteFill>;
}

/* ---------- Loop tail: plain ink, identical to the intro's first frame ---------- */
export function Blank() {
  return <AbsoluteFill style={{ background: C.ink }} />;
}
