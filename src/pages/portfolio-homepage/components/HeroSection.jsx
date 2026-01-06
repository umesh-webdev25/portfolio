import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onScrollToProjects }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Content Section */}
          <div className="text-center">
            <div className="mb-8">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  👋 Hello, I'm
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Umesh<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Gayakwad
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-6">
                Full Stack Developer
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Icon name="MapPin" size={18} className="text-muted-foreground" />
                <span className="text-muted-foreground text-base md:text-lg">
                  Raipur, Chhattisgarh
                </span>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Crafting exceptional digital experiences with modern technologies. 
                Passionate about clean code, innovative solutions, and bringing ideas to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                variant="default"
                size="lg"
                onClick={onScrollToProjects}
                iconName="ArrowDown"
                iconPosition="right"
                className="px-8 py-3 text-lg hover-elevation transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="px-8 py-3 text-lg hover-elevation transform hover:scale-105 transition-all duration-200"
              >
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center space-x-4">
              {[
                { icon: 'Github', url: 'https://github.com', label: 'GitHub' },
                { icon: 'Linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: 'Twitter', url: 'https://twitter.com', label: 'Twitter' },
                { icon: 'Mail', url: 'mailto:alex@example.com', label: 'Email' }
              ]?.map((social) => (
                <a
                  key={social?.icon}
                  href={social?.url}
                  target={social?.icon !== 'Mail' ? '_blank' : undefined}
                  rel={social?.icon !== 'Mail' ? 'noopener noreferrer' : undefined}
                  className="group p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary transition-all duration-200 hover-elevation"
                  aria-label={social?.label}
                >
                  <Icon 
                    name={social?.icon} 
                    size={24} 
                    className="text-muted-foreground group-hover:text-white transition-colors duration-200" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;