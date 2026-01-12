import React from "react";
import Icon from "../../../components/AppIcon";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-card overflow-hidden">
      {/* ✅ Background Effects */}
      <div className="absolute -top-32 -left-40 w-[520px] h-[500px] bg-primary/15 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-200px] -right-40 w-[520px] h-[520px] bg-accent/15 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ✅ Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            About Me
          </h2>

          <div className="mt-6 w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-primary via-blue-500 to-accent"></div>
        </div>

        {/* ✅ Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ✅ Left Side - Image + Badges */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl"></div>

              {/* Image ring */}
              <div className="relative w-[420px] h-[420px] rounded-full p-2 bg-gradient-to-tr from-primary via-blue-500 to-accent shadow-elevation-3">
                <div className="w-full h-full rounded-full overflow-hidden bg-card border border-border">
                  <img
                    src="/assets/images/myImage.png"
                    alt="Umesh Gayakwad"
                    className="w-full h-full object-cover object-[50%_20%]"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-card/70 backdrop-blur-xl border border-border shadow-elevation-2 flex items-center gap-3">
                <span className="w-3 h-3 bg-success rounded-full animate-pulse"></span>
                <p className="text-foreground font-semibold">Open to Work</p>
              </div>
            </div>
          </div>

          {/* ✅ Right Side - Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-elevation-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Hello! I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-accent">
                  Umesh Gayakwad
                </span>
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-5">
                I’m a passionate Full Stack Developer focused on building modern,
                scalable, and user-friendly web applications. I enjoy creating
                clean UI and robust backend APIs using the MERN stack.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I love exploring new technologies, improving my skills daily, and
                working on meaningful projects. My goal is to build solutions
                that create real value and great user experience.
              </p>

              {/* ✅ Quick Info Badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: "MapPin", text: "Raipur, Chhattisgarh" },
                  { icon: "GraduationCap", text: "MCA Student" },
                  { icon: "Layers", text: "MERN Stack Developer" },
                  { icon: "Briefcase", text: "Fresher" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/40 border border-border text-sm font-semibold text-foreground"
                  >
                    <Icon name={item.icon} size={16} className="text-primary" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Stats Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-card/70 border border-border rounded-2xl p-6 shadow-elevation-2 hover:scale-[1.02] transition">
                <p className="text-muted-foreground text-sm font-semibold">
                  Experience
                </p>
                <p className="text-2xl font-extrabold text-primary mt-2">
                  Fresher
                </p>
              </div>

              <div className="bg-card/70 border border-border rounded-2xl p-6 shadow-elevation-2 hover:scale-[1.02] transition">
                <p className="text-muted-foreground text-sm font-semibold">
                  Projects
                </p>
                <p className="text-2xl font-extrabold text-primary mt-2">
                  6+ Completed
                </p>
              </div>
            </div>

            {/* ✅ CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-lg hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300 text-center"
              >
                Contact Me
              </a>

              <a
                href="/assets/resume/umesh-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl border-2 border-primary text-primary font-bold text-lg hover:bg-primary hover:text-primary-foreground hover:scale-[1.03] transition-all duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
