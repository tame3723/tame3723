import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-1.5 w-1.5 bg-brand-accent rounded-full animate-pulse" />
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-accent">
          {title}
        </span>
      </div>
      {subtitle && (
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-textPrimary">
          {subtitle}
        </h2>
      )}
      <div className="h-px bg-gradient-to-r from-brand-border via-brand-border/30 to-transparent mt-4 w-full" />
    </div>
  );
};
