export function Footer() {
  return (
    <footer className="px-4 md:px-12 py-24 border-t border-primary/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-primary" />
            <span className="font-ritual text-xs">ZEN_CYBER</span>
          </div>
          <p className="text-muted text-xs leading-loose max-w-xs">
            A research collective dedicated to the pursuit of digital enlightenment 
            through ritualized engineering and cybernetic aesthetics.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-ritual text-[10px] text-muted mb-4">NETWORKS</h4>
          {['Ethereal', 'Signal', 'Matrix', 'Nexus'].map(link => (
            <a key={link} href="#" className="text-xs hover:text-accent transition-colors">{link}</a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-ritual text-[10px] text-muted mb-4">ARCHIVE</h4>
          {['Whitepaper', 'Manifesto', 'Specs', 'Logs'].map(link => (
            <a key={link} href="#" className="text-xs hover:text-accent transition-colors">{link}</a>
          ))}
        </div>
      </div>

      <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-[10px] text-muted uppercase tracking-widest">© 2024 ZEN_CYBER RITUAL. ALL CIRCUITS RESERVED.</span>
        <div className="flex gap-12 text-[10px] text-muted uppercase tracking-widest">
          <a href="#">Privacy Protocol</a>
          <a href="#">Security Nodes</a>
        </div>
      </div>
    </footer>
  );
}
