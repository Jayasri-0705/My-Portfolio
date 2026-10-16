import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { resumeData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, experience, projects, education, certifications, skills } = resumeData;

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex justify-center items-start animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Floating Close Button */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-50 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 shadow-xl transition-all cursor-pointer"
        title="Close Resume"
        aria-label="Close Resume"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Main Resume Container - Authentic Proper Resume */}
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-lg shadow-2xl overflow-hidden my-4 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Document Body: Exact 1-to-1 Resume Layout */}
        <div className="p-8 sm:p-14 font-sans text-xs sm:text-[13px] leading-relaxed text-slate-900 space-y-6">
          
          {/* Header */}
          <header className="text-center pb-4 border-b border-slate-400">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black uppercase">
              {personal.name}
            </h1>
            <div className="mt-1 text-xs sm:text-[13px] text-slate-700 flex flex-wrap items-center justify-center gap-x-2">
              <a href={`mailto:${personal.email}`} className="hover:underline">
                {personal.email}
              </a>
              <span>|</span>
              <span>{personal.phone}</span>
              <span>|</span>
              <span>{personal.location}</span>
            </div>
            <div className="mt-0.5 text-xs sm:text-[13px] text-slate-700 flex flex-wrap items-center justify-center gap-x-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                linkedin.com/in/jayasri-r-11250529b
              </a>
              <span>|</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                github.com/Jayasri-0705
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-800 leading-normal text-justify">
              {personal.summary}
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              Technical Skills
            </h2>
            <ul className="space-y-1 text-slate-800">
              <li>
                <span className="font-semibold text-black">• Languages: </span>
                <span>Python</span>
              </li>
              <li>
                <span className="font-semibold text-black">• Frontend: </span>
                <span>HTML5, CSS3, React.js, Bootstrap 5, Responsive & Mobile-First Design</span>
              </li>
              <li>
                <span className="font-semibold text-black">• Backend: </span>
                <span>Django, REST APIs, Authentication & Session Management</span>
              </li>
              <li>
                <span className="font-semibold text-black">• Database: </span>
                <span>MySQL, PostgreSQL, Schema Design, Relational Data Modelling</span>
              </li>
              <li>
                <span className="font-semibold text-black">• Version Control & Collaboration: </span>
                <span>Git, GitHub</span>
              </li>
              <li>
                <span className="font-semibold text-black">• Deployment & Tools: </span>
                <span>Render (Cloud Deployment), VS Code, Postman, JSON</span>
              </li>
            </ul>
          </section>

          {/* Internship Experience */}
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              Internship Experience
            </h2>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between font-bold text-black">
                <span>
                  Full Stack Web Development Intern — MIST Software Solutions Pvt. Ltd., Coimbatore (ISO 9001:2015 Certified)
                </span>
                <span className="font-normal text-slate-700 text-xs">
                  02 Jul 2025 - 02 Aug 2025
                </span>
              </div>
              <div className="text-slate-600 text-xs">
                Certificate Verified | Reg. No: 922322106040
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-800">
                {experience[0].highlights.map((item, idx) => (
                  <li key={idx} className="leading-normal">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              Projects
            </h2>
            <div className="space-y-3.5">
              {/* Project 1 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between font-bold text-black">
                  <span>Job Portal Web Application | Python, Django, React.js, MySQL</span>
                  <span className="font-normal text-slate-700 text-xs">2025-26</span>
                </div>
                <div className="text-slate-600 text-xs flex flex-wrap gap-2 mb-1">
                  <span>
                    Live:{' '}
                    <a
                      href="https://jobportal-1-pibn.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline"
                    >
                      jobportal-1-pibn.onrender.com
                    </a>
                  </span>
                  <span>|</span>
                  <span>
                    GitHub:{' '}
                    <a
                      href="https://github.com/Jayasri-0705/Jobportal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline"
                    >
                      github.com/Jayasri-0705/Jobportal
                    </a>
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  {projects[0].bulletPoints.map((bp, i) => (
                    <li key={i} className="leading-normal">
                      {bp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between font-bold text-black">
                  <span>Blog Web Application | Python, Django, MySQL, Render</span>
                  <span className="font-normal text-slate-700 text-xs">2025-26</span>
                </div>
                <div className="text-slate-600 text-xs flex flex-wrap gap-2 mb-1">
                  <span>
                    Live:{' '}
                    <a
                      href="https://blog-project-0dxk.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline"
                    >
                      blog-project-0dxk.onrender.com
                    </a>
                  </span>
                  <span>|</span>
                  <span>
                    GitHub:{' '}
                    <a
                      href="https://github.com/Jayasri-0705/blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline"
                    >
                      github.com/Jayasri-0705/blog
                    </a>
                  </span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-800">
                  {projects[1].bulletPoints.map((bp, i) => (
                    <li key={i} className="leading-normal">
                      {bp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between font-bold text-black">
                  <span>IoT and Deep Learning Structural Crack Detection System | TensorFlow, Python, IoT, Microcontroller</span>
                  <span className="font-normal text-slate-700 text-xs">2025-26</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-800 pt-1">
                  {projects[2].bulletPoints.map((bp, i) => (
                    <li key={i} className="leading-normal">
                      {bp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              Education
            </h2>
            <div className="flex flex-wrap items-baseline justify-between font-bold text-black">
              <span>
                B.E. - Electronics and Communication Engineering | University College of Engineering, Dindigul (Anna University)
              </span>
              <span className="font-normal text-slate-700 text-xs">2022-2026</span>
            </div>
            <div className="font-semibold text-slate-800">
              CGPA: 7.78 / 10
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
              Certifications
            </h2>
            <ul className="space-y-1 text-slate-800">
              <li>
                <span className="font-semibold text-black">
                  • Full Stack Web Development - MIST Software Solutions Pvt. Ltd. (ISO 9001:2015)
                </span>{' '}
                <span>| 2025 | Reg. No: 922322106040</span>
              </li>
              <li>
                <span>• Covers: HTML5, CSS3, Bootstrap 5, Python, Django, MySQL, REST API, Git</span>
              </li>
            </ul>
          </section>

        </div>

        {/* Bottom of the Resume: Download Button Only */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-xs font-medium">
            Official Single-Page Resume of {personal.name}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs sm:text-sm font-medium transition-colors"
            >
              Close
            </button>
            <a
              href={personal.resumeUrl}
              download={personal.resumeFileName}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
