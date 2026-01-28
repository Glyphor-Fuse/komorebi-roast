import { motion } from "framer-motion";

export function LiquidEther() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-20"
        style={{
          background: "radial-gradient(circle at center, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
          filter: "blur(80px)",
        }}
      />
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px' 
      }} />
    </div>
  );
}
