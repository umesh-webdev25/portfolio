import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

const PortfolioHomepage = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const href = e?.currentTarget?.getAttribute('href');
      if (href && href?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks?.forEach(link => {
      link?.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      anchorLinks?.forEach(link => {
        link?.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection onScrollToProjects={scrollToProjects} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioHomepage;