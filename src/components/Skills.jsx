
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Palette, Settings, GraduationCap, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript/ES6+", level: 95 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      icon: Settings,
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Webpack", level: 75 },
        { name: "Jest", level: 80 }
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "UI/UX Design", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "Prototyping", level: 80 }
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University Name",
      year: "2019",
      description: "Specialized in Software Engineering and Web Development"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Coding Academy",
      year: "2018",
      description: "Intensive 6-month program covering modern web technologies"
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "Scrum Master Certified",
    "MongoDB Developer"
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
              Continuously evolving skill set backed by solid education and hands-on experience
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

              {/* Additional Skills Tags */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Additional Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Agile/Scrum", "Team Leadership", "Code Review", "Mentoring", 
                    "Project Management", "Technical Writing", "API Design", "Performance Optimization"
                  ].map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
