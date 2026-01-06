import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
    { name: 'Email', icon: 'Mail', url: 'mailto:alex@example.com' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Code" size={20} color="white" />
              </div>
              <span className="text-xl font-semibold text-foreground">Alex Johnson</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies and clean, maintainable code.
            </p>
            <div className="flex space-x-3">
              {socialLinks?.map((link) => (
                <a
                  key={link?.name}
                  href={link?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary transition-colors duration-200 group"
                >
                  <Icon 
                    name={link?.icon} 
                    size={18} 
                    className="text-muted-foreground group-hover:text-white transition-colors duration-200" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks?.map((link) => (
                <button
                  key={link?.name}
                  onClick={() => scrollToSection(link?.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link?.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-muted-foreground">alex@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="mt-4"
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
              <div className="flex items-center space-x-2">
                <span>Built with</span>
                <Icon name="Heart" size={14} className="text-red-500 fill-current" />
                <span>and React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;