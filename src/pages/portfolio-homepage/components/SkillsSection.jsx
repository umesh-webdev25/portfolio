import React, { useMemo, useState } from "react";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Languages");
  const [search, setSearch] = useState("");

  const categories = {
    Languages: [
      {
        id: 1,
        name: "C",
        icon: "Code2",
        description: "System-level & low-level programming",
        proficiency: 78,
        experience: "1+ years experience",
      },
      {
        id: 2,
        name: "C++",
        icon: "Terminal",
        description: "Algorithms & problem solving",
        proficiency: 60,
        experience: "2+ years experience",
      },
      {
        id: 3,
        name: "Java",
        icon: "Coffee",
        description: "Object-oriented programming",
        proficiency: 68,
        experience: "3+ years experience",
      },
      {
        id: 4,
        name: "JavaScript",
        icon: "Code",
        description: "Dynamic web development language",
        proficiency: 90,
        experience: "3+ years experience",
      },
      {
        id: 5,
        name: "CSS",
        icon: "Palette",
        description: "Responsive & modern UI styling",
        proficiency: 92,
        experience: "3+ years experience",
      },
    ],

    "Frameworks/Libraries": [
      {
        id: 6,
        name: "React.js",
        icon: "Atom",
        description: "Frontend UI library",
        proficiency: 85,
        experience: "2+ years experience",
      },
      {
        id: 7,
        name: "Node.js",
        icon: "Server",
        description: "Backend JavaScript runtime",
        proficiency: 80,
        experience: "2+ years experience",
      },
      {
        id: 8,
        name: "Express.js",
        icon: "Zap",
        description: "REST API & backend framework",
        proficiency: 80,
        experience: "2+ years experience",
      },
      {
        id: 9,
        name: "Tailwind CSS",
        icon: "Wind",
        description: "Utility-first CSS framework",
        proficiency: 90,
        experience: "2+ years experience",
      },
    ],

    Tools: [
      {
        id: 10,
        name: "MongoDB",
        icon: "Database",
        description: "NoSQL database management",
        proficiency: 85,
        experience: "2+ years experience",
      },
      {
        id: 11,
        name: "MySQL",
        icon: "Database",
        description: "Relational database and queries",
        proficiency: 85,
        experience: "2+ years experience",
      },
      {
        id: 12,
        name: "Git",
        icon: "GitBranch",
        description: "Version control system",
        proficiency: 88,
        experience: "3+ years experience",
      },
      {
        id: 13,
        name: "GitHub",
        icon: "Github",
        description: "Code collaboration platform",
        proficiency: 88,
        experience: "3+ years experience",
      },
      {
        id: 14,
        name: "Postman",
        icon: "Send",
        description: "API testing tool",
        proficiency: 60,
        experience: "2+ years experience",
      },
      {
        id: 15,
        name: "VS Code",
        icon: "Monitor",
        description: "Code editor for development",
        proficiency: 95,
        experience: "3+ years experience",
      },
    ],
  };

  const tabs = Object.keys(categories);

  const filteredSkills = useMemo(() => {
    return categories[activeTab].filter((skill) =>
      skill.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeTab, search]);
const techStack = [
  { name: "MongoDB", icon: "Leaf" },       // Mongo
  { name: "Express.js", icon: "Code" },    // Express
  { name: "React", icon: "Atom" },         // React
  { name: "Node.js", icon: "Hexagon" },    // Node
];

  return (
    
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical skills, tools, and frameworks — organized for easy viewing.
          </p>

          {/* Gradient line */}
          <div className="mt-6 w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500"></div>
        </div>

        {/* Tabs + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          {/* Tabs */}
          <div className="flex gap-2 flex-wrap justify-center bg-card/60 backdrop-blur border border-border rounded-full p-2 shadow-elevation-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="w-full md:w-[320px]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search skill..."
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground outline-none focus:ring-2 focus:ring-primary/60 transition"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[450px] h-[250px] bg-primary/20 blur-3xl rounded-full -z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <p className="text-center mt-10 text-muted-foreground">
              No skills found. Try searching another keyword.
            </p>
          )}
        </div>

        {/* Bottom Card */}
        <div className="mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-elevation-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>

            <h3 className="text-2xl font-bold text-foreground mb-3">
              Always Learning 🚀
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              I continuously improve my skills and explore new technologies to stay updated
              with modern web development practices.
            </p>

            <div className="flex flex-wrap gap-3">
              {["TypeScript", "Docker", "AWS", "Next.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-semibold
                  bg-muted/50 text-foreground border border-border
                  hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
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
