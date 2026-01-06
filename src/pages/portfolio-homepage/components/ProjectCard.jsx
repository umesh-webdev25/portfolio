import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-elevation-2 hover-elevation transition-all duration-300">
      <div className="relative overflow-hidden h-48">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project?.status === 'Live' ?'bg-success text-success-foreground' :'bg-warning text-warning-foreground'
          }`}>
            {project?.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground">
            {project?.title}
          </h3>
          <div className="flex space-x-2">
            {project?.featured && (
              <Icon name="Star" size={16} className="text-warning fill-current" />
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project?.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project?.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project?.liveUrl && (
            <Button
              variant="default"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              className="flex-1"
              onClick={() => window.open(project?.liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
          
          {project?.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="left"
              className="flex-1"
              onClick={() => window.open(project?.githubUrl, '_blank')}
            >
              Code
            </Button>
          )}
        </div>
        
        {project?.metrics && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Performance</p>
                <p className="font-semibold text-primary">{project?.metrics?.performance}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Users</p>
                <p className="font-semibold text-primary">{project?.metrics?.users}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;