export const profile = {
  name: "Thaventhiran Ramsan",
  initials: "TR",
  role: "AI-Assisted Full-Stack Developer",
  location: "Vavuniya, Sri Lanka",
  email: "ramsandota@gmail.com",
  portrait: "/profile.jpg",
  resume: "/Resume_Ramsan.pdf",
  // Drop an MP4 (H.264 + AAC) into public/hero/ and set this to e.g. "/hero/intro.mp4"
  // to replace the hero portrait with a talking intro video. Leave null to keep the photo.
  introVideo: null as string | null,
  coreStack: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"],
  education: "Full Stack Web Development · Uki Technology School, 2025",
  focus: "Product-focused web apps: interfaces, APIs, data and deployment.",
} as const;
