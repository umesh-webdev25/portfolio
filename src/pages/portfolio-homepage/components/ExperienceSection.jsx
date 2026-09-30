import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute top-20 left-[-5%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Professional Experience
          </h2>
          <div className="mt-6 w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-blue-500 to-accent"></div>
        </div>

        <div className="relative overflow-hidden bg-card/40 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 md:p-10 shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-500 group">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white shadow-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>

            <div className="flex-1 space-y-5">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                <div>
                  <h3 className="text-2xl font-extrabold  bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 leading-snug tracking-tight">
                    Full Stack Developer Intern
                  </h3>
                  <p className="text-lg font-bold text-primary mt-1">
                    Emilo Ventures Pvt. Ltd.
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-success/20 text-success mb-2">
                    6 Months
                  </span>
                  <p className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5 md:justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    Mar 2026 – Sep 2026
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground mt-1 flex items-center gap-1.5 md:justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Raipur
                  </p>
                </div>
              </div>

              <ul className="list-disc list-outside ml-5 text-muted-foreground/90 space-y-2.5 font-medium leading-relaxed text-[15px]">
                <li>Engineered features for Emilo, a social media and gifting platform, using React.js, Node.js, Express.js, and MongoDB during a 6-month full-stack internship.</li>
                <li>Built and integrated RESTful APIs, authentication flows, database operations, React components, and reusable modules across the platform.</li>
                <li>Implemented event-driven communication using NATS JetStream across the platform’s microservices architecture for asynchronous message processing.</li>
                <li>Enhanced the Admin Dashboard across 5 key areas: activity logging, master data management, user reports, analytics, and reporting.</li>
              </ul>

              <div className="flex flex-wrap gap-2.5 pt-3">
                {["React.js", "Node.js", "Express.js", "MongoDB", "NATS JetStream", "Microservices"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
