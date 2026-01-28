import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { BannerSection } from "@/components/BannerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { IndustrialShowcase } from "@/components/IndustrialShowcase";
import { TemporalGrid } from "@/components/TemporalGrid";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen selection:bg-accent selection:text-white overflow-x-hidden"
    >
      <Header />
      <BannerSection />
      
      <div className="h-[80px]" />
      
      <TemporalGrid />
      
      <div className="h-[80px]" />
      
      <FeaturesSection />
      
      <div className="h-[120px]" />
      
      <IndustrialShowcase />
      
      <div className="h-[80px]" />
      
      <Footer />
    </motion.main>
  );
}
