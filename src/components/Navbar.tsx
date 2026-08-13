import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#/' },
    { label: 'About', href: '#/#about' },
    { label: 'Education', href: '#/#education' },
    { label: 'Skills', href: '#/#skills' },
    { label: 'Experience', href: '#/#experience' },
    { label: 'Achievements', href: '#/#achievements' },
    { label: 'Projects', href: '#/#work' },
    { label: 'Contact', href: '#/#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-surface/80 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Monogram/Logo */}
        <a href="#/" className="text-lg font-bold tracking-wider text-brand-textPrimary group flex items-center gap-2">
          <span className="text-brand-accent group-hover:text-brand-textPrimary transition-colors">&lt;</span>
          TS
          <span className="text-brand-accent group-hover:text-brand-textPrimary transition-colors">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-brand-textSecondary hover:text-brand-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-4 w-px bg-brand-border" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/tame3723" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-brand-textMuted hover:text-brand-accent transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/tanishk-sharma-235a89324/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-brand-textMuted hover:text-brand-accent transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="resume.pdf" download="Tanishk_Sharma_Resume.pdf" className="inline-flex items-center gap-1.5 text-xs border border-brand-accent/20 hover:border-brand-accent hover:bg-brand-accent/5 px-3 py-1.5 rounded text-brand-accent transition-all font-semibold">
              <FileText size={14} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="lg:hidden text-brand-textPrimary focus:outline-none p-1 border border-brand-border rounded hover:bg-brand-surface transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-brand-surface/95 backdrop-blur-md z-40 border-t border-brand-border">
          <div className="flex flex-col h-full px-8 py-10 gap-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold text-brand-textSecondary hover:text-brand-accent transition-colors block py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-px bg-brand-border w-full my-4" />
            <div className="flex items-center gap-6">
              <a href="https://github.com/tame3723" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-brand-textMuted hover:text-brand-accent transition-colors flex items-center gap-2">
                <Github size={20} /> <span className="text-sm font-semibold">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/tanishk-sharma-235a89324/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-brand-textMuted hover:text-brand-accent transition-colors flex items-center gap-2">
                <Linkedin size={20} /> <span className="text-sm font-semibold">LinkedIn</span>
              </a>
            </div>
            <a 
              href="resume.pdf" 
              download="Tanishk_Sharma_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="text-center bg-brand-surface border border-brand-accent/30 text-brand-accent py-3 rounded-md font-semibold text-sm hover:bg-brand-accent hover:text-white transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
