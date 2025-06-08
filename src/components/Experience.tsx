
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: 'DBS TECH INDIA (DTI)',
      location: 'Hyderabad, India',
      position: 'Analyst',
      duration: '09/2022 to 12/2022',
      achievements: [
        'Developed and maintained responsive web applications using HTML5, CSS3, JavaScript, and React, improving page load speed by 35%',
        'Built and integrated RESTful APIs with Node.js and Express, reducing server response time by 40%',
        'Collaborated with cross-functional teams to implement user-centric UI/UX designs, resulting in a 25% increase in user engagement',
        'Deployed scalable backend services using MongoDB and PostgreSQL, achieving 99.9% uptime',
        'Automated CI/CD pipelines using GitHub Actions and Docker, decreasing deployment time by 50%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'GitHub Actions']
    },
    {
      company: 'DBS TECH INDIA (DTI)',
      location: 'Hyderabad, India',
      position: 'Senior Officer Application Developer',
      duration: '10/2021 to 08/2022',
      achievements: [
        'Spearheaded development of responsive web and mobile-compatible pages for wealth management features',
        'Engineered and optimized over 15 reusable React components and custom hooks, reducing development time by 25%',
        'Implemented state management solutions using React Context API and Redux, improving performance by 20%',
        'Built scalable microservices using Node.js and Express, integrating with RESTful APIs and MariaDB',
        'Automated build and deployment pipelines via Jenkins, reducing manual deployment efforts by 40%'
      ],
      technologies: ['React', 'Redux', 'Node.js', 'Express', 'MariaDB', 'Jenkins']
    },
    {
      company: 'ACCENTURE',
      location: 'Hyderabad, India',
      position: 'Application Programmer',
      duration: '07/2021 to 09/2021',
      achievements: [
        'Developed and debugged Java-based applications, achieving 30% improvement in processing efficiency',
        'Created and maintained XML and JSON data structures, reducing integration errors by 25%',
        'Automated routine tasks using shell scripts on Linux environments, enhancing productivity by 20%',
        'Executed SQL queries and maintained MySQL databases, improving data retrieval performance',
        'Completed over 100 hours of hands-on experience with Java, Linux, and database technologies'
      ],
      technologies: ['Java', 'Linux', 'MySQL', 'XML', 'JSON', 'Shell Scripting']
    },
    {
      company: 'THE SPARKS FOUNDATION',
      location: 'Remote',
      position: 'Data Science and Business Analytics Trainee',
      duration: '11/2020 to 12/2020',
      achievements: [
        'Analyzed datasets exceeding 500,000 records using Python libraries, increasing reporting efficiency by 30%',
        'Developed predictive models with over 85% accuracy using machine learning algorithms',
        'Automated data cleaning and preprocessing workflows, reducing preparation time by 40%',
        'Conducted exploratory data analysis using Matplotlib and Seaborn to identify trends',
        'Delivered actionable insights contributing to 15% improvement in customer retention strategies'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'Machine Learning']
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">My journey in software development and data science</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-600/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary">{exp.position}</CardTitle>
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="secondary" className="self-start md:self-center">
                    {exp.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
