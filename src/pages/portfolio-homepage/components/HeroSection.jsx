import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";
import mongoLogo from "../../../assets/tech/mongodb.png";
import expressLogo from "../../../assets/tech/express.png";
import reactLogo from "../../../assets/tech/react.png";
import nodeLogo from "../../../assets/tech/node.png";
import jsLogo from "../../../assets/tech/js.png";
import tsLogo from "../../../assets/tech/ts.png";
const HeroSection = ({ onScrollToProjects }) => {
  const cvDownloadLink = import.meta.env.VITE_CV_DOWNLOAD_LINK;

  const handleDownloadCV = () => {
    if (cvDownloadLink) {
      window.open(cvDownloadLink, "_blank");
    }
  };
 const techStack = [
  { name: "MongoDB", img: mongoLogo },
  { name: "Express.js", img: expressLogo },
  { name: "React", img: reactLogo },
  { name: "Node.js", img: nodeLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "TypeScript", img: tsLogo },
];


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-24 bg-background"
    >
      {/* ✅ Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.15]"></div>

      {/* ✅ Gradient Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-180px] -left-40 w-[520px] h-[520px] bg-accent/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* ✅ Glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[120px] bg-primary/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* ✅ 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ✅ LEFT SIDE - Developer Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow behind logo */}
              <div className="absolute inset-0 w-[320px] h-[320px] rounded-full bg-primary/25 blur-3xl"></div>

              {/* Logo Box */}
              <div className="relative w-[320px] h-[320px] flex items-center justify-center rounded-[3rem] border border-border bg-card/50 backdrop-blur-xl shadow-elevation-3 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-blue-500/10 to-accent/25"></div>

                {/* Logo text */}
                <div className="relative text-center">
                  <h1 className="text-[110px] font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent drop-shadow-2xl">
                    UG
                  </h1>
                  <p className="mt-2 text-lg font-bold text-foreground tracking-wide">
                    Umesh Gayakwad
                  </p>
                  <p className="text-sm text-muted-foreground font-semibold">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ RIGHT SIDE - All Contents */}
          <div className="text-center lg:text-left space-y-10">
            {/* ✅ Top badges */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 border border-border backdrop-blur-lg text-foreground font-semibold shadow-elevation-2">
                👋 Hello, I'm
                <span className="text-primary font-bold">Umesh</span>
              </span>

              <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-lg font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                Available for work
              </span>
            </div>

            {/* ✅ Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
                Umesh{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent">
                  Gayakwad
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Full Stack Developer | MERN Stack Developer
              </h2>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-muted-foreground">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  Raipur, Chhattisgarh
                </span>

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border backdrop-blur">
                  <Icon name="GraduationCap" size={18} className="text-primary" />
                  MCA Student
                </span>
              </div>
            </div>

            {/* ✅ Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed m-1">
              I build modern, scalable, and user-friendly web applications using
              cutting-edge technologies. Passionate about clean code, creative UI,
              and solving real-world problems.
            </p>

            {/* ✅ Tech chips */}
            {/* ✅ Tech Stack Logos */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group w-16 h-16 rounded-2xl bg-card/70 border border-border backdrop-blur-xl shadow-elevation-2
      flex items-center justify-center overflow-hidden transition-all duration-300
      hover:scale-110 hover:border-primary hover:shadow-primary/30 cursor-pointer"
                  title={tech.name}
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>



            {/* ✅ CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-2">
              <Button
                variant="default"
                size="lg"
                onClick={onScrollToProjects}
                iconName="ArrowDown"
                iconPosition="right"
                className="px-12 py-5 text-lg font-bold shadow-lg hover:shadow-primary/40 hover-elevation transform hover:scale-[1.06] transition-all duration-300 rounded-2xl"
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadCV}
                className="px-12 py-5 text-lg font-bold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary hover-elevation transform hover:scale-[1.06] transition-all duration-300 rounded-2xl"
              >
                Download CV
              </Button>
            </div>

            {/* ✅ Social Links
            <div className="flex justify-center lg:justify-start gap-5 pt-6">
              {[
                { icon: "Github", url: "https://github.com", label: "GitHub" },
                { icon: "Linkedin", url: "https://linkedin.com", label: "LinkedIn" },
                { icon: "Twitter", url: "https://twitter.com", label: "Twitter" },
                { icon: "Mail", url: "mailto:umesh@example.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target={social.icon !== "Mail" ? "_blank" : undefined}
                  rel={social.icon !== "Mail" ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="group w-14 h-14 flex items-center justify-center rounded-2xl bg-card/70 border border-border backdrop-blur-xl shadow-elevation-2
                  hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                >
                  <Icon
                    name={social.icon}
                    size={26}
                    className="text-foreground group-hover:text-primary transition-colors duration-300"
                  />
                </a>
              ))}
            </div> */}

            {/* ✅ Scroll indicator */}
            <div className="pt-8">
              <div className="inline-flex flex-col items-center lg:items-start gap-2 text-muted-foreground animate-bounce">
                <span className="text-sm font-semibold tracking-wide">
                  Scroll to explore
                </span>
                <Icon name="ChevronDown" size={26} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
