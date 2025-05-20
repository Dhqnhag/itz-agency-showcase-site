
import React from 'react';
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image,
  tags
}) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 group h-full flex flex-col">
      <div className="relative overflow-hidden h-52">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-highlight transition-colors">{title}</h3>
        <p className="text-foreground/70 mb-5 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1.5 rounded-full bg-muted text-foreground/70 border border-border/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <button className="inline-flex items-center text-highlight font-medium group/btn">
            View Details
            <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
