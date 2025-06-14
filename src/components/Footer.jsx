import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center w-12 h-12 bg-primary hover:bg-secondary text-primary-foreground hover:text-secondary-foreground rounded-full mb-8 transition-all duration-300 hover:scale-110 transform"
            >
              <ArrowUp className="h-6 w-6" />
            </button>

            {/* Logo/Name */}
            <h3 className="text-2xl font-bold mb-4 text-foreground">Maheshwar Vardolu</h3>
            
            {/* Tagline */}
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Passionate Chef | Cooking with Heart, Leading with Soul
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="border-t border-muted pt-8">
              <p className="text-muted-foreground flex items-center justify-center">
                © 2024 Maheshwar Vardolu. Crafted with 
                <Heart className="h-4 w-4 mx-1 text-accent" />
                and passion for culinary excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
