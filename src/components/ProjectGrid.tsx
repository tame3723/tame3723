import React from 'react';
import { ProjectCard } from './ProjectCard';
import { IProject } from '../data/types';

interface ProjectGridProps {
  projects: IProject[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
