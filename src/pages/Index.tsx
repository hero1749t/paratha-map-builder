import heroImg from "@/assets/hero-paratha.jpg";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import DhabaFooter from "@/components/DhabaFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReviewsSection />
      <ContactSection />
      <DhabaFooter />
    </div>
  );
};

export default Index;
