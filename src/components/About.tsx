
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const About = () => {
  const contactInfo = [
    { icon: MapPin, text: 'Apex, NC' },
    { icon: Phone, text: '(919) 924-5536' },
    { icon: Mail, text: 'desai.padmanabh01@gmail.com' },
    { icon: Linkedin, text: 'LinkedIn Profile' },
  ];

  return (
    <section id="about" className="pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Padmanabha
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full Stack Developer & Data Scientist
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating innovative solutions through code. I specialize in building 
              responsive web applications and implementing data-driven insights to solve complex problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="lg:pl-8">
            <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-background to-muted/30 border-0 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">Professional Summary</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Frontend & Backend Development</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Expertise in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, 
                  and modern frameworks such as React and Angular. Proficient in optimizing web applications 
                  for speed and scalability while ensuring cross-browser compatibility and adherence to UI/UX best practices.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Server-Side Architecture</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in designing and implementing server-side logic using languages such as Python, 
                  Java, and Node.js. Experience with RESTful APIs, database management, and ensuring robust 
                  security and performance across applications.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
