import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import MusicSection from "@/components/MusicSection";
import LyricsSection from "@/components/LyricsSection";
import SingAlongSection from "@/components/SingAlongSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MusicSection />
        <LyricsSection />
        <SingAlongSection />
        <ComingSoonSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
