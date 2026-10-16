import React from 'react';
import {
  User,
  Briefcase,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { resumeData } from '../data/portfolioData';

export default function About() {
  const { personal, experience } = resumeData;
  const intern = experience[0];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering robust full-stack applications with an emphasis on production-readiness, database integrity, and scalable UI architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Focus */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Professional Profile</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personal.summary}
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Core Development Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Full-Stack Python & Django</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Modern React.js Component Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Relational Database Modelling (MySQL)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Cloud Deployment & Production Config</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-500/20 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 border border-cyan-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white">
                  ISO 9001:2015 Verified Credentials
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Certified in Full Stack Web Development by MIST Software Solutions with official Certificate Registration Number: <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono">922322106040</code>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Experience Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  <span>Work Experience</span>
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  Industrial Internship
                </span>
              </div>

              {/* Internship Card */}
              <div className="relative pl-6 border-l-2 border-cyan-500/40 space-y-3">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400"></div>

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {intern.role}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{intern.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-cyan-400 font-medium">
                  <span className="text-slate-200 font-semibold">{intern.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {intern.location}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-mono">{intern.certification}</span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
                  {intern.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags used in internship */}
                <div className="pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {intern.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
