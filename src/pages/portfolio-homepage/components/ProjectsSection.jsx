import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Button from '../../../components/ui/Button';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Gemini Clone",
      description: "A sophisticated AI-powered chat interface replicating Google Gemini's conversational AI capabilities. Features real-time messaging, conversation history, and responsive design optimized for seamless user interactions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "Tailwind CSS", "OpenAI API"],
      category: "Frontend",
      status: "Live",
      featured: true,
      liveUrl: "https://gemini-clone-demo.vercel.app",
      githubUrl: "https://github.com/user/gemini-clone",
      metrics: {
        performance: "96/100",
        users: "3K+"
      }
    },
    {
      id: 2,
      title: "Amazon Clone",
      description: "A comprehensive e-commerce platform mimicking Amazon's core functionalities including product catalog, search filters, shopping cart, and checkout process. Built with modern frontend technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["React", "Redux", "JavaScript", "CSS3"],
      category: "Frontend",
      status: "Live",
      featured: true,
      liveUrl: "https://amazon-clone-frontend.netlify.app",
      githubUrl: "https://github.com/user/amazon-clone",
      metrics: {
        performance: "94/100",
        users: "5K+"
      }
    },
    {
      id: 3,
      title: "Airbnb Clone",
      description: "Full-stack vacation rental platform featuring property listings, booking system, user authentication, payment processing, and interactive maps. Complete with host and guest dashboards for comprehensive rental management.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "Full Stack",
      status: "Live",
      featured: true,
      liveUrl: "https://airbnb-fullstack-app.herokuapp.com",
      githubUrl: "https://github.com/user/airbnb-clone",
      metrics: {
        performance: "92/100",
        users: "8K+"
      }
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects?.filter(project => project?.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents 
            a unique challenge and demonstrates different aspects of my technical expertise.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects?.map((project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-lg p-8 shadow-elevation-2">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, 
              or potential collaborations. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="px-8"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="px-8"
              >
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;