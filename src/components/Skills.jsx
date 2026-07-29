import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench 
} from 'lucide-react';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiPython, 
  SiGit, 
  SiCplusplus, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiFigma, 
  SiTailwindcss, 
  SiAmazonwebservices, 
  SiFastapi 
} from 'react-icons/si';

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Python", icon: <SiPython className="text-yellow-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "SQL", icon: <Database className="text-orange-500 h-4 w-4" /> }
      ]
    },
    {
      title: "Frontend & UI",
      icon: <Layout className="h-6 w-6 text-accent" />,
      skills: [
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiReact className="text-foreground" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Material UI", icon: <Layout className="text-blue-500 h-4 w-4" /> },
        { name: "Canva", icon: null }
      ]
    },
    {
      title: "Backend & Databases",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiNodedotjs className="text-foreground" /> },
        { name: "Fastify", icon: <Server className="text-foreground h-4 w-4" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-emerald-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "Prisma ORM", icon: null }
      ]
    },
    {
      title: "AI & Intelligent Automation",
      icon: <BrainCircuit className="h-6 w-6 text-accent" />,
      skills: [
        { name: "LangGraph", icon: null },
        { name: "n8n Workflows", icon: null },
        { name: "VAPI (Voice AI)", icon: null },
        { name: "Groq LPU", icon: null },
        { name: "Gemini AI", icon: null },
        { name: "Deepgram Voice", icon: null },
        { name: "Make.com", icon: null },
        { name: "RAG Pipelines", icon: null },
        { name: "pgvector Search", icon: null },
        { name: "Contextual Chunking", icon: null },
        { name: "LLM Integration", icon: null }
      ]
    },
    {
      title: "Tools & Developer Workflows",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git & GitHub", icon: <SiGit className="text-orange-600" /> },
        { name: "AWS (SNS, SQS, Lambda)", icon: <SiAmazonwebservices className="text-amber-500" /> },
        { name: "Postman", icon: null },
        { name: "Turborepo", icon: null },
        { name: "Agile / Scrum", icon: null },
        { name: "Selenium Automation", icon: null },
        { name: "Figma UI/UX", icon: <SiFigma className="text-pink-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono">&lt;/</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            <span className="text-muted-foreground font-mono">&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={cat.title} 
              className={`group relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-glow ${
                idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/60 hover:bg-primary/10 hover:text-primary rounded-lg text-sm text-muted-foreground border border-border/40 hover:border-primary/20 transition-all duration-300 font-medium hover:scale-[1.03]"
                  >
                    {skill.icon && (
                      <span className="text-base shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;