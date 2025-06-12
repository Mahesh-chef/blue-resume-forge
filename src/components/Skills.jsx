
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChefHat, Utensils, Users, Settings, GraduationCap, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: ChefHat,
      title: "Culinary Expertise",
      skills: [
        { name: "Food Preparation", level: 95 },
        { name: "Fusion Cuisine", level: 90 },
        { name: "Kitchen Operations", level: 90 },
        { name: "Menu Development", level: 85 },
        { name: "Food Safety & Hygiene", level: 95 }
      ]
    },
    {
      icon: Utensils,
      title: "Food & Beverage Operations",
      skills: [
        { name: "High-Volume Cooking", level: 90 },
        { name: "Beverage Pairing", level: 75 },
        { name: "Cost Control", level: 80 },
        { name: "Inventory Management", level: 85 },
        { name: "Quality Assurance", level: 90 }
      ]
    },
    {
      icon: Users,
      title: "Leadership & Management",
      skills: [
        { name: "Team Leadership", level: 85 },
        { name: "Kitchen Management", level: 90 },
        { name: "Staff Training", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Problem Solving", level: 85 }
      ]
    },
    {
      icon: Settings,
      title: "Hotel & Restaurant Operations",
      skills: [
        { name: "Hotel Management", level: 85 },
        { name: "Customer Service", level: 95 },
        { name: "Operations Management", level: 80 },
        { name: "POS Systems", level: 75 },
        { name: "Vendor Relations", level: 80 }
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Hotel Management",
      institution: "Osmania University, Hyderabad",
      year: "2014 - 2017",
      description: "Specialized in Hotel, Motel, and Restaurant Management with comprehensive training in hospitality operations"
    },
    {
      degree: "Hotel Management Certification",
      institution: "WESTIN COLLEGE OF HOTEL MANAGEMENT",
      year: "2014 - 2017",
      description: "Professional certification program focusing on industry best practices"
    },
    {
      degree: "Bachelor's Degree",
      institution: "Osmania University, Department of Business Management",
      year: "2017 - 2019",
      description: "Additional business management education to complement hospitality expertise"
    }
  ];

  const certifications = [
    "Food Safety Certification",
    "Kitchen Management Certification",
    "Hospitality Leadership Certificate",
    "International Cuisine Specialization"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Skills & Education</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set built through education, hands-on experience, and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-gradient flex items-center justify-center mr-4">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-gradient flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-blue-100">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {edu.year}
                        </Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-gradient flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>
              
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-blue-100 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                        <span className="text-foreground font-medium">{cert}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Professional Strengths */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Professional Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Pressure Management", "Team Leadership", "Customer Service Excellence", "Cultural Adaptability", 
                    "Multilingual Communication", "Innovation & Creativity", "Process Optimization", "Quality Control"
                  ].map((strength, index) => (
                    <Badge key={index} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <Card className="mt-8 bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <blockquote className="text-center">
                    <p className="text-muted-foreground italic mb-4">
                      "Learning by doing: my internship gave me more than just experience—it gave me clarity."
                    </p>
                    <footer className="text-sm text-primary font-medium">
                      - Maheshwar Vardolu
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
