import { motion } from "framer-motion";
import { LiquidEther } from "@/components/ui/LiquidEther";
import { Orb } from "@/components/ui/orb";

export function BannerSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden border-b border-primary/5">
      <LiquidEther />
      
      <div className="absolute inset-0 z-0">
        <Orb className="top-1/4 left-1/4" size="400px" opacity={0.15} />
        <Orb className="bottom-1/4 right-1/4" size="600px" opacity={0.1} />
      </div>

      <div className="relative z-10 px-4 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-20 bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Initialize Sequence // 001</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold leading-none tracking-tighter text-primary">
            DIGITAL<br />
            <span className="text-accent italic">RITUAL</span>
          </h1>

          <div className="max-w-md mt-8">
            <p className="text-muted-foreground leading-relaxed">
              We weave high-fidelity cybernetic interfaces with the stillness of zen philosophy. 
              Engineering tranquility into every millisecond of interaction.
            </p>
          </div>

          <div className="mt-12 flex gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-background font-ritual text-xs"
            >
              Enter Sanctum
            </motion.button>
            <button className="flex items-center gap-4 text-xs font-ritual hover:text-accent transition-colors">
              <span>VIEW MANIFESTO</span>
              <div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center">
                <div className="w-1 h-1 bg-primary rounded-full" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex flex-col gap-2 items-end">
          <span className="text-[8px] text-muted tracking-widest font-mono">LATENCY // 1.2MS</span>
          <span className="text-[8px] text-muted tracking-widest font-mono">ENCRYPTION // AES-256</span>
          <span className="text-[8px] text-muted tracking-widest font-mono">STATUS // HARMONIOUS</span>
        </div>
      </div>
    </section>
  );
}
