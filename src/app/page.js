import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ParallaxBackground from "./components/ParallaxBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] relative">
      {/* 3D Parallax Background */}
      <ParallaxBackground />

      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto mt-24">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}