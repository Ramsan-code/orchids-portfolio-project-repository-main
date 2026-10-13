export const profile = {
  name: "Thaventhiran Ramsan",
  initials: "TR",
  role: "AI-Assisted Full-Stack Developer",
  location: "Vavuniya, Sri Lanka",
  email: "ramsandota@gmail.com",
  portrait: "/profile.jpg",
  resume: "/Resume_Ramsan.pdf",
  // Video shown in the hero portrait frame (files in public/hero/). The browser plays the first
  // format it supports; keep the MP4 last as the universal fallback. Set to null to show the photo.
  // motion-reel.* is generated from video/ with Remotion (`cd video && npm run render`);
  // swap in showreel.* for the screenshot slideshow instead.
  introVideo: [
    { src: "/hero/motion-reel.webm", type: "video/webm" },
    { src: "/hero/motion-reel.mp4", type: "video/mp4" },
  ] as { src: string; type: string }[] | null,
  // Shown before the video starts, and instead of it for visitors who prefer reduced motion.
  introVideoPoster: "/hero/motion-reel-poster.jpg",
  // Set to true for a video with a voice/music track, so visitors get a sound toggle.
  introVideoHasSound: false,
  coreStack: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  education: "Full Stack Web Development · Uki Technology School, 2025",
  focus: "Product-focused web apps: interfaces, APIs, data and deployment.",
} as const;
