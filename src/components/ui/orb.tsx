import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbProps {
  size?: string;
  className?: string;
  opacity?: number;
}

export function Orb({ size = "300px", className, opacity = 0.2 }: OrbProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [opacity, opacity * 1.5, opacity],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn("absolute rounded-full pointer-events-none blur-[100px]", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)`,
      }}
    />
  );
}
