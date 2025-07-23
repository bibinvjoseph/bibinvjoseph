import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStackSection = () => {
  const techStack = {
    "Cloud Platforms": {
      technologies: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "Digital Ocean"],
      color: "bg-blue-500/10 text-blue-400 border-blue-400/30"
    },
    "Containerization": {
      technologies: ["Docker", "Kubernetes", "Container Orchestration", "Microservices Architecture"],
      color: "bg-cyan-500/10 text-cyan-400 border-cyan-400/30"
    },
    "CI/CD Tools": {
      technologies: ["Jenkins", "GitLab CI/CD", "GitHub Actions", "Bitbucket Pipelines"],
      color: "bg-green-500/10 text-green-400 border-green-400/30"
    },
    "Monitoring & Observability": {
      technologies: ["DataDog", "Prometheus", "Grafana", "New Relic", "Zabbix", "Nagios"],
      color: "bg-purple-500/10 text-purple-400 border-purple-400/30"
    },
    "Security & Compliance": {
      technologies: ["Wazuh", "SOC Compliance", "ISO Standards", "Security Auditing"],
      color: "bg-red-500/10 text-red-400 border-red-400/30"
    },
    "Operating Systems": {
      technologies: ["Linux Administration", "Ubuntu", "CentOS", "Red Hat", "System Security"],
      color: "bg-orange-500/10 text-orange-400 border-orange-400/30"
    },
    "Infrastructure": {
      technologies: ["Logical Volume Manager (LVM)", "Network Protocols", "DNS/DHCP", "SMTP/NTP"],
      color: "bg-teal-500/10 text-teal-400 border-teal-400/30"
    },
    "Version Control": {
      technologies: ["Git", "Source Code Management", "Branching Strategies", "Code Review"],
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-400/30"
    }
  };

  const networkProtocols = ["TCP/IP", "UDP", "DNS", "DHCP", "SMTP", "NTP", "HTTP/HTTPS", "SSH"];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across modern DevOps tools and technologies
          </p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.entries(techStack).map(([category, { technologies, color }]) => (
            <Card key={category} className="group hover:shadow-glow-accent transition-all duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      className={`${color} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Network Protocols */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Network Protocols & Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {networkProtocols.map((protocol, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  {protocol}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center group hover:shadow-glow-accent transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary">Cloud Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Scalable, highly available, and cost-effective cloud architectures
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-glow-accent transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary">Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Infrastructure automation and deployment pipeline optimization
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-glow-accent transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary">Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Compliance standards implementation and security best practices
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;