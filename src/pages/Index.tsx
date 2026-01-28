import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BannerSection } from "@/components/BannerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { IndustrialShowcase } from "@/components/IndustrialShowcase";
import { RitualCTA } from "@/components/RitualCTA";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Heavy Vertical Gutters Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 flex justify-between px-4 md:px-12">
        <div className="w-[1px] h-full bg-primary/5" />
        <div className="hidden md:block w-[1px] h-full bg-primary/5" />
        <div className="w-[1px] h-full bg-primary/5" />
      </div>

      <Header />
      
      <main className="relative z-10">
        <BannerSection />
        
        <div className="grid grid-cols-1 md:grid-cols-ritual gap-8 px-4 md:px-12 py-24">
          <div className="hidden md:block" /> {/* Left Gutter Spacer */}
          <FeaturesSection />
          <div className="hidden md:block" /> {/* Right Gutter Spacer */}
        </div>

        <IndustrialShowcase />
        
        <div className="px-4 md:px-12 pb-24">
           <RitualCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
