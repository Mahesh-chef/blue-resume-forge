
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Viewline Resort Snowmass, Autograph Collection",
      position: "Lead Line Cook",
      location: "Snowmass Village, Colorado, United States",
      duration: "September 2024 - Present",
      description: "Leading kitchen operations at a luxury ski resort, managing high-volume service during peak seasons while maintaining exceptional quality standards.",
      achievements: [
        "Managing kitchen operations during peak ski season",
        "Training and mentoring junior kitchen staff",
        "Maintaining consistent quality across all dishes"
      ],
      skills: ["Kitchen Leadership", "High-Volume Cooking", "Quality Control", "Team Management"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      company: "Viewline Resort Snowmass, Autograph Collection",
      position: "Lead Line Cook",
      location: "Snowmass Village, Colorado, United States",
      duration: "June 2023 - April 2024",
      description: "Gained valuable experience in luxury resort operations, developing skills in high-pressure environments and seasonal dining operations.",
      achievements: [
        "Promoted to lead position within the organization",
        "Streamlined kitchen processes for efficiency",
        "Consistently delivered exceptional guest experiences"
      ],
      skills: ["Resort Operations", "Seasonal Menu Planning", "Guest Service", "Process Improvement"],
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      company: "TEN 11 Coffee Boutique",
      position: "Chef De Partie",
      location: "Abu Dhabi, United Arab Emirates",
      duration: "May 2022 - September 2023",
      description: "Specialized in boutique dining operations, focusing on artisanal food preparation and customer-centric service in an intimate setting.",
      achievements: [
        "Developed signature dishes for boutique menu",
        "Managed food preparation for specialty items",
        "Enhanced customer satisfaction through personalized service"
      ],
      skills: ["Artisanal Cooking", "Menu Development", "Boutique Operations", "Customer Relations"],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      company: "Shakespeare and Co.",
      position: "Demi Chef De Partie / Line Cook",
      location: "Abu Dhabi Emirate, United Arab Emirates",
      duration: "June 2017 - February 2022",
      description: "Progressive career growth from Line Cook to Demi Chef De Partie, mastering fundamental cooking techniques and developing leadership skills over 4 years and 9 months.",
      achievements: [
        "Promoted from Line Cook to Demi Chef De Partie",
        "Mastered diverse cooking techniques and cuisines",
        "Contributed to consistent restaurant operations for nearly 5 years"
      ],
      skills: ["Progressive Career Growth", "Diverse Cuisine", "Consistency", "Technique Mastery"],
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=250&fit=crop"
    }
  ];

  const earlyExperience = [
    {
      company: "Sheraton Hyderabad Hotel",
      position: "Line Cook",
      duration: "December 2015 - March 2016",
      location: "Hyderabad, Telangana, India",
      description: "Early career experience in luxury hotel operations"
    },
    {
      company: "Radisson Blu Plaza Hyderabad",
      position: "Intern",
      duration: "May 2015 - June 2015",
      location: "Hyderabad, Telangana, India",
      description: "Foundation internship experience - 'Every expert was once an intern. Grateful for the opportunity to start my journey.'"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Culinary Journey</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intern to lead chef - a journey of passion, growth, and culinary excellence
            </p>
          </div>

          {/* Main Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Image */}
                    <div className="lg:col-span-1">
                      <img 
                        src={exp.image} 
                        alt={`${exp.company} kitchen environment`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-primary font-semibold">{exp.position}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-foreground mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Early Career Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Early Career Foundation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {earlyExperience.map((exp, index) => (
                <Card key={index} className="border-blue-100 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      <h4 className="text-lg font-semibold text-foreground">{exp.company}</h4>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.position}</p>
                    <div className="text-sm text-muted-foreground mb-2">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-3 w-3 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{exp.description}</p>
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

export default Experience;
