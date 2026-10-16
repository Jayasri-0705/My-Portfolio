import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  Search,
  CheckCircle2,
  Sparkles,
  Layers,
  Wrench
} from 'lucide-react';
import { resumeData } from '../data/portfolioData';

const categoryConfig = [
  { key: 'all', label: 'All Skills', icon: Sparkles },
  { key: 'languages', label: 'Languages', icon: Code },
  { key: 'frontend', label: 'Frontend', icon: Layout },
  { key: 'backend', label: 'Backend', icon: Server },
  { key: 'database', label: 'Database', icon: Database },
  { key: 'versionControl', label: 'Version Control', icon: GitBranch },
  { key: 'toolsAndDeployment', label: 'Deployment & Tools', icon: Wrench },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { skills } = resumeData;

  // Flatten skills with category metadata for filtering
  const allSkillsList = [
    ...skills.languages.map(s => ({ ...s, category: 'languages', categoryName: 'Languages' })),
    ...skills.frontend.map(s => ({ ...s, category: 'frontend', categoryName: 'Frontend' })),
    ...skills.backend.map(s => ({ ...s, category: 'backend', categoryName: 'Backend' })),
    ...skills.database.map(s => ({ ...s, category: 'database', categoryName: 'Database' })),
    ...skills.versionControl.map(s => ({ ...s, category: 'versionControl', categoryName: 'Version Control' })),
    ...skills.toolsAndDeployment.map(s => ({ ...s, category: 'toolsAndDeployment', categoryName: 'Deployment & Tools' })),
  ];

  const filteredSkills = allSkillsList.filter((item) => {
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Directly utilized in building production web applications, architecting databases, and deploying on cloud infrastructure.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categoryConfig.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills (e.g. Django, MySQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs sm:text-sm rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Categorized Grid View when "all" is selected and no search */}
        {activeTab === 'all' && searchQuery === '' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Languages */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/20">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Languages</h3>
                  <p className="text-xs text-slate-400">Core Programming</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-950/60 text-cyan-300 border border-cyan-500/40"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-sky-950/80 text-sky-400 border border-sky-500/20">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Frontend</h3>
                  <p className="text-xs text-slate-400">Interactive & Responsive UI</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-sky-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-950/80 text-blue-400 border border-blue-500/20">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Backend</h3>
                  <p className="text-xs text-slate-400">APIs & Authentication</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-blue-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Database</h3>
                  <p className="text-xs text-slate-400">Relational & Schema Design</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-teal-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Version Control */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/20">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Version Control</h3>
                  <p className="text-xs text-slate-400">Collaboration & Git Flow</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.versionControl.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-emerald-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Deployment & Tools */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-950/80 text-violet-400 border border-violet-500/20">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Deployment & Tools</h3>
                  <p className="text-xs text-slate-400">Cloud & Developer Tooling</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.toolsAndDeployment.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/90 text-slate-200 border border-slate-700/80 hover:border-violet-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Filtered Cards View */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-white text-sm">{skill.name}</h4>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide">
                    {skill.categoryName}
                  </span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
            ))}
            {filteredSkills.length === 0 && (
              <div className="col-span-full text-center py-12 text-slate-400">
                No matching skills found for "{searchQuery}".
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
