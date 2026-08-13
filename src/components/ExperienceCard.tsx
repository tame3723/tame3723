import React from 'react';
import { Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { IExperience } from '../data/types';

interface ExperienceCardProps {
  exp: IExperience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
  return (
    <div className="relative pl-8 md:pl-10 pb-10 last:pb-2 border-l border-brand-border group">
      {/* Timeline Indicator Node */}
      <div className="absolute -left-[6px] top-1.5 h-3.5 w-3.5 rounded-full border border-brand-accent bg-brand-background transition-all group-hover:bg-brand-accent group-hover:shadow-accentGlow" />

      <div className="bg-brand-surface border border-brand-border p-6 rounded-lg group-hover:border-brand-border/80 transition-all">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-bold text-lg text-brand-textPrimary flex items-center gap-2">
              <Briefcase size={16} className="text-brand-accent" />
              {exp.role}
            </h3>
            <p className="text-brand-accent font-medium text-sm mt-0.5">
              {exp.organization}
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-brand-textMuted bg-brand-background border border-brand-border px-3 py-1 rounded-md self-start md:self-auto">
            <Calendar size={12} />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Impact Bullet Points */}
        <ul className="space-y-2.5 mb-6">
          {exp.bullets.map((bullet, idx) => (
            <li key={idx} className="text-sm text-brand-textMuted leading-relaxed flex items-start gap-2.5">
              <span className="text-brand-accent mt-1.5 h-1 w-1 rounded-full shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech Badges & Project CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-brand-border/40">
          <div className="flex flex-wrap gap-1.5">
            {exp.skills.map((skill) => (
              <span 
                key={skill} 
                className="text-[11px] bg-brand-background text-brand-textMuted border border-brand-border px-2 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {exp.projectLink && (
            <a 
              href={exp.projectLink} 
              className="inline-flex items-center gap-1.5 text-xs text-brand-accent hover:text-brand-textPrimary font-semibold transition-colors mt-2 sm:mt-0"
            >
              <span>Explore Internship Software</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
