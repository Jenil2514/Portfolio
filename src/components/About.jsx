import { Download, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from '../images/Jenil.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
                Hi! I'm Jenil, a full-stack developer passionate about building real-world impactful products.
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing my B.Tech in Information and Communication Technology at Dhirubhai Ambani Institute.
                My journey into tech started with a curiosity to create smart, scalable, and useful platforms for students and professionals alike.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Over time, I've built multiple full-stack web applications using technologies like React.js, Node.js, Express.js,
                PostgreSQL, and MongoDB. From developing AI-integrated platforms like <strong>SkillPilot</strong> to designing scalable
                college systems like <strong>EduNexus</strong>, I enjoy solving complex problems through clean and efficient code.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Beyond code, I value collaboration, design thinking, and continuous learning. Whether it’s coordinating tech events
                or leading development sprints, I bring creativity, energy, and responsibility to everything I do.
              </p>
            </div>


            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Based in India</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">3+ Years Experience</span>
              </div> */}
            </div>

            {/* Resume Button */}
            <Button
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              size="lg"
              onClick={() => window.open('https://drive.google.com/file/d/1nOcCNECDnWeH-JY9WS5vYo7SHodJkkKv/view?usp=sharing', '_blank')}
              // href="https://drive.google.com/file/d/1F4DzWEzd1DELufuyD8zVU2DuJa_xzSAe/view?usp=sharing"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
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
