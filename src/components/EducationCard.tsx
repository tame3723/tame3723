import React from 'react';
import { GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { IEducationExtended } from '../data/types';

interface EducationCardProps {
  edu: IEducationExtended;
}

export const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
  return (
    <div className="bg-brand-surface border border-brand-border p-6 md:p-8 rounded-xl shadow-sm hover:border-brand-borderHover transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        {/* Academic Major */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-accent/10 rounded-lg text-brand-accent">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg md:text-xl text-brand-textPrimary">
                {edu.institution}
              </h3>
              <p className="text-brand-textSecondary font-medium text-sm mt-0.5">{edu.degree}</p>
            </div>
          </div>

          {/* Academic Highlights Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2 pt-2">
            <div className="flex items-center gap-2 text-sm text-brand-textSecondary">
              <ChevronRight size={16} className="text-brand-accent" />
              <span>Specialization: <strong className="text-brand-textPrimary font-semibold">{edu.specialization}</strong></span>
            </div>
            {edu.minor && (
              <div className="flex items-center gap-2 text-sm text-brand-textSecondary">
                <ChevronRight size={16} className="text-brand-accent" />
                <span>Minor: <strong className="text-brand-textPrimary font-semibold">{edu.minor}</strong></span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-brand-textSecondary">
              <ChevronRight size={16} className="text-brand-accent" />
              <span>Current Status: <strong className="text-brand-textPrimary font-semibold">{edu.currentStage}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-brand-textSecondary">
              <ChevronRight size={16} className="text-brand-accent" />
              <span>Verified Standing: <strong className="text-brand-accent font-bold">{edu.cgpa} CGPA</strong></span>
            </div>
          </div>
        </div>

        {/* Expected Graduation Badge */}
        <div className="inline-flex items-center gap-2 text-xs text-brand-accent bg-brand-accent/10 px-3.5 py-2 rounded-full font-semibold border border-brand-accent/20 self-start md:self-auto font-mono">
          <Calendar size={12} />
          <span>Expected Graduation: {edu.graduationYear}</span>
        </div>
      </div>
    </div>
  );
};
