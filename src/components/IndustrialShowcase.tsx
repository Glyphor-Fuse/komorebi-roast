import { motion } from "framer-motion";
import { Orb } from "@/components/ui/orb";

export function IndustrialShowcase() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="px-4 md:px-12 mb-16">
        <h2 className="text-4xl font-ritual max-w-2xl leading-tight">
          Modular Units for <span className="text-accent">Complex Systems</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12">
        <div className="flex-1 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="modular-unit h-[400px] flex items-end"
          >
            <div className="absolute top-0 right-0 p-8">
              <span className="text-[10px] font-mono text-muted">UNIT_ID: A-42</span>
            </div>
            <div className="relative z-10">
              <h4 className="font-ritual text-xl mb-2">Core Processor</h4>
              <p className="text-xs text-muted max-w-[200px]">Sub-atomic data processing for real-time visualization.</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Orb size="200px" opacity={0.3} />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
             <div className="aspect-square bg-primary/5 flex items-center justify-center border border-primary/10">
                <span className="text-accent font-ritual text-[8px] rotate-90">SYMMETRY_VOID</span>
             </div>
             <div className="aspect-square">
                ///IMG:minimalist industrial tech part|square|monochrome///
             </div>
          </div>
        </div>

        <div className="flex-[1.5] relative">
          <div className="w-full h-full min-h-[500px] relative overflow-hidden group">
            ///IMG:cyberpunk aesthetic server room|portrait|editorial///
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="font-ritual text-2xl">The Hive Mind</p>
              <p className="text-xs opacity-60">DISTRIBUTED SANCTUARY</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
