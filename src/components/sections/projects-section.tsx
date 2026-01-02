'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Book Locator',
    description:
      'A web-based peer-to-peer book marketplace connecting readers within local communities. Users can buy, sell, and discover books nearby, fostering a sustainable and community-driven reading culture.',
    technologies: ['Next.js', 'MongoDB', 'Shadcn UI', 'Node.js', 'Express.js', 'TypeScript', 'Stripe', 'Cloudinary'],
    github: 'https://github.com/Ramsan-code/Book-Locator.git',
    deployedUrl: 'https://book-locator.vercel.app/',
    color: 'indigo',
  },
  {
    title: 'Mini-Pos-Api',
    description:
      'A RESTful API for Point of Sale systems using Node.js and MongoDB with MVC architecture. Features CRUD operations, search, filters, and pagination.',
    technologies: ['Express', 'Node.js', 'JavaScript', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/Ramsan-code/mini-pos-api.git',
    deployedUrl: 'https://mini-pos-api.vercel.app/',
    color: 'emerald',
  },
  {
    title: 'Show Tracker',
    description:
      'A modern web application for tracking and managing favorite TV shows and movies with a premium cinema-inspired design and LocalStorage persistence.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ramsan-code/Assignment1_Ramsan.git',
    deployedUrl: 'https://assignment1-ramsan.vercel.app/',
    color: 'cyan',
  },
  {
    title: 'Exam Result Progress System',
    description: 'A Python-based system for tracking and analyzing student exam results and academic progress.',
    technologies: ['Python'],
    github: 'https://github.com/Ramsan-code/final-assignment.git',
    deployedUrl: '',
    color: 'amber',
  },
  {
    title: 'Google Translator',
    description:
      'A web application for real-time text translation between different languages using the Google Translate API.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Google Translate API'],
    github: 'https://github.com/Ramsan-code/google_Translater.git',
    deployedUrl: '',
    color: 'pink',
  },
  {
    title: 'QR Code Generator',
    description:
      'A user-friendly web application for creating QR codes quickly for URLs, text, and other data.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ramsan-code/QR_Genarator.git',
    deployedUrl: '',
    color: 'violet',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  indigo: { bg: 'from-indigo-500/20', border: 'border-indigo-500/30', text: 'text-indigo-400', glow: 'group-hover:shadow-indigo-500/20' },
  emerald: { bg: 'from-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400', glow: 'group-hover:shadow-emerald-500/20' },
  cyan: { bg: 'from-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'group-hover:shadow-cyan-500/20' },
  amber: { bg: 'from-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400', glow: 'group-hover:shadow-amber-500/20' },
  pink: { bg: 'from-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'group-hover:shadow-pink-500/20' },
  violet: { bg: 'from-violet-500/20', border: 'border-violet-500/30', text: 'text-violet-400', glow: 'group-hover:shadow-violet-500/20' },
};

export function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <section id="projects" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4 animate-fade-in-up">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Showcasing my AI, Full Stack & Next.js projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <div
                key={project.title}
                className={`group card-glass rounded-2xl overflow-hidden hover-lift transition-all duration-500 ${colors.glow} hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${colors.bg} to-transparent`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      {project.deployedUrl && (
                        <a
                          href={project.deployedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {expandedProjects.has(index) || project.description.length <= 100
                      ? project.description
                      : `${project.description.substring(0, 100)}...`}
                    {project.description.length > 100 && (
                      <button
                        onClick={() => toggleProject(index)}
                        className={`ml-1 ${colors.text} hover:underline text-sm font-medium`}
                      >
                        {expandedProjects.has(index) ? 'Less' : 'More'}
                      </button>
                    )}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="tech-tag px-3 py-1 rounded-full text-xs text-zinc-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1 rounded-full text-xs text-zinc-500 bg-white/5 border border-white/5">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// initial full project commit

