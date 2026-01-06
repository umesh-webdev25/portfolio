import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-background rounded-lg p-6 shadow-elevation-2 hover-elevation transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
          isHovered ? 'bg-primary scale-110' : 'bg-muted'
        }`}>
          <Icon 
            name={skill?.icon} 
            size={32} 
            className={`transition-colors duration-300 ${
              isHovered ? 'text-white' : 'text-primary'
            }`}
          />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {skill?.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          {skill?.description}
        </p>
        
        <div className="w-full bg-muted rounded-full h-2 mb-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              isHovered ? 'bg-primary' : 'bg-secondary'
            }`}
            style={{ width: `${skill?.proficiency}%` }}
          ></div>
        </div>
        
        <span className="text-xs text-muted-foreground font-medium">
          {skill?.proficiency}% Proficiency
        </span>
        
        {isHovered && (
          <div className="mt-3 text-xs text-primary font-medium">
            {skill?.experience}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCard;