
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
    <div className={`mb-12 ${alignClass[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="text-highlight">#</span>{title}
      </h2>
      {subtitle && <p className="text-foreground/70 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
