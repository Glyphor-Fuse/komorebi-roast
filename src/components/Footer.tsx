import { motion } from "framer-motion";
import { Instagram, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-primary pt-32 pb-12 border-t border-primary/10">
      <div className="container mx-auto px-8">
        <div className="asymmetric-grid items-start mb-24">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-7xl font-serif italic mb-8">Reach Out.</h2>
            <div className="flex gap-8">
              <a href="#" className="font-mono text-xs uppercase tracking-widest hover:text-accent border-b border-transparent hover:border-accent pb-1 transition-all">Instagram</a>
              <a href="#" className="font-mono text-xs uppercase tracking-widest hover:text-accent border-b border-transparent hover:border-accent pb-1 transition-all">Twitter</a>
              <a href="#" className="font-mono text-xs uppercase tracking-widest hover:text-accent border-b border-transparent hover:border-accent pb-1 transition-all">GitHub</a>
            </div>
          </div>
          
          <div className="col-span-12 md:col-start-8 md:col-span-5 mt-16 md:mt-0">
            <p className="font-mono text-xs text-muted mb-8 tracking-tighter uppercase leading-relaxed">
              Based in the intersection of tradition and evolution. 
              Always searching for the perfect void.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL_ADDRESS" 
                className="w-full bg-transparent border-b border-primary py-4 font-mono text-xs focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-0 bottom-4 font-mono text-xs hover:text-accent transition-colors">SUBMIT</button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-primary/10 pt-8 mt-12">
          <span className="font-mono text-[10px] text-muted">© 2024 TEMPORAL_ZEN. ALL_RIGHTS_RESERVED.</span>
          <div className="flex gap-12 mt-4 md:mt-0">
            <span className="font-mono text-[10px] text-muted tracking-widest">TS_55.02</span>
            <span className="font-mono text-[10px] text-muted tracking-widest">LOC: 35.6764 N</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
