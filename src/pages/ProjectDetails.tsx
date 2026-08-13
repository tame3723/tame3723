import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Cpu, Database, AlertCircle, Award, BookOpen, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Button } from '../components/Button';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-background text-center px-6">
        <AlertCircle size={48} className="text-brand-accent mb-4 animate-bounce" />
        <h1 className="text-2xl font-bold text-brand-textPrimary mb-2">Project Case Study Not Found</h1>
        <p className="text-brand-textMuted text-sm mb-6 max-w-md">
          The project ID you are attempting to view might have been moved, updated, or is currently undergoing maintenance.
        </p>
        <Button variant="primary" as="a" href="#/">
          Back to Portfolio Home
        </Button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-brand-background pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <a 
          href="#/#work" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent hover:text-brand-textPrimary tracking-wide uppercase transition-colors mb-8 group font-mono"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Selected Work</span>
        </a>

        {/* Header Section */}
        <header className="mb-12 border-b border-brand-border pb-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-wider font-bold text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-full border border-brand-accent/20 font-mono">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-textPrimary">
                {project.name}
              </h1>
              <p className="text-base md:text-lg text-brand-textSecondary leading-relaxed max-w-3xl">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-row md:flex-col gap-3 shrink-0">
              <Button variant="outline" size="sm" as="a" href={project.githubUrl} className="gap-2 bg-brand-surface font-mono rounded-none">
                <Github size={14} />
                <span>Project Repository</span>
              </Button>
              {project.liveUrl && (
                <Button variant="primary" size="sm" as="a" href={project.liveUrl} className="gap-2 font-mono rounded-none">
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </Button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs bg-brand-surface text-brand-textPrimary border border-brand-border px-3 py-1 rounded font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content Modules */}
        <div className="space-y-12">
          
          {/* Section: Overview & Motivation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-brand-surface border border-brand-border p-6 rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-3 flex items-center gap-2 font-mono">
                  <AlertCircle size={16} />
                  Problem Statement
                </h3>
                <p className="text-sm text-brand-textSecondary leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </div>
            <div className="bg-brand-surface border border-brand-border p-6 rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-3 flex items-center gap-2 font-mono">
                  <Lightbulb size={16} />
                  Motivation
                </h3>
                <p className="text-sm text-brand-textSecondary leading-relaxed">
                  {project.motivation}
                </p>
              </div>
            </div>
          </div>

          {/* Section: Interactive System Flows */}
          {project.id === 'techsphere-analytics' && (
            <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-xl space-y-6 shadow-sm">
              <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase flex items-center gap-2 font-mono">
                <Cpu size={16} />
                04 — Data Processing Pipeline
              </h3>
              <p className="text-sm text-brand-textSecondary leading-relaxed">
                Raw data undergoes NLP tokenization, normalization, and semantic rule-matching before mapping skill distributions across different computer science career fields.
              </p>

              {/* Data Pipeline Chart Component */}
              <div className="pt-6 border-t border-brand-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 bg-brand-background border border-brand-border p-5 rounded-lg overflow-x-auto text-[11px] font-mono text-brand-textSecondary">
                  <div className="px-3.5 py-2.5 bg-brand-surface border border-brand-accent/25 rounded-md text-brand-textPrimary font-semibold text-center w-full md:w-auto">Raw Job Data (1.3M+)</div>
                  <div className="text-brand-accent font-bold text-center rotate-90 md:rotate-0">↓</div>
                  <div className="px-3.5 py-2.5 bg-brand-surface border border-brand-border rounded-md text-center w-full md:w-auto">Cleaning & Normalization</div>
                  <div className="text-brand-accent font-bold text-center rotate-90 md:rotate-0">↓</div>
                  <div className="px-3.5 py-2.5 bg-brand-surface border border-brand-border rounded-md text-center w-full md:w-auto">CS Job Classification</div>
                  <div className="text-brand-accent font-bold text-center rotate-90 md:rotate-0">↓</div>
                  <div className="px-3.5 py-2.5 bg-brand-surface border border-brand-border rounded-md text-center w-full md:w-auto">Rule-based Skill NLP</div>
                  <div className="text-brand-accent font-bold text-center rotate-90 md:rotate-0">↓</div>
                  <div className="px-3.5 py-2.5 bg-brand-accent/10 border border-brand-accent/30 rounded-md text-brand-accent font-bold text-center w-full md:w-auto">Domain Distribution Charts</div>
                </div>
              </div>

              {/* TechSphere Results Representation Section */}
              <div className="pt-6 border-t border-brand-border space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-bold text-brand-textPrimary font-mono">
                  05 — Domain Classification Results
                </h4>
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-brand-textPrimary mb-1 font-semibold">
                      <span>Software Engineering</span>
                      <span>42.0%</span>
                    </div>
                    <div className="w-full bg-brand-background rounded-full h-2">
                      <div className="bg-brand-accent h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-brand-textPrimary mb-1 font-semibold">
                      <span>Data Science</span>
                      <span>17.3%</span>
                    </div>
                    <div className="w-full bg-brand-background rounded-full h-2">
                      <div className="bg-brand-accent h-2 rounded-full" style={{ width: '17.3%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-brand-textPrimary mb-1 font-semibold">
                      <span>DevOps</span>
                      <span>12.1%</span>
                    </div>
                    <div className="w-full bg-brand-background rounded-full h-2">
                      <div className="bg-brand-accent h-2 rounded-full" style={{ width: '12.1%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-brand-textPrimary mb-1 font-semibold">
                      <span>Cybersecurity</span>
                      <span>8.2%</span>
                    </div>
                    <div className="w-full bg-brand-background rounded-full h-2">
                      <div className="bg-brand-accent h-2 rounded-full" style={{ width: '8.2%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-brand-textPrimary mb-1 font-semibold">
                      <span>Web Development</span>
                      <span>7.9%</span>
                    </div>
                    <div className="w-full bg-brand-background rounded-full h-2">
                      <div className="bg-brand-accent h-2 rounded-full" style={{ width: '7.9%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-brand-textPrimary mb-1 font-semibold">
                      <span>AI/ML</span>
                      <span>7.2%</span>
                    </div>
                    <div className="w-full bg-brand-background rounded-full h-2">
                      <div className="bg-brand-accent h-2 rounded-full" style={{ width: '7.2%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-brand-textPrimary mb-1 font-semibold">
                      <span>Cloud Computing</span>
                      <span>5.3%</span>
                    </div>
                    <div className="w-full bg-brand-background rounded-full h-2">
                      <div className="bg-brand-accent h-2 rounded-full" style={{ width: '5.3%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Insights Section */}
              <div className="pt-6 border-t border-brand-border space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-brand-textPrimary font-mono">06 — NLP / Skill Extraction Methodology</h4>
                <p className="text-sm text-brand-textSecondary leading-relaxed">
                  Implemented a custom, highly reliable, rule-based NLP dictionary classifier mapping variations of technological terms (e.g. "py", "python3", "sklearn", "scikit-learn") to a clean master array. This mitigates library overhead, runs in under 3 minutes over 1.3M records, and delivers a robust evaluation of computer science skills.
                </p>
              </div>
            </div>
          )}

          {project.id === 'uudms' && (
            <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-xl space-y-6 shadow-sm">
              <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase flex items-center gap-2 font-mono">
                <Cpu size={16} />
                UUDMS Logical Architecture
              </h3>
              <p className="text-sm text-brand-textSecondary leading-relaxed">
                UUDMS securely manages state power utility assets by separating editing permissions from read-only lookups using a Django framework.
              </p>

              {/* Mock System Flows */}
              <div className="pt-6 border-t border-brand-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-brand-background border border-brand-border p-5 rounded-lg overflow-x-auto text-[11px] font-mono text-brand-textSecondary">
                  <div className="px-3.5 py-2.5 bg-brand-surface border border-brand-accent/25 rounded-md text-brand-textPrimary font-bold text-center w-full md:w-auto">Utility Staff</div>
                  <div className="text-brand-accent font-bold">→</div>
                  <div className="px-3.5 py-2.5 bg-brand-surface border border-brand-border rounded-md text-center w-full md:w-auto">Login & Role Validation</div>
                  <div className="text-brand-accent font-bold">→</div>
                  <div className="px-3.5 py-2.5 bg-brand-surface border border-brand-border rounded-md text-center w-full md:w-auto">Search Query Indexer</div>
                  <div className="text-brand-accent font-bold">→</div>
                  <div className="px-3.5 py-2.5 bg-brand-accent/10 border border-brand-accent/30 rounded-md text-brand-accent font-bold text-center w-full md:w-auto">PDF/CSV Export Node</div>
                </div>
              </div>

              {/* Mock Dashboard Representation */}
              <div className="pt-6 border-t border-brand-border space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-bold text-brand-textPrimary font-mono flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-brand-accent" />
                  Core Active Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-brand-background border border-brand-border p-4 rounded-md">
                    <span className="font-bold text-brand-textPrimary block mb-1">01. Authentication</span>
                    <p className="text-brand-textSecondary leading-relaxed">Role-based privileges isolating database edit controls from administrative panels.</p>
                  </div>
                  <div className="bg-brand-background border border-brand-border p-4 rounded-md">
                    <span className="font-bold text-brand-textPrimary block mb-1">02. Data Search Index</span>
                    <p className="text-brand-textSecondary leading-relaxed">Optimized SQL queries matching asset categories dynamically in under 12ms.</p>
                  </div>
                  <div className="bg-brand-background border border-brand-border p-4 rounded-md">
                    <span className="font-bold text-brand-textPrimary block mb-1">03. CSV/PDF Exporter</span>
                    <p className="text-brand-textSecondary leading-relaxed">One-click data conversion module formatting queries into downloadable utility reports.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section: Challenges */}
          <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-4 flex items-center gap-2 font-mono">
              <Database size={16} />
              Engineering Challenges
            </h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="text-xs font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-1 rounded font-mono">
                    0{index + 1}
                  </div>
                  <p className="text-sm text-brand-textSecondary leading-relaxed">
                    {challenge}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Results */}
          <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-6 flex items-center gap-2 font-mono">
              <Award size={16} />
              Measurable Performance Results
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="bg-brand-background border border-brand-border p-4 rounded-md text-center">
                  <p className="text-[10px] text-brand-textMuted uppercase tracking-wider font-semibold mb-1 font-mono">
                    {res.metricName}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-brand-accent font-mono">
                    {res.metricValue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Reflections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-brand-surface border border-brand-border p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-3 flex items-center gap-2 font-mono">
                <BookOpen size={16} />
                Lessons Learned
              </h3>
              <p className="text-sm text-brand-textSecondary leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
            <div className="bg-brand-surface border border-brand-border p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-3 flex items-center gap-2 font-mono">
                <Cpu size={16} />
                Future Improvements
              </h3>
              <p className="text-sm text-brand-textSecondary leading-relaxed">
                {project.futureImprovements}
              </p>
            </div>
          </div>

        </div>

        {/* Footer Link */}
        <footer className="mt-16 pt-8 border-t border-brand-border text-center">
          <a 
            href="#/#work" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent hover:text-brand-textPrimary tracking-wide uppercase transition-colors group font-mono"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio Grid</span>
          </a>
        </footer>

      </div>
    </article>
  );
};
