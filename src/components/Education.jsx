import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Building, CheckCircle2, Star } from 'lucide-react';
import { resumeData } from '../data/portfolioData';

export default function Education() {
  const { education } = resumeData;
  const edu = education[0];

  return (
    <section id="education" className="py-24 relative bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Foundational engineering studies bridging computational electronics and software systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600"></div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-semibold">
                    Anna University Affiliate
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-slate-300 text-sm sm:text-base font-medium">
                  <Building className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{edu.institution}</span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-950/60 to-slate-900 border border-cyan-500/40 text-center shrink-0 self-start md:self-auto">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Cumulative Score
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
                  7.78 <span className="text-sm font-normal text-slate-400">/ 10</span>
                </span>
                <span className="text-[11px] font-medium text-emerald-400 block mt-0.5">
                  CGPA Record
                </span>
              </div>
            </div>

            {/* Description & Relevance */}
            <div className="pt-6 space-y-4">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {edu.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Academic Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {edu.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
