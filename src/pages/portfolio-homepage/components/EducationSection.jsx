import React from "react";
import Icon from "../../../components/AppIcon";

const educationDetails = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Pt. Ravishankar Shukla University, Raipur Chhattisgarh",
    url: "https://www.prsu.ac.in/",
    location: "Raipur, Chhattisgarh",
    duration: "2024 - 2026",
    status: "Completed", // flip to "Pursuing" if not yet finished
    description:
      "Focusing on advanced computing concepts, full-stack development, and modern software engineering practices.",
    highlights: ["Full-Stack Dev", "RDBMS","Java","Python"],
    icon: "GraduationCap"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Government Nagarjuna Post Graduate College of Science, Raipur",
    url: "https://www.gnscr.ac.in/",
    location: "Raipur, Chhattisgarh",
    duration: "2021 - 2024",
    status: "Completed",
    description:
      "Built a strong foundation in programming, database management, and computer science fundamentals.",
    highlights: ["HTML", "CSS", "DSA", "DBMS"],
    icon: "Book"
  }
];

const StatusBadge = ({ status }) => (
  <span
    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
      status === "Pursuing"
        ? "bg-primary/20 text-primary"
        : "bg-success/20 text-success"
    }`}
  >
    {status}
  </span>
);

const EducationCard = ({ item }) => (
  <article
    className="group relative bg-card/40 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
  >
    {/* Card Glow Effect */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    {/* Header: Icon & Status */}
    <div className="flex justify-between items-start mb-6 relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white shadow-lg shadow-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
        <Icon name={item.icon} size={30} />
      </div>
      <StatusBadge status={item.status} />
    </div>

    {/* Content */}
    <div className="space-y-5 relative z-10">
      <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 leading-snug tracking-tight">
        {item.degree}
      </h3>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-muted-foreground">
        <div className="flex items-center gap-2 min-w-0 group/link">
          <Icon name="Building" size={16} className="text-primary shrink-0 transition-transform group-hover/link:scale-110" />
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate hover:text-primary transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              {item.institution}
            </a>
          ) : (
            <span className="truncate">{item.institution}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Icon name="MapPin" size={16} className="text-primary shrink-0" />
          <span>{item.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Calendar" size={16} className="text-primary shrink-0" />
          <span>{item.duration}</span>
        </div>
      </div>

      <p className="text-muted-foreground/90 leading-relaxed font-medium pt-2">
        {item.description}
      </p>

      {/* Highlight tags */}
      {item.highlights?.length > 0 && (
        <div className="flex flex-wrap gap-2.5 pt-4">
          {item.highlights.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:shadow-md transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </article>
);

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 px-6 bg-card overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Education
          </h2>
          <div className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-blue-500 to-accent" />
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {educationDetails.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;