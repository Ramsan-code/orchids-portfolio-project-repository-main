export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  kind: "desktop" | "mobile";
}

export interface Project {
  slug: string;
  name: string;
  categories: string[];
  group: "product" | "client";
  summary: string;
  role: string;
  stack: string[];
  images: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  repositoryVisibility: "public" | "private";
  problem: string;
  solution: string;
  features: string[];
  engineering: string[];
  learned: string;
}

export const projects: Project[] = [
  {
    slug: "book-locator",
    name: "Book Locator",
    categories: ["Full stack", "Product"],
    group: "product",
    summary: "A local book marketplace that helps readers discover used books nearby and manage buyer-seller transactions.",
    role: "Full-stack developer",
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "JWT", "Stripe"],
    images: [
      { src: "/projects/book-locator/cover.webp", alt: "Book Locator nearby book discovery interface on desktop", caption: "Live homepage and discovery interface", width: 1600, height: 1000, kind: "desktop" },
      { src: "/projects/book-locator/mobile.webp", alt: "Book Locator responsive book search interface on mobile", caption: "Responsive mobile discovery", width: 390, height: 844, kind: "mobile" },
    ],
    liveUrl: "https://book-locator.vercel.app",
    githubUrl: "https://github.com/Ramsan-code/Book-Locator",
    repositoryVisibility: "public",
    problem: "Used books can be difficult to discover locally, while buying and selling often happens through disconnected, unstructured channels.",
    solution: "A responsive marketplace connecting nearby readers through searchable listings, approval controls and a traceable buyer-seller workflow.",
    features: ["Reader and book approval workflows", "Nearby and advanced book search", "Buyer, seller and transaction states", "Reviews and email notifications", "Admin dashboard and moderation", "Cloud media uploads and payment integration"],
    engineering: ["Separated Next.js frontend and Express API", "MongoDB geospatial data through Mongoose", "JWT authentication, bcrypt and role-based authorization", "Rate-limited REST endpoints with pagination", "Stripe integration and Cloudinary-backed uploads", "Independent Vercel deployment configuration"],
    learned: "Designing across UI, API, data, security and operations made the trade-offs between feature speed, workflow clarity and production safety concrete.",
  },
  {
    slug: "sazi-portfolio",
    name: "Sazi Portfolio",
    categories: ["Client work", "Full stack"],
    group: "client",
    summary: "A graphic designer portfolio with focused visual storytelling, responsive public pages and a private content-management workflow.",
    role: "Designer and full-stack developer",
    stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Cloudinary", "Resend"],
    images: [
      { src: "/projects/sazi-portfolio/cover.webp", alt: "Sazi Balasingam graphic design portfolio homepage displayed on desktop", caption: "Live portfolio homepage", width: 1600, height: 1000, kind: "desktop" },
      { src: "/projects/sazi-portfolio/mobile.webp", alt: "Sazi Balasingam portfolio homepage on a mobile viewport", caption: "Responsive mobile homepage", width: 390, height: 844, kind: "mobile" },
    ],
    liveUrl: "https://sazi-portfolio-git-main-ramsan.vercel.app",
    repositoryVisibility: "private",
    problem: "A graphic designer needed a distinctive portfolio that foregrounded identity and project work while keeping content maintainable.",
    solution: "A responsive portfolio and administration system with bold typography, clear work discovery and managed project media.",
    features: ["Responsive portfolio pages", "Featured project presentation", "Admin project management", "Cloudinary image uploads", "Resend-powered contact flow", "Protected administration routes"],
    engineering: ["Next.js App Router application", "Static public project data with MongoDB-backed admin CRUD", "JWT-secured admin session", "Cloudinary media workflow", "Accessible responsive navigation", "Component-level animation with reduced-motion support"],
    learned: "Client portfolio work succeeds when the design reflects the person’s craft while the underlying system stays easy to update and operate.",
  },
  {
    slug: "triple-o-nine",
    name: "Triple O Nine",
    categories: ["Production", "Business website"],
    group: "client",
    summary: "A creative studio website combining service discovery, portfolio content and AI-assisted customer support.",
    role: "Full-stack developer",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Cloudinary", "Groq API"],
    images: [
      { src: "/projects/triple-o-nine/cover.webp", alt: "Triple O Nine creative studio homepage showing service cards and AI chat support", caption: "Production homepage", width: 1842, height: 1041, kind: "desktop" },
      { src: "/projects/triple-o-nine/graphic-design.webp", alt: "Triple O Nine graphic design portfolio showing logo and brand identity projects", caption: "Graphic design portfolio", width: 1846, height: 1047, kind: "desktop" },
    ],
    repositoryVisibility: "private",
    problem: "The studio needed a modern public presence and a faster way for visitors to explore services and get answers.",
    solution: "A production-focused company site combining responsive content, managed media and an AI-powered support experience.",
    features: ["Responsive creative studio website", "AI chatbot with local fallback answers", "Service and portfolio discovery", "Cloud media workflow", "Contact delivery through Resend"],
    engineering: ["Next.js application architecture", "MongoDB-backed project and review data", "Cloudinary media management", "Groq API integration", "Responsive navigation and floating assistant controls"],
    learned: "A useful AI feature begins with a clear customer task and must remain subordinate to reliable navigation, content and performance.",
  },
  {
    slug: "olinethra",
    name: "Olinethra",
    categories: ["Next.js", "Business platform"],
    group: "client",
    summary: "An engineering-first web studio platform with public content, admin workflows, insights and service tooling.",
    role: "Full-stack contributor",
    stack: ["Next.js", "React", "Tailwind CSS", "REST APIs", "RBAC", "Cloudinary"],
    images: [
      { src: "/projects/olinethra/cover.webp", alt: "Olinethra engineering studio homepage running locally from the project repository", caption: "Local application homepage", width: 1600, height: 1000, kind: "desktop" },
    ],
    githubUrl: "https://github.com/Ramsan-code/Olinethra-Wec-Development",
    repositoryVisibility: "public",
    problem: "A web studio needs more than a brochure site: publishing, leads, service content and administration must work as one system.",
    solution: "A multi-route platform with a public marketing surface and protected operational workflows for content and inquiries.",
    features: ["Public service and portfolio pages", "Insights publishing workflow", "Admin content and lead management", "Authentication and role controls", "Chat and inquiry endpoints"],
    engineering: ["Next.js 16 App Router", "Server-first page architecture", "Separated production API integration", "Documented authentication and RBAC", "Structured content and operational documentation"],
    learned: "Larger products benefit from explicit boundaries, written operational guidance and a consistent data model as much as polished UI.",
  },
];

export const productProjects = projects.filter((project) => project.group === "product");
export const clientProjects = projects.filter((project) => project.group === "client");

export const selectedWork = [
  { name: "Alpha LMS", categories: ["Full stack", "Education"], summary: "A multi-role learning platform with course workflows, protected dashboards and AI-assisted teaching tools.", stack: ["Next.js", "Express", "MongoDB", "JWT"], githubUrl: "https://github.com/Ramsan-code/Alpha-squad-frond-end", image: "/projects/alpha-lms/cover.webp" },
  { name: "AVS Real Estate", categories: ["Client work", "Frontend"], summary: "A responsive property website for real-estate and agricultural ventures in Northern Sri Lanka.", stack: ["Next.js", "TypeScript", "Tailwind CSS"], image: "/projects/avs-real-estate/cover.webp", githubUrl: "https://github.com/Ramsan-code/AVS-Real-Easte", liveUrl: "https://avs-real-easte.vercel.app" },
  { name: "New Born Cinema Systems", categories: ["Internship", "Internal system"], summary: "Internal web and management systems developed during a four-month internship.", stack: ["Next.js", "React", "Tailwind CSS", "Node.js"], image: "/projects/new-born-cinema/cover.webp", repositoryVisibility: "private" as const },
];

export const skillGroups = [
  ["Frontend", ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Responsive UI"]],
  ["Backend", ["Node.js", "Express.js", "REST APIs", "MVC architecture"]],
  ["Data & security", ["MongoDB", "Mongoose", "JWT", "bcrypt", "RBAC"]],
  ["Services & delivery", ["Cloudinary", "Stripe", "Vercel", "MongoDB Atlas", "Git", "GitHub"]],
  ["Design", ["Figma", "Wireframing", "Prototyping", "Responsive design"]],
  ["AI-assisted development", ["Cursor", "Prompt engineering", "AI coding workflows", "AI API integration", "Groq API"]],
] as const;
