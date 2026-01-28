import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-6 flex justify-between items-center"
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-white" />
        <span className="font-mono text-sm tracking-tighter text-white">TZ_IND_01</span>
      </div>
      
      <nav className="hidden md:flex gap-12 text-white font-mono text-xs uppercase tracking-widest">
        <a href="#" className="hover:text-accent transition-colors">Temporal</a>
        <a href="#" className="hover:text-accent transition-colors">Zen</a>
        <a href="#" className="hover:text-accent transition-colors">Industrial</a>
        <a href="#" className="hover:text-accent transition-colors">Contact</a>
      </nav>
      
      <div className="md:hidden w-6 h-1 bg-white" />
    </motion.header>
  );
}
