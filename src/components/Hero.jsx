import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent/50 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Greeting */}
        <div className="flex items-center justify-center mb-8">
          <Code className="mr-2 h-6 w-6 text-primary" />
          <span className="text-lg font-mono text-muted-foreground">
            Hello(); I'm
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Vinod Jangid
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-foreground mb-6">
          I create & develop digital experiences
        </h2>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-stack developer with expertise in modern web technologies. I love building 
          beautiful, functional applications that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
          >
            Let's Connect
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            View Projects
          </Button>
        </div>

        {/* Status indicator */}
        <div className="mt-12 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;