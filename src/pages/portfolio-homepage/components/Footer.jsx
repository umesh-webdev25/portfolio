import React from "react";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: "Github", url: "https://github.com" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com" },
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com" },
    { name: "Email", icon: "Mail", url: "mailto:umeshgayakwad100@gmail.com" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background overflow-hidden border-t border-border">
      {/* ✅ Gradient line top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-blue-500 to-accent" />

      {/* ✅ Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-3xl rounded-full opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* ✅ Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ✅ Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-blue-500 to-accent flex items-center justify-center shadow-elevation-2">
                <Icon name="Code" size={24} className="text-white" />
              </div>

              <div>
                <p className="text-xl font-extrabold text-foreground tracking-tight">
                  Umesh Gayakwad
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              I build modern, scalable, and user-friendly web applications using
              the MERN stack. Passionate about clean code, UI design, and modern
              development.
            </p>

            {/* ✅ Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center rounded-2xl bg-card/70 border border-border backdrop-blur-xl shadow-elevation-2
                  hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  aria-label={link.name}
                  title={link.name}
                >
                  <Icon
                    name={link.icon}
                    size={22}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Quick Links */}
          <div className="space-y-5 md:pl-10">
            <h3 className="text-lg font-extrabold text-foreground">
              Quick Links
            </h3>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left group flex items-center gap-2 text-muted-foreground hover:text-primary transition duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-muted group-hover:bg-primary transition"></span>
                  <span className="font-semibold">{link.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* ✅ Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-extrabold text-foreground">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/40 border border-border">
                  <Icon name="Mail" size={18} className="text-primary" />
                </div>
                <span className="text-muted-foreground font-semibold">
                  umeshgayakwad100@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/40 border border-border">
                  <Icon name="MapPin" size={18} className="text-primary" />
                </div>
                <span className="text-muted-foreground font-semibold">
                  Raipur, Chhattisgarh
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/40 border border-border">
                  <Icon name="Phone" size={18} className="text-primary" />
                </div>
                <span className="text-muted-foreground font-semibold">
                  +91 7470480121
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="default"
                size="sm"
                iconName="Mail"
                iconPosition="left"
                className="rounded-xl px-6"
              >
                Contact
              </Button>

              <Button
                variant="outline"
                size="sm"
                iconName="ArrowUp"
                iconPosition="left"
                className="rounded-xl px-6"
                onClick={scrollToTop}
              >
                Top
              </Button>
            </div>
          </div>
        </div>

        {/* ✅ Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} Umesh Gayakwad. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
            <button className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="hover:text-primary transition-colors duration-200">
              Terms
            </button>

            <div className="flex items-center gap-2">
              <span>Built with</span>
              <Icon name="Heart" size={14} className="text-red-500 fill-current" />
              <span>React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
