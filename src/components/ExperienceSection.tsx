import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Trophy, Target } from "lucide-react";

const ExperienceSection = () => {
  const highlights = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "10+ Years Experience",
      description: "Extensive experience in IT industry specializing in DevOps and cloud technologies"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Leadership",
      description: "Proven track record in managing teams and implementing DevOps culture"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Enterprise Solutions",
      description: "Delivered end-to-end IT solutions for organizational requirements"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Client Focused",
      description: "Excellent communication skills with focus on customer satisfaction"
    }
  ];

  const coreCompetencies = [
    "Infrastructure Automation",
    "Cloud Migration",
    "Disaster Recovery",
    "Source Code Management",
    "System Monitoring",
    "Security Implementation",
    "Performance Optimization",
    "Cost Optimization",
    "Scalability Planning",
    "Multi-tier Applications",
    "Agile Development",
    "Problem Solving"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering excellence in DevOps, cloud computing, and infrastructure management
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center group hover:shadow-glow-accent transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Competencies */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {coreCompetencies.map((competency, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {competency}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Key Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary text-lg">Cloud & Infrastructure</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Designed and deployed scalable cloud solutions across multiple platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Successfully migrated complex multi-tier applications to cloud
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Implemented disaster recovery solutions ensuring business continuity
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-primary text-lg">Automation & DevOps</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Implemented DevOps culture and best practices across organizations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Automated mission-critical infrastructure monitoring and troubleshooting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Configured robust CI/CD pipelines improving deployment efficiency
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;