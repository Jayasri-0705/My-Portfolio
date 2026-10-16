import React from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  ExternalLink,
  Code,
  Layers,
  Server,
  Database,
  Terminal as TerminalIcon,
  CheckCircle2,
  Download,
  FileText
} from 'lucide-react';
import { resumeData } from '../data/portfolioData';

export default function Hero({ onOpenPdf }) {
  const { personal } = resumeData;

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>ISO 9001:2015 Certified Full Stack Developer</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 text-base sm:text-lg font-mono">Hi there, I'm</p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  {personal.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                Software Engineer & Full Stack Developer
              </h2>
            </div>

            {/* Brief Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Skilled in <strong className="text-white font-semibold">Python, Django, and React.js</strong>, with hands-on experience independently architecting and deploying production-grade web systems live on Render. Experienced in RESTful API engineering, relational MySQL database modelling, and AI deep learning integrations.
            </p>

            {/* Location & Quick Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${personal.email}`} className="hover:text-cyan-300 transition-colors">
                  {personal.email}
                </a>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/90 text-cyan-300 hover:text-white border border-cyan-500/40 font-semibold text-sm sm:text-base shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                title="View Resume in PDF Viewer"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-medium text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get in Touch</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 border border-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl glass-card border border-slate-700/60 shadow-2xl overflow-hidden bg-slate-950/80">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                      jayasri@portfolio:~$
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-5 font-mono text-xs sm:text-sm space-y-4 text-slate-300">
                  <div>
                    <div className="text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">$</span>
                      <span>whoami</span>
                    </div>
                    <div className="text-cyan-300 font-medium pl-4 mt-0.5">
                      "Jayasri R" &lt;Software Engineer / Full Stack Developer&gt;
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">$</span>
                      <span>cat skills.json</span>
                    </div>
                    <div className="text-emerald-400/90 pl-4 mt-1 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 text-[11px] sm:text-xs">
                      &#123;
                      <br />
                      &nbsp;&nbsp;"primary": ["Python", "Django", "React.js"],
                      <br />
                      &nbsp;&nbsp;"backend": ["REST APIs", "MySQL", "PostgreSQL"],
                      <br />
                      &nbsp;&nbsp;"deployment": ["Render", "Git", "Postman"]
                      <br />
                      &#125;
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">$</span>
                      <span>fetch-live-deployments</span>
                    </div>
                    <div className="text-slate-300 pl-4 mt-1 space-y-1">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>jobportal-1-pibn.onrender.com (Live)</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>blog-project-0dxk.onrender.com (Live)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-slate-400 flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">$</span>
                      <span>system.status</span>
                    </div>
                    <div className="text-sky-300 pl-4 mt-0.5">
                      "Ready for high-impact software engineering opportunities."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-8 border-t border-slate-800/80">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 group-hover:scale-105 transition-transform inline-block">
                  {stat.value}
                </span>
                <span className="text-xs font-mono font-semibold text-cyan-300/80 uppercase">
                  {stat.suffix}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-200 mt-2">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
