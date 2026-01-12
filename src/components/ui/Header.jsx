import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')?.matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement?.classList?.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement?.classList?.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement?.classList?.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement?.classList?.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navigationItems = [
    { name: 'Home', path: '#home', icon: 'Home', type: 'scroll' },
    { name: 'About', path: '#about', icon: 'User', type: 'scroll' },
    { name: 'Skills', path: '#skills', icon: 'Code', type: 'scroll' },
    { name: 'Projects', path: '#projects', icon: 'FolderOpen', type: 'scroll' },
    { name: 'Contact', path: '/contact', icon: 'Mail', type: 'route' }
  ];

  const handleNavClick = (item) => {
    if (item?.type === 'scroll') {
      const element = document.querySelector(item?.path);
      if (element) {
        element?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
    closeMobileMenu();
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link 
            to="/portfolio-homepage" 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
            onClick={closeMobileMenu}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Code" size={20} color="white" />
            </div>
            <span className="text-xl font-semibold text-foreground">Portfolio Pro</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems?.slice(0, 4)?.map((item) => (
              item?.type === 'scroll' ? (
                <button
                  key={item?.path}
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  {item?.name}
                </button>
              ) : (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-muted ${
                    isActivePath(item?.path)
                      ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item?.name}
                </Link>
              )
            ))}
            
            {/* More Menu for Additional Items */}
            <div className="relative group">
              {/* <Button
                variant="ghost"
                size="sm"
                className="px-4 py-2"
              >
                
                <Icon name="ChevronDown" size={16} className="ml-1" />
              </Button> */}
              
              <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-md shadow-elevation-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    to="/contact"
                    className={`flex items-center px-4 py-2 text-sm hover:bg-muted transition-colors duration-200 ${
                      isActivePath('/contact')
                        ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name="Mail" size={16} className="mr-2" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-9 h-9"
            >
              <Icon 
                name={isDarkMode ? "Sun" : "Moon"} 
                size={18} 
                className="transition-transform duration-200 hover:scale-110"
              />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-9 h-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={18} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                item?.type === 'scroll' ? (
                  <button
                    key={item?.path}
                    onClick={() => handleNavClick(item)}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 tap-target w-full text-left text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    <Icon name={item?.icon} size={18} className="mr-3" />
                    {item?.name}
                  </button>
                ) : (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 tap-target ${
                      isActivePath(item?.path)
                        ? 'text-primary bg-muted' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={item?.icon} size={18} className="mr-3" />
                    {item?.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Download CV */}
              {cvDownloadLink && (
                <a
                  href={cvDownloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 tap-target w-full text-left text-muted-foreground hover:text-foreground hover:bg-muted bg-primary/10"
                >
                  <Icon name="Download" size={18} className="mr-3" />
                  Download CV
                </a>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;