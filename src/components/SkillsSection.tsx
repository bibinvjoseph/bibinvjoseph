import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Settings, Container, Shield, Monitor, GitBranch } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Platforms",
      skills: ["AWS", "Microsoft Azure", "Google Cloud"],
      description: "Designing scalable, secure, and cost-effective cloud solutions"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "CI/CD & Automation",
      skills: ["GitLab CI/CD", "GitHub Actions", "Bitbucket Pipelines", "Jenkins"],
      description: "Building robust deployment pipelines and automation workflows"
    },
    {
      icon: <Container className="h-8 w-8" />,
      title: "Containerization and Orchestration",
      skills: ["Docker", "Kubernetes", "Docker Swarm", "ECS", "EKS"],
      description: "Implementing containerized solutions for scalable applications"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Infrastructure",
      skills: ["Linux Administration", "Network Protocols", "LVM", "System Security"],
      description: "Managing mission-critical infrastructure and system administration"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring & Security",
      skills: ["DataDog", "Prometheus", "Grafana", "Wazuh", "Nagios"],
      description: "Implementing comprehensive monitoring and security solutions"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance & Standards",
      skills: ["SOC Compliance", "ISO Standards", "Security Best Practices", "Audit Management"],
      description: "Ensuring compliance with industry standards and security protocols"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning cloud computing, automation, and infrastructure management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow-accent transition-all duration-500 hover:scale-105 bg-gradient-card border-border/50"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;