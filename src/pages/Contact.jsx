import React, { useState } from 'react';
import Header from '../components/ui/Header';
import Footer from './portfolio-homepage/components/Footer';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Icon from '../components/AppIcon';
import { cn } from '../utils/cn';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    { name: "GitHub", icon: "Github", url: "https://github.com/umesh-webdev25" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/umesh-gayakwad-93929b360/" },
    { name: "Twitter", icon: "Twitter", url: "https://x.com/home" },
    { name: "Email", icon: "Mail", url: "mailto:umeshgayakwad100@gmail.com" },
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.target.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO title="Contact - Portfolio" description="Get in touch with me for work or collaboration." />
      
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-6 sm:px-12 lg:px-24 w-full max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you. 
            Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Form */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-elevation-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-primary/10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-secondary/10 blur-2xl"></div>
            
            <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input 
                  label="First Name" 
                  id="firstName"
                  name="firstName"
                  placeholder="Name"
                  className="border-blue-300" 
                  required 
                />
                <Input 
                  label="Last Name" 
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  className="border-blue-300" 
                  required 
                />
              </div>
              
              <Input 
                label="Email" 
                type="email" 
                id="email"
                name="email"
                placeholder="Email@example.com"
                className="border-blue-300" 
                required 
              />
              
              <Input 
                label="Subject" 
                id="subject"
                name="subject"
                placeholder="How can I help you?"
                className="border-blue-300" 
                required 
              />
              
              <div className="space-y-2">
                <label 
                  htmlFor="message" 
                  className="text-sm font-medium leading-none text-foreground"
                >
                  Message <span className="text-destructive ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className={cn(
                    "flex w-full rounded-md border border-blue-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                  )}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={18} />
                    Send Message
                  </>
                )}
              </Button>
              
              {/* Success Message */}
              {isSubmitted && (
                <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2">
                  <Icon name="CheckCircle2" size={20} className="shrink-0 mt-0.5" />
                  <p>Thanks for reaching out! Your message has been sent successfully. I'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-10 py-4">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Email</h3>
                    <a href="mailto:umeshgayakwad100@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                      umeshgayakwad100@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Phone</h3>
                    <a href="tel:+917470480121" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                      +91 7470480121
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground text-lg">
                      Raipur, Chhattisgarh
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Follow Me</h2>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 flex items-center justify-center rounded-2xl bg-card border border-border backdrop-blur-xl shadow-elevation-2
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
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
