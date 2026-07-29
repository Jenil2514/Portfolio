import { useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Helper component to handle image errors and show a stylized fallback gradient
const ProjectImage = ({ src, alt, fallbackGradient }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError || !src) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-6 text-center select-none`}>
        <Sparkles className="h-10 w-10 text-white/40 mb-3 animate-pulse" />
        <span className="text-white/95 font-mono text-xs font-semibold tracking-wider uppercase">Project Showcase</span>
        <span className="text-white/60 text-[10px] mt-1.5 font-mono">Place '{src.replace('/', '')}' in public/</span>
      </div>
    );
  }
  
  return (
    <img 
      src={src} 
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setHasError(true)}
    />
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AutoBiz - Multi-Agent Business Automation Platform",
      description: "• Architected a multi-agent business automation platform unifying email, scheduling, content, sales, and finance workflows into a single system.\n• Built an email reply automation and timezone-aware appointment booking agent with Groq-powered human-in-the-loop escalation.\n• Developed LangGraph & Gemini orchestrated content agents (newsletter generator, interactive LinkedIn agent with live voice (Deepgram) to post translation, and social media image template generator).\n• Implemented deal tracking pipelines and a complete invoicing system integrated with Stripe for recurring payments, estimates, and PDF alerts.",
      technologies: ["Next.js", "FastAPI", "LangGraph", "Groq", "Gemini AI", "Deepgram", "Stripe API", "PostgreSQL"],
      image: "/autobiz.png",
      fallbackGradient: "from-indigo-600 to-purple-800",
      liveUrl: "https://autobiz-prod.vercel.app/",
      githubUrl: "https://github.com/Jenil2514",
      featured: true
    },
    {
      id: 2,
      title: "AI Voice Receptionist Agent",
      description: "• Built an end-to-end real-time AI voice agent for clinic reception handling inbound calls for appointment scheduling, rescheduling, and FAQ response.\n• Engineered a custom MCP server inside n8n to expose CRM workflows (checking availability, booking, updating appointments, retrieving patient info, and setting reminders) as executable tools to the VAPI agent.\n• Automated post-booking confirmations via Gmail integration in n8n, triggered immediately on successful appointment creation with patient details.",
      technologies: ["VAPI", "n8n", "GPT-4o", "Google Calendar", "Google Sheets", "Gmail API"],
      image: "/voice_receptionist.jpg",
      fallbackGradient: "from-pink-600 to-rose-800",
      liveUrl: "#",
      githubUrl: "https://github.com/Jenil2514",
      featured: false
    },
    {
      id: 3,
      title: "Contextual RAG Agent for Company Knowledge Base",
      description: "• Engineered a production-grade Contextual Retrieval-Augmented Generation (RAG) system for high-precision company FAQ lookup, implementing Anthropic-style contextual chunking.\n• Integrated Google Gemini Embeddings to represent document semantics, and configured pgvector-based vector search in PostgreSQL.\n• Designed a Redis caching layer for repeated queries to minimize latency and API cost; exposed the system via a REST API and built a Slack bot integration.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Google Gemini Embeddings", "Anthropic API", "Slack API"],
      image: "/rag_agent.jpg",
      fallbackGradient: "from-blue-600 to-cyan-800",
      liveUrl: "#",
      githubUrl: "https://github.com/Jenil2514/Tech-Assistant-v2",
      featured: true
    },
    {
      id: 4,
      title: "SkillPilot — Community Learning Platform",
      description: "• Created a community-driven resource sharing and learning platform with course checkpoints, checkpoints progress tracking, and upvote validation.\n• Integrated Make.com AI workflows to automatically verify user-submitted links and scrub low-quality URLs at ingestion time.\n• Structured university-specific semester courses and built a real-time community feed, driving engagement for 1,000+ potential users.",
      technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Make.com (AI Agent)"],
      image: "/skillpilot.png",
      fallbackGradient: "from-emerald-600 to-teal-800",
      liveUrl: "https://skill-pilot-lake.vercel.app",
      githubUrl: "https://github.com/Jenil2514/SkillPilot",
      featured: false
    },
    {
      id: 5,
      title: "EduNexus - College Management System",
      description: "• Built a unified academic portal letting students coordinate class schedules, attendance logs, registration workflows, scholarship applications, and fee receipts.\n• Led frontend design using Material UI and directed Agile sprint workflows; integrated Selenium automated regression tests to protect key user registration flows.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Material UI", "Selenium"],
      image: "/edunexus.png",
      fallbackGradient: "from-amber-500 to-orange-700",
      liveUrl: "https://edunexus-eta.vercel.app/",
      githubUrl: "https://github.com/Jenil2514/EDUNEXUS",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono">&lt;/</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            <span className="text-muted-foreground font-mono">&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-muted aspect-video shadow-lg group-hover:border-primary/30 transition-all duration-300">
                  <ProjectImage 
                    src={project.image} 
                    alt={project.title} 
                    fallbackGradient={project.fallbackGradient} 
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-glow">
                      Featured Project
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-5 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line space-y-2">
                    {project.description.split('\n').map((line, i) => (
                      <p key={i} className="pl-4 -indent-4">{line}</p>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    disabled={project.liveUrl === '#'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    disabled={project.githubUrl === '#'}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-20">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => window.open('https://github.com/Jenil2514', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
