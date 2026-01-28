import { motion } from "framer-motion";
import { LiquidEther } from "@/components/ui/LiquidEther";

export function BannerSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <LiquidEther />
      </div>
      
      <div className="container mx-auto relative z-10 asymmetric-grid">
        <div className="col-span-12 md:col-start-2 md:col-span-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="font-mono text-xs text-muted uppercase tracking-[0.4em] block mb-6">
              V01 // THE_SILENT_PULSE
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.85] text-primary">
              Temporal <br />
              <span className="italic pl-12 md:pl-32">Zen.</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 md:mt-0 md:absolute md:right-0 md:top-1/2 md:w-1/3 text-right"
          >
            <p className="font-mono text-sm text-muted leading-relaxed uppercase">
              Merging the stillness of a Kyoto morning with the frantic neon pulse of Shinjuku. 
              An exercise in digital restraint.
            </p>
            <div className="mt-8 h-[1px] w-32 bg-accent inline-block" />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[1em] text-muted animate-bounce">
        SCROLL_TO_DESCEND
      </div>
    </section>
  );
}
