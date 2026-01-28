import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center text-primary px-4">
        <span className="font-mono text-sm uppercase tracking-[0.3em] mb-4">Error // 404</span>
        <h1 className="text-7xl font-serif italic mb-8">Void Detected.</h1>
        <p className="font-mono text-muted max-w-md text-center">
          The coordinate {location.pathname} does not exist in this temporal plane.
        </p>
        <a 
          href="/" 
          className="mt-12 font-mono border border-primary px-8 py-4 hover:bg-primary hover:text-background transition-all"
        >
          RETURN_TO_STILLNESS
        </a>
      </div>
    </div>
  );
}
