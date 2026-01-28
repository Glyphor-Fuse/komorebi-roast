import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted mb-8 italic">The path has been obscured.</p>
        <a
          href="/"
          className="px-8 py-3 bg-primary text-background uppercase tracking-widest text-sm hover:bg-accent transition-colors"
        >
          Return to Sanctuary
        </a>
      </motion.div>
    </div>
  );
}
