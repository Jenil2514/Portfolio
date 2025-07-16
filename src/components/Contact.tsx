import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      color: "hover:text-red-400"
    },
    {
      name: "Discord",
      icon: MessageSquare,
      url: "#",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono">&lt;/</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Contact</span>
            <span className="text-muted-foreground font-mono">&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Quote */}
        <div className="text-center mb-12">
          <blockquote className="text-xl sm:text-2xl text-muted-foreground italic mb-4">
            "Learning, Living, and Leveling Up."
          </blockquote>
          <p className="text-primary font-mono text-lg">
            GetInTouch();
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Let's work together!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full border-2 border-border hover:border-primary flex items-center justify-center transition-all duration-300 ${link.color} group`}
                  >
                    <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">
                Quick Contact
              </h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-semibold">Email:</span> your.email@example.com
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Location:</span> India
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Status:</span> 
                  <span className="text-green-500 ml-2">Available for hire</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Avatar/CTA */}
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto bg-gradient-subtle rounded-full flex items-center justify-center border-4 border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">V</span>
                  </div>
                  <p className="text-muted-foreground font-mono text-sm">
                    Ready to connect!
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-accent rounded-full animate-pulse delay-500"></div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © 2024 Vinod Jangid. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;