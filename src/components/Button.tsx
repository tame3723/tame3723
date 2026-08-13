import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  download,
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:ring-offset-2 focus:ring-offset-brand-background disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-accent hover:bg-brand-accentHover text-brand-background shadow-accentGlow font-semibold",
    secondary: "bg-brand-surface hover:bg-brand-cardHover text-brand-textPrimary border border-brand-border",
    outline: "border border-brand-accent/40 text-brand-textPrimary hover:bg-brand-accent hover:text-brand-background hover:border-brand-accent"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base"
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'a' && href) {
    return (
      <a 
        href={href} 
        download={download} 
        className={combinedClasses}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
