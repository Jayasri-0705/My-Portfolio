import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openPdfResume = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenPdf={openPdfResume} />

      {/* Main Content: Exact 7 Requested Sections */}
      <main className="flex-grow">
        {/* 1. Home */}
        <Hero onOpenPdf={openPdfResume} />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Education */}
        <Education />

        {/* 6. Achievements */}
        <Achievements />

        {/* 7. Contact */}
        <Contact onOpenPdf={openPdfResume} />
      </main>

      {/* Footer */}
      <Footer onOpenPdf={openPdfResume} />

      {/* Resume PDF Viewer with Download Only */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
