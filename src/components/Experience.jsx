import { useState, useEffect, useRef } from 'react';
import { Briefcase, MapPin, Trophy, Award, Users, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Load every 2nd frame to optimize payload while maintaining smoothness
  const FRAME_STEP = 2;
  const totalOriginalFrames = 95;
  const frameIndices = Array.from(
    { length: Math.ceil(totalOriginalFrames / FRAME_STEP) }, 
    (_, i) => Math.min(totalOriginalFrames, i * FRAME_STEP + 1)
  );

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
      organization: "IEEE I.Fest'23 (iOhunt)",
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

  // Pre-load walking frames
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    frameIndices.forEach((frameNum, index) => {
      const img = new Image();
      img.src = `/walking-frames/ezgif-frame-${String(frameNum).padStart(3, '0')}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameIndices.length) {
          setLoaded(true);
        }
      };
      loadedImages[index] = img;
    });

    setImages(loadedImages);
  }, []);

  // GSAP ScrollTrigger to scrub walking frame sequence on scroll
  useEffect(() => {
    if (!loaded || images.length === 0 || !sectionRef.current) return;

    const section = sectionRef.current;
    
    // Create GSAP ScrollTrigger Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",     // start scrubbing when the top of the section hits the top of the viewport
        end: "bottom bottom", // end scrubbing when the bottom of the section hits the bottom of the viewport
        scrub: 0.5,           // smooth scrubbing lag for high-fidelity physics-based scrolling
        invalidateOnRefresh: true,
      }
    });

    // Animate the frame indices (exactly one loop for the entire section scroll)
    const totalFramesToPlay = images.length;
    const frameObj = { frame: 0 };

    tl.to(frameObj, {
      frame: totalFramesToPlay - 1,
      ease: "none",
      onUpdate: () => {
        setFrameIndex(Math.floor(frameObj.frame) % images.length);
      }
    }, 0);

    // Cleanup animations on unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [loaded, images]);

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top fade overlay to prevent sharp cropping at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>

      {/* Full-Screen Sticky Background Character (GSAP-Scrubbed frames, Opaque and visible) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <div className="sticky top-28 left-0 w-full h-[calc(100vh-8rem)]">
          {loaded && images[frameIndex] ? (
            <img 
              src={images[frameIndex].src} 
              alt="Walking Background Character"
              className="w-full h-full object-cover object-top opacity-100"
            />
          ) : (
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-muted-foreground font-mono">&lt;/</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            <span className="text-muted-foreground font-mono">&gt;</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          


          {/* Internships Timeline List */}
          <div className="space-y-24 mb-20 relative z-20">
            {internships.map((job, index) => (
              <div 
                key={job.company} 
                className={`flex flex-col sm:flex-row relative items-stretch ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >


                {/* Spacer / Left Side for large screens (Widen the spacer to create a central gap for the character) */}
                <div className="hidden sm:block sm:w-[58%] px-8"></div>

                {/* Job Card (alternating left / right, narrower width to make gap) */}
                <div className="w-full sm:w-[42%] pl-12 sm:pl-8 sm:px-8">
                  <div className="group relative bg-card border border-border/50 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 z-20 font-sans">
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

        </div>

        {/* Achievements Section */}
        <div className="mt-32 relative z-20">
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

      {/* Bottom fade overlay to prevent sharp cropping of legs at Skills transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default Experience;
