import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LoreSection from "@/components/LoreSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import AtmosphericDivider from "@/components/AtmosphericDivider";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-ash-black">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Atmospheric Divider */}
      <AtmosphericDivider variant="gold" />

      {/* Features Section */}
      <FeaturesSection />

      {/* Lore Section */}
      <LoreSection />

      {/* Atmospheric Divider */}
      <AtmosphericDivider variant="blood" />

      {/* Gallery Section */}
      <GallerySection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
