import React from 'react';
import {image} from '../../../../public/assets/images/image'
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elevation-3 hover-elevation">
                <img src={image.myImage} alt="Umesh Gayakwad" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-elevation-2">
                <span className="text-white text-2xl font-bold">👋</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-background rounded-lg p-8 shadow-elevation-2 hover-elevation">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Hello! I'm Umesh Gayakwad
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with 1 year of experience creating 
                digital solutions that make a difference. I specialize in modern web technologies 
                and love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying up-to-date with the latest industry trends.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                  <p className="text-primary font-bold text-xl">1 Year</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Projects</h4>
                  <p className="text-primary font-bold text-xl">10+ Completed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">Raipur, Chhattisgarh</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Availability</h4>
                  <p className="text-success font-semibold">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;