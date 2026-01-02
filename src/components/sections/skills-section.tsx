const technicalSkills = [
  {
    category: 'Full Stack Development',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'indigo',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'RESTful APIs', 'Git/GitHub', 'AWS', 'Deployment'],
  },
  {
    category: 'UI/UX Design',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: 'pink',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Balsamiq', 'Photoshop', 'Illustrator'],
  },
  {
    category: 'AI & Machine Learning',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'emerald',
    skills: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-Learn', 'NLP', 'Computer Vision'],
  },
  {
    category: 'Tools & Platforms',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'cyan',
    skills: ['Google Cloud', 'Google Colab', 'Cursor', 'VS Code', 'Microsoft Office', 'Google Workspace'],
  },
];

const softSkills = [
  'Communication', 'Problem Solving', 'Teamwork', 'Time Management', 'Adaptability',
  'Critical Thinking', 'Creativity', 'Leadership', 'Learning Agility',
];

const businessSkills = [
  'Competitor Analysis', 'Financial Projections', 'Marketing Strategy', 'Business Modeling',
  'Pitch Deck Creation', 'Startup Fundamentals',
];

const hrSkills = [
  'Team Building', 'Strategic Management', 'HR Administration', 'Labor Laws', 'KPIs & OKRs',
];

const colorMap: Record<string, { gradient: string; border: string }> = {
  indigo: { gradient: 'from-indigo-500 to-indigo-600', border: 'hover:border-indigo-500/30' },
  pink: { gradient: 'from-pink-500 to-pink-600', border: 'hover:border-pink-500/30' },
  emerald: { gradient: 'from-emerald-500 to-emerald-600', border: 'hover:border-emerald-500/30' },
  cyan: { gradient: 'from-cyan-500 to-cyan-600', border: 'hover:border-cyan-500/30' },
};

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4 animate-fade-in-up">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Technical and soft skills that drive my development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {technicalSkills.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <div
                key={category.category}
                className={`card-glass rounded-2xl p-6 hover-lift ${colors.border} transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-tag px-3 py-1.5 rounded-lg text-sm text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-glass rounded-2xl p-6 hover-lift animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg text-sm text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card-glass rounded-2xl p-6 hover-lift animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Business Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {businessSkills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card-glass rounded-2xl p-6 hover-lift animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              HR Knowledge
            </h3>
            <div className="flex flex-wrap gap-2">
              {hrSkills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg text-sm text-amber-300 bg-amber-500/10 border border-amber-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// initial full project commit
