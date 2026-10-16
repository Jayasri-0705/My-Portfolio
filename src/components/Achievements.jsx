import React, { useState } from 'react';
import {
  Trophy,
  Award,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Cloud,
  Layers,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { resumeData } from '../data/portfolioData';

export default function Achievements() {
  const { certifications, achievements } = resumeData;
  const cert = certifications[0];
  const [copied, setCopied] = useState(false);

  const copyRegNo = () => {
    navigator.clipboard.writeText(cert.regNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="achievements" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            ISO-certified industrial credentials, production milestones, and technical achievements.
          </p>
        </div>

        {/* Featured ISO Certification Banner */}
        <div className="mb-14">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 via-slate-900 to-blue-950/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Certification
                  </span>
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/20">
                    {cert.standard}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Year: {cert.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {cert.title}
                </h3>
                
                <p className="text-cyan-400 font-medium text-sm sm:text-base">
                  Issued by: {cert.issuer}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Covered Skills */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-2">
                    Certified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.coveredSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Registration Number Verification Box */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-center items-start lg:items-end gap-3 shrink-0">
                <div className="text-left lg:text-right">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Certificate Registration No.
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="text-base sm:text-lg font-mono font-bold text-cyan-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-cyan-500/30">
                      {cert.regNo}
                    </code>
                    <button
                      onClick={copyRegNo}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                      title="Copy Registration Number"
                      aria-label="Copy Certificate Registration Number"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  {copied && (
                    <span className="text-[11px] text-emerald-400 font-mono mt-1 block">
                      Copied to clipboard!
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Status: Authenticated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-cyan-400/90 font-mono">
                  {item.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{item.credentialId}</span>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
