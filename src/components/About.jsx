import { useState } from 'react';
import { Download, MapPin, Calendar, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from '../images/Jenil.jpg'

const About = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const resumes = [
    {
      name: "General Resume",
      description: "Full-Stack & Systems (PDF)",
      url: "/Jenil_Goswami_General_Resume.pdf"
    },
    {
      name: "Software Engineering Resume",
      description: "Core Software Dev focus (DOCX)",
      url: "/Jenil_Goswami_Software_Engineer_Resume.docx"
    },
    {
      name: "AI & Automation Resume",
      description: "Agents, RAG & Workflows (DOCX)",
      url: "/Jenil_Goswami_Automation_Resume.docx"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono">&lt;/</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">About</span>
            <span className="text-muted-foreground font-mono">&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Hi! I'm Jenil, a software engineer passionate about building high-impact full-stack applications and AI-powered solutions.
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I am a B.Tech Graduate in Information and Communication Technology from <strong>Dhirubhai Ambani University</strong> (DA-IICT), Gandhinagar. My journey in technology is driven by a deep interest in system design, backend infrastructure, and agentic AI automation.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I have hands-on production experience building robust web applications and automated workflows. As a Full-Stack Intern at <strong>Axy Inc.</strong>, I designed bulk-data validation pipelines and zero-downtime content sync layers. Additionally, my time at <strong>Datahay Infotech</strong> refined my capabilities in user-centered design and end-to-end interface prototyping.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Whether orchestrating multi-agent systems like <strong>AutoBiz</strong>, optimizing vector retrieval systems, or leading cross-functional teams at technical fests, I bring clean code, structural engineering principles, and a user-first mindset to every codebase I touch.
              </p>
            </div>


            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 pb-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Anand, Gujarat, India</span>
              </div>
            </div>

            {/* Resume Button dropdown */}
            <div className="relative inline-block text-left">
              <Button
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group flex items-center gap-2"
                size="lg"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Download className="h-4 w-4 group-hover:animate-bounce" />
                <span>Download Resume</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>

              {isDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-30" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-64 origin-top-left rounded-xl bg-card border border-border/80 shadow-2xl z-40 focus:outline-none overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                      {resumes.map((res) => (
                        <button
                          key={res.name}
                          onClick={() => {
                            window.open(res.url, '_blank');
                            setIsDropdownOpen(false);
                          }}
                          className="flex items-center w-full px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors duration-150 border-b border-border/20 last:border-b-0"
                        >
                          <div className="text-left">
                            <p className="font-semibold text-foreground">{res.name}</p>
                            <p className="text-xs text-muted-foreground/80 mt-0.5">{res.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-muted rounded-2xl p-8 border border-border/50">
                <div className="w-full h-85 bg-gradient-subtle rounded-xl overflow-hidden">
                  <img 
                    src={profile} 
                    alt="Jenil - Full Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
