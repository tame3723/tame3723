import React from 'react';
import { ISkillGroup } from '../data/types';

interface SkillGroupProps {
  group: ISkillGroup;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ group }) => {
  return (
    <div className="bg-brand-surface border border-brand-border p-5 rounded-lg hover:border-brand-border/80 transition-all">
      <h3 className="font-semibold text-sm text-brand-accent tracking-wider uppercase mb-4 border-b border-brand-border pb-2">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span 
            key={skill} 
            className="text-xs bg-brand-background hover:bg-brand-accent/5 hover:text-brand-accent hover:border-brand-accent/30 text-brand-textPrimary border border-brand-border px-3 py-1.5 rounded-md transition-all duration-150 font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
