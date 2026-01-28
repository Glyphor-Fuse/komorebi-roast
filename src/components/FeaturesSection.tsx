import { motion } from "framer-motion";
import { Shield, Wind, Cpu, Eye } from "lucide-react";

const features = [
  {
    icon: Wind,
    title: "Silent Ops",
    description: "Minimalist architectures designed for zero cognitive load and maximum flow state."
  },
  {
    icon: Shield,
    title: "Fortified Calm",
    description: "Immutable security protocols wrapped in an interface of absolute serenity."
  },
  {
    icon: Cpu,
    title: "Neural Engine",
    description: "Predictive algorithms that anticipate intent before a single click is made."
  },
  {
    icon: Eye,
    title: "Pure Optics",
    description: "Pixel-perfect visual harmony adhering to the golden ratio of cybernetics."
  }
];

export function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/5 border border-primary/5">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-background p-12 group hover:bg-secondary transition-colors duration-500"
        >
          <f.icon className="w-8 h-8 text-accent mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-ritual mb-4 group-hover:text-background transition-colors">{f.title}</h3>
          <p className="text-muted text-sm leading-relaxed group-hover:text-background/60 transition-colors">
            {f.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
