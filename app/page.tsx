import Navbar from "@/components/Navbar";
import HeroSection from "../components/HeroSection";
import TechStackSection from "@/components/TechStackSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
