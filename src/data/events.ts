export interface PortfolioEvent {
  slug: string;
  title: string;
  organizer: string;
  type: "hackathon" | "buildathon" | "leadership" | "community" | "workshop";
  year: number;
  date?: string;
  description: string;
  label: string;
  sourceUrl?: string;
  verified: boolean;
}

export const events: PortfolioEvent[] = [
  {
    slug: "ygc-innovation-festival-2026 & 2025",
    title: "YGC Innovation Festival 2026 & 2025",
    organizer: "Yarl IT Hub",
    type: "community",
    year: 2026,
    date: "21-22 Aug 2026",
    label: "Innovation & Community",
    description:
      "Participated in an innovation-focused technology event, engaging with the regional technology and entrepreneurship community.",
    sourceUrl: socials.yarlItHub,
    verified: true,
  },
];

export const verifiedEvents = events.filter((event) => event.verified);
import { socials } from "@/data/socials";
