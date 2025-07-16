import { Download, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
                Hi! I'm Vinod, a passionate web developer and digital creator.
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I love creating things that exist on the internet. My journey in web development 
                started in 2021 when I decided to share my digital concept arts online.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Instead of just creating an online portfolio, I fell in love with web development. 
                Building custom solutions taught me a lot about design, user experience, and the 
                technical aspects of bringing ideas to life.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Today, I focus on creating interesting and creative web applications. I enjoy 
                coding from scratch and bringing innovative ideas to life in the browser.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Based in India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">3+ Years Experience</span>
              </div>
            </div>

            {/* Resume Button */}
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
              size="lg"
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
                <div className="w-full h-80 bg-gradient-subtle rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">V</span>
                    </div>
                    <p className="text-muted-foreground font-mono text-sm">
                      // Professional photo
                    </p>
                  </div>
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