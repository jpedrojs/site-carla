import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <WhatsAppCTA />
      <FooterSection />
    </div>
  );
};

export default Index;
