export function Footer() {
  return (
    <footer className="py-10 bg-background relative border-t border-white/5">
      {/* Top Gold Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-muted-foreground font-sans text-sm tracking-wider">
          © {new Date().getFullYear()} Nirdeshika Pandey ✦ Built with <span className="text-primary animate-pulse inline-block">💖</span>
        </p>
      </div>
    </footer>
  );
}
