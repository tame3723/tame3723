import React from 'react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { IProject } from '../data/types';

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={`group relative bg-brand-surface rounded-lg border transition-all duration-300 hover:border-brand-borderHover hover:-translate-y-1 ${
      project.featured 
        ? 'border-brand-accent/40 col-span-1 lg:col-span-2 p-6 md:p-8 hover:shadow-md bg-gradient-to-tr from-brand-surface to-brand-background/40' 
        : 'border-brand-border p-6 hover:shadow-sm'
    }`}>
      {/* Category Tag */}
      <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-accent bg-brand-accent/10 px-2.5 py-1 rounded-full border border-brand-accent/10">
        {project.category}
      </span>

      {/* Project Title */}
      <h3 className={`font-bold text-brand-textPrimary group-hover:text-brand-accent transition-colors mt-4 mb-2 ${
        project.featured ? 'text-xl md:text-2xl' : 'text-lg'
      }`}>
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-brand-textSecondary text-sm leading-relaxed mb-6">
        {project.shortDescription}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="text-xs bg-brand-background text-brand-textSecondary border border-brand-border px-2.5 py-1 rounded font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Dynamic Link Interactions */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-border">
        <a 
          href={`#/project/${project.id}`} 
          className="inline-flex items-center gap-1.5 text-xs text-brand-accent hover:text-brand-accentHover font-semibold transition-colors"
        >
          <span>Explore Architecture Case Study</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="flex items-center gap-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            title="View Code on GitHub"
            className="text-brand-textMuted hover:text-brand-textPrimary transition-colors p-1"
          >
            <Github size={16} />
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              title="View Live Site"
              className="text-brand-textMuted hover:text-brand-textPrimary transition-colors p-1"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
