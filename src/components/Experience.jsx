
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Company Inc.",
      position: "Senior Full Stack Developer",
      location: "Remote",
      duration: "2022 - Present",
      description: "Led development of scalable web applications serving 10k+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      link: "#"
    },
    {
      id: 2,
      company: "Digital Agency",
      position: "Frontend Developer",
      location: "New York, NY",
      duration: "2020 - 2022",
      description: "Developed responsive web applications for diverse clients including e-commerce platforms and corporate websites.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced load times by 50% through optimization",
        "Implemented modern design systems"
      ],
      technologies: ["React", "Vue.js", "Sass", "WordPress", "Figma"],
      link: "#"
    },
    {
      id: 3,
      company: "Startup Solutions",
      position: "Junior Developer",
      location: "San Francisco, CA",
      duration: "2019 - 2020",
      description: "Built MVP applications for early-stage startups, working closely with founders to bring ideas to life.",
      achievements: [
        "Launched 3 successful MVPs",
        "Contributed to $500k funding round",
        "Established development best practices"
      ],
      technologies: ["JavaScript", "React", "Express", "MongoDB", "Git"],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of growth, innovation, and meaningful contributions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-primary/20">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column - Company Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-gradient flex items-center justify-center text-white font-bold text-lg">
                          {exp.company.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.company}
                          </h3>
                          <p className="text-primary font-semibold">{exp.position}</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                        {exp.link && (
                          <a href={exp.link} className="flex items-center text-primary hover:underline">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Project
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Description & Details */}
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                              {tech}
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
