
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful interfaces with attention to user experience"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams and stakeholders"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driven by curiosity and a passion for innovation, I transform ideas into digital reality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Building the future, one line of code at a time
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                With over [X] years of experience in web development, I specialize in creating 
                robust, scalable applications using modern technologies. My journey began with 
                a curiosity about how things work, which evolved into a passion for building 
                solutions that make a real impact.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or mentoring fellow developers.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-foreground mb-4">What drives me:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Creating intuitive user experiences
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Solving complex technical challenges
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Continuous learning and growth
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Building meaningful connections
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-blue-100 hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
