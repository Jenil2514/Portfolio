import { Briefcase, Calendar, MapPin, Award, Trophy, Users, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      role: "Full-Stack Developer Intern",
      company: "Axy Inc.",
      location: "Geneva, Switzerland (Remote)",
      period: "Dec 2025 – May 2026",
      stack: ["Next.js", "Fastify", "TypeScript", "Prisma", "PostgreSQL", "AWS (SNS, SQS, Lambda, EventBridge)", "Turborepo"],
      points: [
        "Eliminated invalid scheduling data at scale by designing a centralized validation layer in the bulk upload pipeline, reducing data integrity errors across organizer and attendee flows.",
        "Architected a real-time bidirectional sync system between organizer and attendee platforms, ensuring consistent state synchronization across both platforms.",
        "Engineered a fan-out notification pipeline using AWS SNS, SQS, Lambda, and EventBridge, processing 500+ users per batch with reliable delivery and built-in retry semantics.",
        "Executed a zero-downtime content migration of 100+ files from JSON to Markdown format, eliminating data duplication and reducing content management overhead by restructuring the content architecture."
      ]
    },
    {
      role: "UI/UX Design Intern",
      company: "Datahay Infotech LLP",
      location: "Ahmedabad, Gujarat",
      period: "May 2025 – Jul 2025",
      stack: ["Figma", "Canva", "Wireframing", "Prototyping", "User Research"],
      points: [
        "Designed a complete end-to-end entertainment app prototype from scratch — conducting competitive analysis, building user personas, journey maps, and establishing full brand identity (logo, typography, mood board).",
        "Delivered a high-fidelity Figma prototype with 45+ screens and 22+ reusable components, covering low/high-fidelity wireframes, user flowcharts, and interactive prototyping."
      ]
    }
  ];

  const achievements = [
    {
      title: "Event Coordinator & Team Lead",
      organization: "IEEE I.Fest'23 (i.Ohunt)",
      description: "Led a cross-functional team of 6 to organize a logic-based technical quiz at Gujarat's No.1 tech fest, drawing 300+ participants from multiple institutions.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Advanced Milestone",
      organization: "Google Cloud Arcade Program (2025)",
      description: "Completed cloud infrastructure projects and labs covering core GCP services including compute, storage, networking, and Kubernetes engines.",
      icon: <Trophy className="h-6 w-6 text-accent" />
    },
    {
      title: "Excellent Student Award",
      organization: "Secondary Academic Level",
      description: "Recognized for outstanding academic and extracurricular performance, demonstrating diligence, leadership, and analytical capability.",
      icon: <Award className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono">&lt;/</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            <span className="text-muted-foreground font-mono">&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Internships Timeline */}
        <div className="space-y-12 mb-20 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-[2px] before:bg-border/60">
          {internships.map((job, index) => (
            <div 
              key={job.company} 
              className={`flex flex-col sm:flex-row relative items-stretch ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-[11px] top-6 w-6 h-6 rounded-full border-4 border-background bg-primary z-20 flex items-center justify-center shadow-glow">
                <Briefcase className="h-3 w-3 text-white" />
              </div>

              {/* Spacer / Left Side for large screens */}
              <div className="hidden sm:block w-1/2 px-8"></div>

              {/* Job Card (Right/Left side) */}
              <div className="w-full sm:w-1/2 pl-12 sm:pl-8 sm:px-8">
                <div className="group relative bg-card border border-border/50 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                  
                  {/* Meta details */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold border border-primary/20">
                      {job.period}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground font-mono">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      {job.location}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {job.role}
                  </h3>
                  <h4 className="text-md font-semibold text-muted-foreground mb-4">
                    {job.company}
                  </h4>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {job.points.map((pt, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 mr-3 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {job.stack.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-0.5 bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary-foreground/10 rounded text-xs transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">
            Achievements & Leadership
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                
                <p className="text-sm font-mono text-primary/80 mb-3">
                  {item.organization}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
