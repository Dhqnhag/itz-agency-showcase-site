
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = ''
}) => {
  const alignClass = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  };

  return (
    <div className={`mb-16 ${alignClass[align]} ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold mb-3 relative inline-block">
        <span className="text-highlight">#</span>{title}
        <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-highlight rounded-full"></span>
      </h2>
      {subtitle && (
        <p className="text-foreground/70 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
