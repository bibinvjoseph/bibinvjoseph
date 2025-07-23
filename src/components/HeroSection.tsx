import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/devops-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-95"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-up">
          Bibin V Joseph
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-up delay-300">
          Cloud Architect | DevOps Specialist | Linux | Infrastructure
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-500">
          Specialized in designing and deploying scalable, highly available, and secure cloud solutions and leading IT operations with a focus on automation, efficiency, and team collaboration. With expertise in DevOps culture, Linux systems, and robust infrastructure, I help organizations streamline operations, enhance performance, and drive digital transformation.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up delay-700">
          <Button variant="hero" size="xl">
            <Mail className="mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline" size="xl">
            <Download className="mr-2" />
            Download CV
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center animate-fade-in-up delay-1000">
          <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow-primary">
            <Github className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow-primary">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:scale-110 hover:shadow-glow-primary">
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;