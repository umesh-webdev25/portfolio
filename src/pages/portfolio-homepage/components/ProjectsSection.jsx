import React, { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import Button from "../../../components/ui/Button";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Gemini Clone",
      description:
        "A sophisticated AI-powered chat interface replicating Google Gemini's conversational AI capabilities. Features real-time messaging, conversation history, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "Tailwind CSS", "OpenAI API"],
      category: "Frontend",
      status: "Live",
      featured: true,
      liveUrl: "https://google-gemini-six-sandy.vercel.app/",
      githubUrl: "https://github.com/umesh-webdev25/Google-gemini",
      metrics: { performance: "96/100", users: "3K+" },
    },
    {
      id: 2,
      title: "Amazon Clone",
      description:
        "A full e-commerce UI inspired by Amazon with product listing, filters, cart & checkout. Built with modern frontend tools for performance.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["React", "Redux", "JavaScript", "CSS3"],
      category: "Frontend",
      status: "Live",
      featured: true,
      liveUrl: "https://amazon-clone-frontend.netlify.app",
      githubUrl: "https://github.com/umesh-webdev25/Amazon_clone",
      metrics: { performance: "94/100", users: "5K+" },
    },
    {
      id: 3,
      title: "Airbnb Clone",
      description:
        "Full-stack vacation rental platform with authentication, booking flow, Stripe payments, and interactive dashboards for hosts & guests.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "Full Stack",
      status: "Live",
      featured: true,
      liveUrl: "https://airbnb-fullstack-app.herokuapp.com",
      githubUrl: "https://github.com/umesh-webdev25/airbnb-clone",
      metrics: { performance: "92/100", users: "8K+" },
    },
    {
      id: 4,
      title: "Streamfy-chat-app",
      description:
        "Real-time chat application with authentication, private & group messaging, media sharing, online status, typing indicators, and responsive UI..",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "Full Stack",
      status: "Live",
      featured: true,
     
      githubUrl: "https://github.com/umesh-webdev25/streamify-video-calls",
      metrics: { performance: "92/100", users: "8K+" },
    },
      {
      id: 5,
      title: "TalkEasy Voice Assistant",
      description:
        "Voice-enabled web assistant that listens to user commands, answers queries, opens websites, and performs tasks using Speech Recognition & Text-to-Speech.",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop",
      technologies: ["javascripte",  "Node.js", "MongoDB", "Express", "websocket API","python"],
      category: "Full Stack",
      status: "Live",
      featured: true,
     
      githubUrl: "https://github.com/umesh-webdev25/TalkEasy-VoiceAssistant/tree/dev",
      metrics: { performance: "92/100", users: "8K+" },
    },
    {
      id: 6,
      title: "YT Downloader Pro",
      description:
        "Full-stack YouTube downloader that accepts video/playlist URLs, lets users select quality, and downloads videos/audio with a clean UI and fast processing..",
      image:
        "https://images.pexels.com/photos/3945655/pexels-photo-3945655.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      technologies: ["React", "MongoDB", "Express", "python"],
      category: "Full Stack",
      status: "Live",
      featured: true,
     
      githubUrl: "https://github.com/umesh-webdev25/youtube-downloader",
      metrics: { performance: "92/100", users: "8K+" },
    },
  ];

  const categories = ["All", "Full Stack", "Frontend"];

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* ✅ Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary))/0.12,transparent_60%)]"></div>
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-200px] -right-40 w-[520px] h-[520px] bg-accent/10 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ✅ Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Featured Projects
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents a unique challenge and highlights my technical expertise.
          </p>

          <div className="mt-6 w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-blue-500 to-accent"></div>
        </div>

        {/* ✅ Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex flex-wrap gap-2 justify-center bg-card/60 border border-border rounded-full p-2 backdrop-blur shadow-elevation-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="transform transition-all duration-300 hover:-translate-y-1"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* ✅ CTA (Premium Card) */}
        <div className="mt-20 text-center">
          <div className="relative overflow-hidden bg-card/70 border border-border rounded-2xl p-10 shadow-elevation-3 backdrop-blur">
            {/* glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Interested in Working Together?
            </h3>

            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects,
              or potential collaborations. Let’s build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="px-10 py-5 rounded-2xl shadow-lg hover:shadow-primary/40 hover:scale-[1.04] transition"
              >
                Get In Touch
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="px-10 py-5 rounded-2xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-[1.04] transition"
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
