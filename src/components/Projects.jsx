import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import skillpilot from '../images/SkillPilot.png';
import dbms from '../images/DBMS.png';
import flixify from '../images/Flixify.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SkillPilot | Community Driven Learning platform",
      description: "• A platform where students <strong >learn, discover and share top free resources </strong>\n•<strong> Structured learning </strong>with course <strong>checkpoints and progress tracking</strong>\n• Community-driven content with <strong>upvotes and comments</strong>\n• Discover content from <strong>YouTube, GFG, and other</strong> learning platforms \n• <strong>Integrated AI agent to validate user-submitted links</strong>, implemented <strong>university-specific course</strong> and a student <strong>community feed </strong>for student collaboration.",
      technologies: ["React", "Node.js", "MongoDB","Tailwind CSS","Make.com (Ai agent)"],
      image: skillpilot,
      liveUrl: "https://skill-pilot-lake.vercel.app",
      githubUrl: "https://github.com/Jenil2514/SkillPilot",
      featured: false
    },
    {
      id: 2,
      title: "InvestPro | Stock Trading Database System",
      description: "• Led a team of 5 to design a Groww/Angel One-inspired relational database with trading modules \n• implemented <strong>25+</strong> complex SQL queries for advanced analytics like P&L, IPO filters, and trade window.",
      technologies: ["PostgreSQL"],
      image: dbms,
      liveUrl: "#",
      githubUrl: "https://github.com/Jenil2514/InvestPro",
      featured: false
    },
    {
      id: 3,
      title: "Flixify | Entertainment App",
      description: "A <strong>Figma</strong> Working <strong>prototype</strong> of Entertainment App with features like:\n• <strong>Mood Watch</strong>\n• An <strong>interactive movie</strong> where the viewer chooses how the story unfolds.\n• <strong>AI generated Recape</strong>\n• <strong>Short-Series</strong>",
      technologies: ["Figma"],
      image: flixify,
      liveUrl: "https://www.figma.com/proto/KgEVuwBkTFKNAIYkM0lM0s/Prototype?node-id=0-1&t=ZmUyY5xU1qdv8pUr-1",
      githubUrl: "https://github.com/Jenil2514/FlixiFy_Entertainment_APP",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-muted">
                  <div className="aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div 
                    className="text-muted-foreground leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
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
        <div className="text-center mt-16">
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