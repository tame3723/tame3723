import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Cpu, Database, AlertCircle, Award, BookOpen, Lightbulb } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Button } from '../components/Button';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find project based on route parameters
  const project = projectsData.find((p) => p.id === id);

  // Fallback state if the project ID does not match
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-background text-center px-6">
        <AlertCircle size={48} className="text-brand-accent mb-4" />
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
        
        {/* Back Navigation Link - Clean Relative Path */}
        <a 
          href="#/#work" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent hover:text-brand-textPrimary tracking-wide uppercase transition-colors mb-8 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Selected Work</span>
        </a>

        {/* 1. Header Block */}
        <header className="mb-12 border-b border-brand-border/40 pb-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-textPrimary">
                {project.name}
              </h1>
              <p className="text-base md:text-lg text-brand-textMuted leading-relaxed max-w-3xl">
                {project.shortDescription}
              </p>
            </div>

            {/* Quick Interactive Actions */}
            <div className="flex flex-row md:flex-col gap-3 shrink-0">
              <Button variant="outline" size="sm" as="a" href={project.githubUrl} className="gap-2">
                <Github size={14} />
                <span>Source Code</span>
              </Button>
              {project.liveUrl && (
                <Button variant="primary" size="sm" as="a" href={project.liveUrl} className="gap-2">
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </Button>
              )}
            </div>
          </div>

          {/* Quick Technical Specs Meta */}
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs bg-brand-surface text-brand-textPrimary border border-brand-border px-3 py-1 rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 2. Project Deep-Dive Content Grid */}
        <div className="space-y-12">
          
          {/* Section: Problem & Motivation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
              <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-3 flex items-center gap-2">
                <AlertCircle size={16} />
                Problem Statement
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
              <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-3 flex items-center gap-2">
                <Lightbulb size={16} />
                Motivation
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed">
                {project.motivation}
              </p>
            </div>
          </div>

          {/* Section: System Solution & Flow */}
          <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-lg space-y-6">
            <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase flex items-center gap-2">
              <Cpu size={16} />
              System Solution
            </h3>
            <p className="text-sm text-brand-textMuted leading-relaxed">
              {project.solution}
            </p>

            {/* Logical system diagram flow */}
            <div className="pt-6 border-t border-brand-border/40">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-textMuted mb-4 text-center">
                Logical System Flow & Data Pipeline
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 bg-brand-background border border-brand-border p-4 rounded-md overflow-x-auto text-xs font-mono">
                <div className="px-3 py-1.5 bg-brand-surface border border-brand-border text-brand-textPrimary rounded">User/Admin</div>
                <div className="text-brand-accent font-bold">→</div>
                <div className="px-3 py-1.5 bg-brand-surface border border-brand-border text-brand-textPrimary rounded">React UI (TS)</div>
                <div className="text-brand-accent font-bold">→</div>
                <div className="px-3 py-1.5 bg-brand-surface border border-brand-border text-brand-textPrimary rounded">API Controller</div>
                <div className="text-brand-accent font-bold">→</div>
                <div className="px-3 py-1.5 bg-brand-surface border border-brand-border text-brand-textPrimary rounded">Execution / Core ML</div>
                <div className="text-brand-accent font-bold">→</div>
                <div className="px-3 py-1.5 bg-brand-surface border border-brand-border text-brand-textPrimary rounded">Data Layer</div>
              </div>
            </div>
          </div>

          {/* Section: Challenges */}
          <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-lg">
            <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-4 flex items-center gap-2">
              <Database size={16} />
              Engineering Challenges
            </h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="text-xs font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-2.5 py-1 rounded">
                    0{index + 1}
                  </div>
                  <p className="text-sm text-brand-textMuted leading-relaxed">
                    {challenge}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Measurable Results */}
          <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-lg">
            <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-6 flex items-center gap-2">
              <Award size={16} />
              Measurable Performance Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="bg-brand-background border border-brand-border p-4 rounded-md text-center">
                  <p className="text-[10px] text-brand-textMuted uppercase tracking-wider font-semibold mb-1">
                    {res.metricName}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-brand-accent">
                    {res.metricValue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Reflections & Future Roadmaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
              <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-3 flex items-center gap-2">
                <BookOpen size={16} />
                Lessons Learned
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
            <div className="bg-brand-surface border border-brand-border p-6 rounded-lg">
              <h3 className="font-bold text-sm text-brand-accent tracking-wider uppercase mb-3 flex items-center gap-2">
                <Cpu size={16} />
                Future Improvements
              </h3>
              <p className="text-sm text-brand-textMuted leading-relaxed">
                {project.futureImprovements}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Navigation */}
        <footer className="mt-16 pt-8 border-t border-brand-border/40 text-center">
          <a 
            href="#/#work" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent hover:text-brand-textPrimary tracking-wide uppercase transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio Grid</span>
          </a>
        </footer>

      </div>
    </article>
  );
};
