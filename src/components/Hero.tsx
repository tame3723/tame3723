import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import { Button } from './Button';
import { educationData } from '../data/education';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-transparent">
      {/* Soothing background radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-accentSecondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center z-10 animate-fade-in">
        
        {/* Soothing Context Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-surface border border-brand-border px-4 py-1.5 rounded-full text-xs text-brand-textMuted mb-8 shadow-sm">
          <span className="h-1.5 w-1.5 bg-brand-accent rounded-full animate-pulse" />
          <span className="font-semibold text-brand-textPrimary">UPES · Class of {educationData.graduationYear}</span>
          <span className="text-brand-border">|</span>
          <span>B.Tech CSE — Data Science</span>
          {educationData.minor && (
            <>
              <span className="text-brand-border">|</span>
              <span className="text-brand-accent font-semibold">Minor: {educationData.minor}</span>
            </>
          )}
        </div>

        {/* Dynamic Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-textPrimary mb-6">
          Tanishk Sharma
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-brand-accent font-semibold tracking-wide mb-6">
          Data Science Student & Software Builder
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-brand-textSecondary leading-relaxed mb-10">
          Building data-driven software systems, machine learning pipelines, and practical engineering projects with a focus on real-world scalability and structural depth.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button variant="primary" as="a" href="#/#work" className="w-full sm:w-auto shadow-accentGlow rounded-none">
            View My Work
          </Button>
          <Button variant="outline" as="a" href="resume.pdf" download="Tanishk_Sharma_Resume.pdf" className="w-full sm:w-auto gap-2 bg-brand-surface rounded-none">
            <FileText size={16} />
            <span>Download Resume</span>
          </Button>
        </div>

        {/* Social Link Indicators */}
        <div className="flex items-center justify-center gap-8 text-brand-textMuted">
          <a 
            href="https://github.com/tame3723" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:example@gmail.com" 
            className="hover:text-brand-accent transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-textMuted/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
};
