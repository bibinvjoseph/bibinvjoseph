import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to help organizations optimize their infrastructure and development processes.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">your.email@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Available Remote/Hybrid</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <p className="font-medium mb-4">Connect on Social</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="hover:shadow-glow-primary">
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:shadow-glow-primary">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="hover:shadow-glow-primary">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your name" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="Project discussion" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project requirements..." 
                    rows={6}
                    className="bg-background/50"
                  />
                </div>
                
                <Button variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;