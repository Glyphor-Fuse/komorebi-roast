import { motion } from "framer-motion";
import { Shield, Zap, Wind, HardHat } from "lucide-react";

const features = [
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Ma (Negative Space)",
    desc: "Intentional void in the digital landscape, allowing content to breathe through structural emptiness."
  },
  {
    icon: <HardHat className="w-6 h-6" />,
    title: "Brutalist Steel",
    desc: "Rigid grid systems anchored by 12-column foundations and industrial fixed-width metadata."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Neon Pulse",
    desc: "Sharp, high-chroma accents that cut through monochromatic silence like Shinjuku signage."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Temporal Drift",
    desc: "Motion that respects the weight of time, utilizing staggered children and fluid transitions."
  }
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-8">
      <div className="asymmetric-grid border-t border-primary pt-24">
        <div className="col-span-12 md:col-span-4 mb-16 md:mb-0">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Core // Principles</span>
          <h2 className="text-5xl font-serif mt-4">Structural <br />Harmony</h2>
        </div>
        
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-6 p-4 bg-primary text-secondary inline-block group-hover:bg-accent transition-colors duration-500">
                {f.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 italic">{f.title}</h3>
              <p className="font-mono text-sm text-muted leading-relaxed uppercase tracking-tight">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
