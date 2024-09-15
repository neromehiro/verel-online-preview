'use client';

import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight, Code, Book, Camera, Send } from 'lucide-react';

// コンテンツ変数
const content = {
  name: "Nerome Hiro",
  title: "かっこいいエンジニア",
  about: {
    title: "About Me",
    description: [
      "Hi, I'm Akira Tanaka, a passionate fullstack developer with a keen interest in emerging technologies. With over 5 years of experience in web development, I specialize in creating robust and scalable applications that solve real-world problems.",
      "When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups."
    ]
  },
  skills: {
    title: "My Skills",
    items: [
      {
        title: "Web Development",
        description: "Proficient in HTML, CSS, JavaScript, React, and Node.js"
      },
      {
        title: "Database Design",
        description: "Experienced with SQL and NoSQL databases"
      },
      {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing interfaces"
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "E-commerce Platform",
        description: "A full-featured online store built with React and Node.js",
        link: "#"
      },
      {
        title: "Task Management App",
        description: "A productivity tool for teams using React Native and Firebase",
        link: "#"
      },
      {
        title: "AI-powered Chatbot",
        description: "An intelligent chatbot using natural language processing",
        link: "#"
      }
    ]
  },
  contact: {
    title: "Get in Touch",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    buttonText: "Send Message"
  },
  footer: {
    copyright: "2024 Akira Tanaka. All rights reserved.",
    links: [
      { name: "GitHub", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "Twitter", url: "#" }
    ]
  }
};

// 型定義
interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const Header: React.FC = () => (
  <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold">{content.name}</h1>
      <p className="text-xl mt-2">{content.title}</p>
    </div>
  </header>
);

const Navigation: React.FC = () => (
  <nav className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-purple-400">About</a></li>
        <li><a href="#skills" className="hover:text-purple-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>
      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-800">
        Download CV
      </Button>
    </div>
  </nav>
);

const About: React.FC = () => (
  <section id="about" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">{content.about.title}</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src="/api/placeholder/300/300" alt={content.name} className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-8" />
        <div>
          {content.about.description.map((paragraph, index) => (
            <p key={index} className="text-lg mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-col items-center">
      {icon}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-center">{description}</p>
    </CardContent>
  </Card>
);

const Skills: React.FC = () => (
  <section id="skills" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">{content.skills.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.skills.items.map((skill, index) => (
          <SkillCard
            key={index}
            icon={[<Code size={48} className="text-purple-600" />, <Book size={48} className="text-indigo-600" />, <Camera size={48} className="text-pink-600" />][index]}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <Button variant="outline" onClick={handleClick}>
          View Project <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">{content.projects.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.projects.items.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{content.contact.title}</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input placeholder={content.contact.namePlaceholder} />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder={content.contact.emailPlaceholder} />
          </div>
          <div className="mb-4">
            <Textarea placeholder={content.contact.messagePlaceholder} rows={4} />
          </div>
          <Button className="w-full" type="submit">
            {content.contact.buttonText} <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; {content.footer.copyright}</p>
      <div className="mt-4 flex justify-center space-x-4">
        {content.footer.links.map((link, index) => (
          <a key={index} href={link.url} className="hover:text-purple-400">{link.name}</a>
        ))}
      </div>
    </div>
  </footer>
);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;