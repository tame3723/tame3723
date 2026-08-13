import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft warm-mist background canvas */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-background via-brand-background to-blue-100/10" />
      
      {/* Toned down, slow-moving, tiny data node elements */}
      <div className="absolute top-[18%] left-[12%] w-2 h-2 bg-brand-accent/15 rounded-full animate-float-slow blur-[0.5px]" />
      <div className="absolute top-[42%] left-[84%] w-2.5 h-2.5 bg-brand-accent/10 rounded-full animate-float-medium blur-[0.5px]" />
      <div className="absolute top-[68%] left-[25%] w-1.5 h-1.5 bg-brand-accent/20 rounded-full animate-float-slow blur-[0.5px]" />
      <div className="absolute top-[78%] left-[76%] w-2 h-2 bg-brand-accent/15 rounded-full animate-float-medium blur-[0.5px]" />

      {/* Dynamic technical grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
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
