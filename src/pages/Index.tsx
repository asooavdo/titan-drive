import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import WhyTitanSection from "@/components/WhyTitanSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <GallerySection />
        <ProcessSection />
        <WhyTitanSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default Index;
