import { motion } from "framer-motion";
import { Menu, Zap } from "lucide-react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-[60] mix-blend-difference px-4 md:px-12 py-8 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="font-ritual text-white text-sm tracking-tighter">ZEN_CYBER</span>
      </div>

      <nav className="hidden md:flex gap-12">
        {['Protocol', 'Sanctuary', 'Data', 'Ritual'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[10px] text-white/60 uppercase tracking-widest hover:text-accent transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="text-white">
        <Menu className="w-6 h-6" />
      </button>
    </motion.header>
  );
}
