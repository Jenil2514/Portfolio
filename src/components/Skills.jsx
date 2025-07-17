import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiPython, 
  SiGit, 
  SiCplusplus, 
  SiMysql 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-4xl text-yellow-400" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "React",
      icon: <SiReact className="text-4xl text-cyan-400" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-4xl text-green-500" />,
      color: "from-green-500 to-green-600"
    },
      
    
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-4xl text-orange-500" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-4xl text-blue-500" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Python",
      icon: <SiPython className="text-4xl text-yellow-500" />,
      color: "from-blue-500 to-yellow-500"
    },
    {
      name: "Git",
      icon: <SiGit className="text-4xl text-orange-600" />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "C++",
      icon: <SiCplusplus className="text-4xl text-blue-600" />,
      color: "from-blue-600 to-purple-600"
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-4xl text-orange-500" />,
      color: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono">&lt;/</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            <span className="text-muted-foreground font-mono">&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Tech Stack Title */}
        <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
          Tech Stack
        </h3>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h4>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-semibold mb-6 text-foreground">
            Other Technologies & Tools
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "MongoDB", "PostgreSQL","Figma", "Tailwind CSS", 
              "Next.js", "Express.js","Jest","Bootstrap", "Material-UI"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;