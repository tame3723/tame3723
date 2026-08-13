import React from 'react';
import { Code2, Cpu, BarChart3, Database, Globe, Wrench, GraduationCap } from 'lucide-react';
import { ISkillGroup } from '../data/types';

interface SkillGroupProps {
  group: ISkillGroup;
}

const getCategoryIcon = (category: string) => {
  const norm = category.toLowerCase();
  if (norm.includes('programming')) return <Code2 size={18} className="text-brand-accent" />;
  if (norm.includes('learning')) return <Cpu size={18} className="text-indigo-500" />;
  if (norm.includes('data science') || norm.includes('analytics')) return <BarChart3 size={18} className="text-cyan-500" />;
  if (norm.includes('database')) return <Database size={18} className="text-emerald-500" />;
  if (norm.includes('web') || norm.includes('development')) return <Globe size={18} className="text-sky-500" />;
  if (norm.includes('foundations')) return <GraduationCap size={18} className="text-violet-500" />;
  return <Wrench size={18} className="text-brand-textMuted" />;
};

export const SkillGroup: React.FC<SkillGroupProps> = ({ group }) => {
  const icon = getCategoryIcon(group.category);

  return (
    <div className="bg-brand-surface border border-brand-border p-6 rounded-xl hover:border-brand-borderHover hover:shadow-sm transition-all duration-300 group flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-brand-background rounded-md border border-brand-border group-hover:border-brand-borderHover transition-all">
              {icon}
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-brand-textPrimary">
              {group.category}
            </h3>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span 
              key={skill} 
              className="text-xs bg-brand-background hover:bg-brand-cardHover hover:text-brand-accent text-brand-textSecondary border border-brand-border hover:border-brand-borderHover px-3 py-1.5 rounded-lg transition-all duration-150 font-medium shadow-sm cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
