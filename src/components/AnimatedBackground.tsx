import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft cool-mist gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-background via-brand-background to-blue-100/10" />
      
      {/* Enhanced visibility animated data nodes */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-brand-accent/40 rounded-full animate-float-slow blur-[0.5px]" />
      <div className="absolute top-[35%] left-[88%] w-4 h-4 bg-brand-accent/35 rounded-full animate-float-medium blur-[0.5px]" />
      <div className="absolute top-[70%] left-[20%] w-2.5 h-2.5 bg-brand-accent/40 rounded-full animate-float-fast blur-[0.5px]" />
      <div className="absolute top-[55%] left-[5%] w-5 h-5 bg-brand-accent/25 rounded-full animate-float-slow blur-[0.5px]" />
      <div className="absolute top-[25%] left-[75%] w-3 h-3 bg-brand-accent/30 rounded-full animate-float-medium blur-[0.5px]" />
      <div className="absolute top-[85%] left-[78%] w-3.5 h-3.5 bg-brand-accent/35 rounded-full animate-float-slow blur-[0.5px]" />

      {/* Grid pattern representation overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};
