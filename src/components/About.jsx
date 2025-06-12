
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: ChefHat,
      title: "Culinary Excellence",
      description: "Mastering fusion cuisine techniques with passion for innovation"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading kitchen operations and mentoring culinary professionals"
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Delivering exceptional dining experiences in luxury establishments"
    },
    {
      icon: Zap,
      title: "Adaptability",
      description: "Thriving under pressure while maintaining high standards"
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
              A culinary journey driven by passion, creativity, and dedication to excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Crafting culinary experiences, one dish at a time
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                With over 8 years of experience in the culinary industry, I've had the privilege 
                of working in diverse environments from luxury resorts in Colorado to boutique 
                establishments in Abu Dhabi. My journey began with a Bachelor's in Hotel Management 
                from Osmania University, and has evolved through hands-on experience in some of 
                the most prestigious kitchens.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                As a young professional with expertise in sales and communication, I thrive under 
                pressure and adapt quickly to business requirements. My experience has taught me 
                to work effectively with diverse teams while ensuring exceptional customer service. 
                I embrace new challenges as opportunities for growth and skill enhancement.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-foreground mb-4">What drives me:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Creating memorable dining experiences
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Innovating fusion cuisine techniques
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Leading and mentoring kitchen teams
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Continuous learning and development
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
