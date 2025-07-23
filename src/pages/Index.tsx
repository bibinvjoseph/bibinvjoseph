import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="tech">
        <TechStackSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
