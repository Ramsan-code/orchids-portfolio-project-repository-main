import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study`,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: `${project.name} Case Study`, description: project.summary, images: [project.images[0].src] },
    twitter: { card: "summary_large_image", title: `${project.name} Case Study`, description: project.summary, images: [project.images[0].src] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <main id="main" className="case-study">
    <header className="case-hero shell">
      <Link href="/#projects" className="back-link"><ArrowLeft /> All projects</Link>
      <p className="kicker">{project.categories.join(" / ")}</p>
      <h1>{project.name}</h1>
      <p className="case-intro">{project.summary}</p>
      <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <div className="case-actions">
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github /> Source</a>}
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink /> Live project</a>}
        {project.repositoryVisibility === "private" && <span>Private repository</span>}
      </div>
    </header>

    {project.images && <section className="case-gallery shell" aria-labelledby="screenshots-heading">
      <p className="kicker" id="screenshots-heading">Product screens</p>
      <div>{project.images.map((image) => <figure key={image.src}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 900px) 100vw, 85vw" />
        <figcaption>{image.caption}</figcaption>
      </figure>)}</div>
    </section>}

    <div className="case-body shell">
      <aside><p>Role</p><strong>{project.role}</strong><p>Focus</p><strong>Product engineering<br />Full-stack delivery</strong></aside>
      <div className="case-content">
        <section><p className="kicker">The problem</p><h2>{project.problem}</h2></section>
        <section><p className="kicker">The solution</p><h2>{project.solution}</h2></section>
        <section><p className="kicker">Product features</p><ul className="number-list">{project.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span>{feature}</li>)}</ul></section>
        <section><p className="kicker">Engineering decisions</p><ul className="number-list">{project.engineering.map((decision, index) => <li key={decision}><span>0{index + 1}</span>{decision}</li>)}</ul></section>
        <section><p className="kicker">What I learned</p><h2>{project.learned}</h2></section>
      </div>
    </div>
  </main>;
}
