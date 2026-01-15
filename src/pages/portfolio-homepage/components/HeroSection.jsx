import React from "react";
import Button from "../../../components/ui/Button";
import Icon from "../../../components/AppIcon";
import mongoLogo from "../../../assets/tech/mongodb.png";
import expressLogo from "../../../assets/tech/express.png";
import reactLogo from "../../../assets/tech/react.png";
import nodeLogo from "../../../assets/tech/node.png";
import jsLogo from "../../../assets/tech/js.png";
import tsLogo from "../../../assets/tech/ts.png";
import mainIcon from "../../../assets/Image/mainIcons.svg";
import mainIconDark from "../../../assets/Image/mainIconsdark.svg";
import { motion } from "framer-motion"; // UI Enhancement: Added for smooth entrance animations
import { InView } from "react-intersection-observer";

// UI Enhancement: refined animation variants for a smoother, premium feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const slideInFromRight = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const HeroSection = ({ onScrollToProjects }) => {
  const cvDownloadLink = import.meta.env.VITE_CV_DOWNLOAD_LINK;

  const handleDownloadCV = () => {
    if (cvDownloadLink) {
      window.open(cvDownloadLink, "https://drive.google.com/file/d/1AxKn15mMs8-7ucNFApn43PRI5IRfoK-9/view?usp=drive_link");
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
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-24 bg-background selection:bg-primary/20"
    >
      {/* ==================== BACKGROUND EFFECTS (UI Improved) ==================== */}

      {/* UI Enhancement: Finer grid pattern for a technical/modern look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.08]"></div>

      {/* UI Enhancement: Softer, larger gradient orbs for ambient lighting */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-[-180px] -left-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      {/* UI Enhancement: Subtle central glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary/5 blur-[80px] rounded-full point-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* ==================== MAIN GRID LAYOUT ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ==================== LEFT SIDE: HERO IMAGE ==================== */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            {/* Logo Box - Maintained responsive sizing from previous request */}
            <div className="relative w-[450px] h-[450px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center z-10 lg:-ml-16 lg:-mt-24">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
              {/* Logo text - Using InView for entrance animation */}
              <InView triggerOnce={false}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromRight(0.8)}
                    className="w-full h-full flex justify-center items-center"
                  >
                    {/* Light Mode Image */}
                    <img
                      src={mainIcon}
                      alt="Umesh Gayakwad - Developer"
                      className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-700 block dark:hidden drop-shadow-2xl"
                    />
                    {/* Dark Mode Image */}
                    <img
                      src={mainIconDark}
                      alt="Umesh Gayakwad - Developer"
                      className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-700 hidden dark:block drop-shadow-2xl"
                    />
                  </motion.div>
                )}
              </InView>
            </div>
          </div>

          {/* ==================== RIGHT SIDE: CONTENT ==================== */}
          {/* UI Enhancement: Wrapped in motion.div for staggered text reveal */}
          <motion.div
            className="text-center lg:text-left space-y-8 order-2 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* 1. Status Badges */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/80 border border-border/50 backdrop-blur-md shadow-sm">
                <span className="text-xl">👋</span>
                <span className="text-foreground font-medium">Hello, I'm <span className="text-primary font-bold">Umesh</span></span>
              </span>

              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary/5 text-primary border border-primary/20 backdrop-blur-md text-sm font-semibold tracking-wide uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Available for work
              </span>
            </motion.div>

            {/* 2. Main Title - UI Enhancement: Tighter tracking, larger size */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground leading-[1.1] flex flex-row flex-nowrap whitespace-nowrap gap-x-2 sm:gap-x-3 lg:gap-x-4 justify-center lg:justify-start items-center">
                Umesh
                {/* UI Enhancement: Richer gradient text */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-accent animate-gradient-x pb-2">
                  Gayakwad
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground/90 tracking-tight">
                Full Stack Developer <span className="text-primary/40 px-2">|</span> MERN Stack Expert
              </h2>
            </motion.div>

            {/* 3. Info Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-muted-foreground">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm transition-colors hover:border-primary/30">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-sm font-medium">Raipur, Chhattisgarh</span>
              </span>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm transition-colors hover:border-primary/30">
                <Icon name="GraduationCap" size={16} className="text-primary" />
                <span className="text-sm font-medium">MCA Student</span>
              </span>
            </motion.div>

            {/* 4. Description */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I build modern, scalable, and user-friendly web applications using
                cutting-edge technologies. Passionate about clean code, creative UI,
                and solving real-world problems.
              </p>
            </motion.div>

            {/* 5. Tech Stack - UI Enhancement: Cleaner cards with hover lift */}
            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-card border border-border/50 shadow-sm
                    flex items-center justify-center overflow-hidden transition-all duration-300
                    hover:scale-110 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer relative"
                    title={tech.name}
                  >
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300 z-10"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 6. CTA Buttons - UI Enhancement: Better spacing and shadow */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center pt-4">
              <Button
                variant="default"
                size="lg"
                onClick={onScrollToProjects}
                iconName="ArrowDown"
                iconPosition="right"
                // UI Enhancement: Added shadow shadow-primary/25 for depth
                className="h-14 px-8 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 rounded-xl"
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadCV}
                className="h-14 px-8 text-base font-bold border-2 hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition-all duration-300 rounded-xl"
              >
                Download CV
              </Button>
            </motion.div>

            {/* 7. Scroll Indicator */}
            <motion.div variants={itemVariants} className="pt-8">
              <div className="inline-flex flex-col items-center lg:items-start gap-2 text-muted-foreground/60 animate-bounce cursor-pointer">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
                <Icon name="ChevronDown" size={20} className="text-primary/70" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
