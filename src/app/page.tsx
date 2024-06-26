import AboutSection from "@/components/Sections/AboutSection";
import ContactSection from "@/components/Sections/ContactSection";
import HomeSection from "@/components/Sections/HomeSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ResumeSection from "@/components/Sections/ResumeSection";
import SkillsSection from "@/components/Sections/SkillsSection";

export default function Home() {
  return (
    <main className="no-scrollbar h-screen overflow-y-scroll scroll-smooth">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
