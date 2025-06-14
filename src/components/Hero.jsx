import React from 'react';
import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-accent/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/30 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/40 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1583394293214-28a5b18962c4?w=400&h=400&fit=crop&crop=face" 
              alt="Maheshwar Vardolu - Professional Chef"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Maheshwar Vardolu</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6 font-medium">
              Passionate Chef | Cooking with Heart, Leading with Soul
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Specializing in Fusion Cuisine & Kitchen Operations with experience across luxury resorts 
              and boutique establishments. Currently serving as Lead Line Cook at Viewline Resort Snowmass, 
              Autograph Collection in Colorado.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-secondary text-primary-foreground hover:text-secondary-foreground px-8 py-3 text-lg transition-all duration-300"
              onClick={() => window.open('https://drive.google.com/drive/folders/1t5jAREBC2kAQfXw2urAFkpAPM58HG5Ra?usp=sharing', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg transition-all duration-300"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://www.linkedin.com/in/maheshwar-vardolu-769b18139/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:mahesh.vardolu789@gmail.com" 
              className="text-muted-foreground hover:text-secondary transition-colors duration-200 p-2 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-primary hover:text-secondary transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
