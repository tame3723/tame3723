import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-surface border-t border-brand-border py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-extrabold text-brand-textPrimary tracking-wide text-base">Tanishk Sharma</h4>
          <p className="text-xs text-brand-textMuted mt-1 font-mono">Data Science Student • Data Analyst • Software Builder</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/tame3723" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-brand-textMuted hover:text-brand-accent transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/tanishk-sharma-235a89324/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-textMuted hover:text-brand-accent transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:Tanishk.16061@stu.upes.ac.in" aria-label="Email" className="text-brand-textMuted hover:text-brand-accent transition-colors">
            <Mail size={18} />
          </a>
          <a href="resume.pdf" download="Tanishk_Sharma_Resume.pdf" aria-label="Resume" className="text-brand-textMuted hover:text-brand-accent transition-colors">
            <FileText size={18} />
          </a>
        </div>

        <p className="text-xs text-brand-textMuted font-mono">
          &copy; {currentYear} Tanishk Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
