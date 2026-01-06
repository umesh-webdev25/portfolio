import React from 'react';
import SkillCard from './SkillCard';

const SkillsSection = () => {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      icon: "Code",
      description: "Dynamic web development language",
      proficiency: 90,
      experience: "3+ years experience"
    },
    {
      id: 2,
      name: "C++",
      icon: "Terminal",
      description: "System programming & algorithms",
      proficiency: 85,
      experience: "2+ years experience"
    },
    {
      id: 3,
      name: "Java",
      icon: "Coffee",
      description: "Object-oriented programming",
      proficiency: 88,
      experience: "3+ years experience"
    },
    {
      id: 4,
      name: "React.js",
      icon: "Atom",
      description: "Frontend UI library",
      proficiency: 92,
      experience: "2+ years experience"
    },
    {
      id: 5,
      name: "Node.js",
      icon: "Server",
      description: "Backend JavaScript runtime",
      proficiency: 87,
      experience: "2+ years experience"
    },
    {
      id: 6,
      name: "Express.js",
      icon: "Zap",
      description: "Web application framework",
      proficiency: 85,
      experience: "2+ years experience"
    },
    {
      id: 7,
      name: "MongoDB",
      icon: "Database",
      description: "NoSQL database management",
      proficiency: 83,
      experience: "2+ years experience"
    },
    {
      id: 8,
      name: "Git",
      icon: "GitBranch",
      description: "Version control system",
      proficiency: 90,
      experience: "3+ years experience"
    },
    {
      id: 9,
      name: "GitHub",
      icon: "Github",
      description: "Code collaboration platform",
      proficiency: 88,
      experience: "3+ years experience"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels. 
            Hover over each card to see detailed experience information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills?.map((skill) => (
            <SkillCard key={skill?.id} skill={skill} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 shadow-elevation-2">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-muted-foreground mb-6">
              Technology evolves rapidly, and so do I. Currently exploring advanced frameworks, 
              cloud technologies, and modern development practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["TypeScript", "Docker", "AWS", "Next.js"]?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;