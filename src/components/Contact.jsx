
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mahesh.vardolu789@gmail.com",
      link: "mailto:mahesh.vardolu789@gmail.com"
    },
    {
      icon: MapPin,
      label: "Current Location",
      value: "Oklahoma City, Oklahoma, United States",
      link: "#"
    },
    {
      icon: MapPin,
      label: "Work Location",
      value: "Snowmass Village, Colorado, United States",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/maheshwar-vardolu-769b18139/",
      color: "hover:text-primary"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to discuss culinary opportunities or collaborate on your next dining experience? 
              Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
                      placeholder="Culinary Opportunity Discussion"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/70 resize-none"
                      placeholder="Tell me about your culinary project or opportunity..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new culinary opportunities, innovative projects, 
                  or collaborate on creating exceptional dining experiences. Whether you're looking 
                  for a passionate chef to join your team or want to discuss culinary consulting, 
                  I'm here to help.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <a href={info.link} className="flex items-center group">
                        <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mr-4 group-hover:bg-accent/80 transition-colors">
                          <info.icon className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-white/70">{info.label}</p>
                          <p className="text-lg font-medium">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold mb-4">Connect with Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 transform"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <Card className="bg-accent/20 border-accent/30">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3 animate-pulse"></div>
                    <div>
                      <p className="font-medium">Open to new opportunities</p>
                      <p className="text-sm text-white/70">Currently serving at Viewline Resort Snowmass</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Quote */}
              <Card className="bg-secondary/20 border-secondary/30">
                <CardContent className="p-6">
                  <blockquote className="text-center">
                    <p className="text-white/90 italic mb-4">
                      "I am able to work under pressure, adapt quickly to the requirements of the business. 
                      As a hardworking and results oriented individual who takes pride in her work..."
                    </p>
                    <footer className="text-sm text-white/70 font-medium">
                      Professional Philosophy
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

export default Contact;
