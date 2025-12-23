import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import automailoneImg from '../assets/send.png';
import aslImg from '../assets/asl.jpg';
import blogImg from '../assets/blog.jpg';
import jobPlatform from '../assets/jobPlatform.jpg';
import trackerImg from '../assets/tracker.png';
import assistantImg from '../assets/voice.png';  
import analyzer from '../assets/analyzer.jpg';  

const projects = [
  {
    title: 'FindIt',
    description: 'A full-stack job portal that enables users to search and apply for jobs, manage profiles with resume uploads via Cloudinary, and securely authenticate using Clerk. Features NLP-powered resume-job matching for better recommendations.',
    tags: ['ReactJs', 'NodeJs', 'Clerk', 'Cloudinary', 'NLP', 'ExpressJS'],
    category: 'Full-Stack',
    github: 'https://github.com/Janavi-S05/JobPortal',
    demo: 'https://job-portal-cli.vercel.app/',
    image: jobPlatform
  },
  {
    title: 'AutoMailOne',
    description: 'An email reply generator that uses Google’s Gemini API to create professional, context-aware responses, with a Chrome extension for Gmail integration and a full-stack web application.',
    tags: ['Spring Boot', 'React', 'WebClient', 'Google Gemini API', 'Docker', 'Maven'],
    category: 'Full-Stack',
    github: 'https://github.com/Janavi-S05/AutoMailOne',
    image: automailoneImg
  },
  {
    title: 'BlogNest',
    description: 'A secure blogging platform that empowers users to create, edit, and manage posts with rich metadata. Built with JWT-based authentication and intelligent search filters.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Full-Stack',
    github: 'https://github.com/Janavi-S05/ChronicleHub',
    image: blogImg
  },
  {
    title: 'Zudo – AI Assistant',
    description: 'A real-time voice-enabled AI assistant built using Python, LiveKit Agents, and Google Gemini 2.0 Flash. Supports live, natural speech-to-speech conversation with low latency.',
    tags: ['Python', 'LiveKit', 'Gemini 2.0', 'WebRTC'],
    category: 'AI/ML',
    github: 'https://github.com/Janavi-S05/Zudo-AI-Assistant',
    image: assistantImg
  },
  {
    title: 'Startup Trend Analyzer',
    description: 'A multi-agent AI platform built with Python and Streamlit to analyze startup trends based on real-time web input. Uses Groq\'s LLaMA3 with modular LLM agents.',
    tags: ['Python', 'Streamlit', 'Groq LLaMA3', 'LangChain'],
    category: 'AI/ML',
    github: 'https://github.com/Janavi-S05/Startup-Trend-Analyzer',
    image: analyzer
  },
  {
    title: 'SpendTracker',
    description: 'A personal finance manager that simplifies budgeting by tracking income, expenses, and balances. Offers clear visualizations through interactive charts and transaction logs.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'Full-Stack',
    github: 'https://github.com/Janavi-S05/FinLedger',
    image: trackerImg
  },
  {
    title: 'Sign Language Translator',
    description: 'Enables communication for individuals with vocal and hearing impairments using computer vision and R-CNN model. Real-time gesture interpretation via webcam.',
    tags: ['Python', 'OpenCV', 'R-CNN', 'ML'],
    category: 'AI/ML',
    link: 'https://ieeexplore.ieee.org/document/10626090',
    image: aslImg
  },
];

const categories = ['All', 'Full-Stack', 'AI/ML'];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Projects</h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground">A showcase of my work, featuring full-stack applications and innovative solutions</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className={filter === category 
                  ? 'bg-gradient-primary text-primary-foreground border-0' 
                  : 'border-primary/30 text-primary hover:bg-primary/5 hover:border-primary'}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-card rounded-xl overflow-hidden card-shadow card-shadow-hover group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      {project.demo && (
                        <Button size="sm" className="bg-gradient-primary text-primary-foreground border-0" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button size="sm" variant="outline" className="bg-card/80 border-card hover:bg-card" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                      )}
                      {project.link && !project.github && (
                        <Button size="sm" variant="outline" className="bg-card/80 border-card hover:bg-card" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-1" />
                            View
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gradient">{project.title}</h3>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground border-0 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary/80 hover:bg-primary/5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
