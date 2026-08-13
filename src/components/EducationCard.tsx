import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { IEducation } from '../data/types';

interface EducationCardProps {
  edu: IEducation;
}

export const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
  return (
    <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="font-bold text-lg md:text-xl text-brand-textPrimary flex items-center gap-2.5">
            <GraduationCap size={20} className="text-brand-accent" />
            {edu.institution}
          </h3>
          <p className="text-brand-textMuted mt-1 font-medium">{edu.degree}</p>
        </div>
        <div className="text-xs text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-full font-semibold border border-brand-accent/20 self-start md:self-auto">
          Expected Graduation: {edu.graduationYear}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-brand-border/40 pt-6">
        <div className="bg-brand-background/45 border border-brand-border p-4 rounded-md">
          <p className="text-xs text-brand-textMuted uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
            <BookOpen size={12} className="text-brand-accent" /> Specialization
          </p>
          <p className="text-sm font-semibold text-brand-textPrimary">{edu.specialization}</p>
        </div>

        {edu.minor && (
          <div className="bg-brand-background/45 border border-brand-border p-4 rounded-md">
            <p className="text-xs text-brand-textMuted uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
              <Award size={12} className="text-brand-accent" /> Minor Focus
            </p>
            <p className="text-sm font-semibold text-brand-textPrimary">{edu.minor}</p>
          </div>
        )}

        <div className="bg-brand-background/45 border border-brand-border p-4 rounded-md">
          <p className="text-xs text-brand-textMuted uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
            <Award size={12} className="text-brand-accent" /> Verified CGPA
          </p>
          <p className="text-sm font-semibold text-brand-accent text-lg">{edu.cgpa}</p>
        </div>
      </div>
    </div>
  );
};
