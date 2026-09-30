import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill }) => {
  return (
    <div className="group h-[170px] w-full [perspective:1000px] cursor-pointer">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-elevation-2 hover:shadow-elevation-3 rounded-2xl">
        
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 [backface-visibility:hidden] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
            <Icon name={skill?.icon} size={26} />
          </div>
          <h3 className="relative z-10 text-lg font-extrabold text-foreground tracking-wide">
            {skill?.name}
          </h3>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white shadow-elevation-3 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-5 text-center overflow-hidden">
          
          {/* Glass overlay for backface text readability */}
          <div className="absolute inset-0 bg-black/15 backdrop-blur-sm"></div>

          <div className="relative z-10 flex flex-col w-full h-full justify-between items-center">
            <h3 className="text-base font-extrabold drop-shadow-md">
              {skill?.name}
            </h3>
            
            <p className="text-[11px] text-white/90 leading-relaxed line-clamp-2 drop-shadow-sm font-medium mt-1">
              {skill?.description}
            </p>
            
            <div className="w-full mt-auto">
              <div className="flex justify-between w-full px-1 mb-1.5">
                <span className="text-[9px] font-bold tracking-wider uppercase opacity-90">
                  Proficiency
                </span>
                <span className="text-[10px] font-bold">
                  {skill?.proficiency}%
                </span>
              </div>
              
              <div className="w-full bg-black/30 rounded-full h-1.5 overflow-hidden shadow-inner border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-white/60 to-white rounded-full transition-all duration-1000 delay-300"
                  style={{ width: `${skill?.proficiency}%` }}
                ></div>
              </div>
              
              {skill?.experience && (
                <div className="mt-3 text-[9px] font-bold text-white/80 uppercase tracking-widest text-center border-t border-white/20 pt-2">
                  {skill?.experience}
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SkillCard;