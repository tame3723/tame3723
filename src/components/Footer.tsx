import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-background border-t border-brand-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-bold text-brand-textPrimary tracking-wide">Tanishk Sharma</h4>
          <p className="text-xs text-brand-textMuted mt-1">Data Science · Software · Systems</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/tame3723" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-brand-textMuted hover:text-brand-textPrimary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-textMuted hover:text-brand-textPrimary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:example@gmail.com" aria-label="Email" className="text-brand-textMuted hover:text-brand-textPrimary transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-brand-textMuted">
          &copy; {currentYear} Tanishk Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
