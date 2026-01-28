import { motion } from "framer-motion";

export function RitualCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-primary text-background p-12 md:p-24 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/4" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold font-ritual leading-none mb-8">
            BEGIN THE<br />TRANSMISSION
          </h2>
          <p className="text-muted text-sm max-w-sm">
            Our acolytes are ready to integrate your vision into the network. 
            Connect now to experience the next evolution of digital ritual.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border-b border-background/20 py-4 flex justify-between items-center group cursor-pointer">
            <span className="font-ritual text-sm">REQUEST ACCESS</span>
            <div className="w-6 h-[1px] bg-background group-hover:w-12 transition-all" />
          </div>
          <div className="border-b border-background/20 py-4 flex justify-between items-center group cursor-pointer">
            <span className="font-ritual text-sm">CONSULT THE ORACLE</span>
            <div className="w-6 h-[1px] bg-background group-hover:w-12 transition-all" />
          </div>
          <div className="border-b border-background/20 py-4 flex justify-between items-center group cursor-pointer">
            <span className="font-ritual text-sm">READ LOGS</span>
            <div className="w-6 h-[1px] bg-background group-hover:w-12 transition-all" />
          </div>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-background/10 flex justify-between items-center text-[8px] font-mono tracking-widest text-muted">
        <span>ESTABLISHING CONNECTION...</span>
        <span>77.01.22.44</span>
        <span>PROTOCOL: SECURE</span>
      </div>
    </motion.section>
  );
}
