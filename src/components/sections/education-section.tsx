export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4 animate-fade-in-up">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            An academic foundation in AI, full-stack development, UI/UX design, and business fundamentals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-glass rounded-2xl p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {[
                { school: 'Uki Technology of School', program: 'Full-Stack Development & Entrepreneurship', date: 'May - December 2025' },
                { school: 'The Institute of Comparative Analysis', program: 'Diploma in Human Resource Management', date: 'April - Ongoing' },
                { school: 'NoviTech R&D Private Limited', programs: ['AI MasterClass', 'UI/UX Design', 'Full Stack Development'], date: '2025' },
                { school: 'Yarl IT Hub', program: 'Startup Essentials Program', date: 'June - August 2025' },
                { school: 'Balmoral Institute', program: 'Diploma in Microsoft Office', date: 'February - April 2025' },
              ].map((item, index) => (
                <div key={index} className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300">
                  <h4 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors">{item.school}</h4>
                  {item.program && <p className="text-emerald-400 text-sm mt-1">{item.program}</p>}
                  {item.programs && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.programs.map((p, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-zinc-500 text-xs mt-2">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass rounded-2xl p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 border border-indigo-500/20">
              <h4 className="text-base font-semibold text-white">Current Role</h4>
              <p className="text-indigo-400 text-sm mt-1">AI & Full Stack Web Developer</p>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Building web applications using MERN & Next.js with AI integration, UI/UX, and SaaS-focused thinking.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'MasterClass in Artificial Intelligence',
                'MasterClass in Full Stack Development',
                'UI/UX Design MasterClass',
                'Startup Essentials 2025 Program',
                'Intro to AI & Machine Learning',
                'Skill Camp: Leveraging Full Stack with AI',
                '2 Days Masterclass in Data Analytics',
                'Modern Project Management Trends',
                'Human Psychology in Online Manipulation',
                'Bootcamp in Data Driven IT Sectors',
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// initial full project commit
