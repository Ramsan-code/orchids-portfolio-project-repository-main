export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  displayPeriod: string;
  description: string;
  highlights: string[];
  verificationLabel: string;
  credentialUrl: string;
}

export const experiences: Experience[] = [
  {
    company: "Newborn Cinema",
    role: "Web & Systems Developer Intern",
    location: "Vavuniya, Sri Lanka",
    startDate: "2026-03-23",
    endDate: "2026-06-30",
    displayPeriod: "23 Mar - 30 Jun 2026",
    description:
      "Contributed to the development of a professional networking platform for the cinema industry, participating across design, development, implementation and project execution.",
    highlights: [
      "Contributed to the design and development of an industry-focused professional networking platform.",
      "Participated in implementation and project execution as part of a collaborative team.",
      "Expanded technical competencies through practical web development, teamwork and continuous learning.",
    ],
    verificationLabel: "Internship completion verified",
    credentialUrl: "/credentials/newborn-cinema-internship-letter.pdf",
  },
];
