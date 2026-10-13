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
  introVideo: [
    { src: "/hero/showreel.webm", type: "video/webm" },
    { src: "/hero/showreel.mp4", type: "video/mp4" },
  ] as { src: string; type: string }[] | null,
  // Set to true for a video with a voice/music track, so visitors get a sound toggle.
  introVideoHasSound: false,
  coreStack: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  education: "Full Stack Web Development · Uki Technology School, 2025",
  focus: "Product-focused web apps: interfaces, APIs, data and deployment.",
} as const;
