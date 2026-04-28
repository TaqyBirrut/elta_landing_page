import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Produk', href: '#produk' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Kontak', href: '#kontak' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary shadow-lg shadow-secondary/40 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md' : ''
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-md">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-secondary-foreground">ELTA TENUN</span>
              <span className="text-xs text-secondary-foreground/80 tracking-wider">INDONESIA STORE</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-secondary-foreground/80 hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#kontak')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] shadow-md"
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:bg-secondary/80">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-6 border-b border-border">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-primary-foreground font-bold text-xl">E</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none text-foreground">ELTA TENUN</span>
                    <span className="text-xs text-muted-foreground tracking-wider">INDONESIA STORE</span>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <Button 
                  onClick={() => scrollToSection('#kontak')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full transition-all duration-200 active:scale-[0.98] shadow-md"
                >
                  Hubungi Kami
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;