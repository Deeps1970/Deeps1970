import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import CertificationsSection from "@/components/CertificationsSection";
import GitHubActivitySection from "@/components/GitHubActivitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SelectedWorkSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ToolsSection />
        <CertificationsSection />
        <GitHubActivitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
