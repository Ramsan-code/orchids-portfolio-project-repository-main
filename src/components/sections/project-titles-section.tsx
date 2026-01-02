'use client';

const projects = [
  'AI Doc Explorer', 'Students Info Dashboard', 'Form Design', 'Book API', 'File Base User API',
  'Uki Coding School Biodata', 'My Daily Tasks', 'Tasty Bites Restaurant', 'Todo App', 'IPL Score',
  'Taste of Jaffna Project', 'Math Exercise', 'Average Calculator', 'Number Sorting', 'Big Number Finder',
  'Mass Converter', 'Mini Calculator',
];

export function ProjectTitlesSection() {
  return (
    <section id="project-titles" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-2 animate-fade-in-up">
            More Projects on <span className="text-indigo-400">GitHub</span>
          </h3>
          <p className="text-zinc-500 text-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Explore my other work
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {projects.map((project, index) => (
            <div
              key={project}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-zinc-400 text-sm font-medium hover:border-indigo-500/30 hover:text-white hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              style={{ animationDelay: `${0.3 + index * 0.02}s` }}
            >
              {project}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://github.com/Ramsan-code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-medium hover:bg-white/10 hover:border-indigo-500/30 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
// initial full project commit
