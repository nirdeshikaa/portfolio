import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Download } from "lucide-react";

const roles = [
  "Dev Girl",
  "Data Science Student",
  "Brand Ambassador",
  "Freelance Model",
  "Quiz Champion"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={`${import.meta.env.BASE_URL}images/mesh-bg.png`}
          alt=""
          className="w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent opacity-30 z-0"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✦
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-accent"></span>
            <h2 className="font-serif italic text-2xl md:text-3xl text-accent font-light">
              Hello, I'm
            </h2>
          </motion.div>

          <h1 className="font-display text-7xl md:text-8xl lg:text-[9rem] leading-[0.8] mb-2 text-glow flex flex-col">
            <span className="text-white">NIRDESHIKA</span>
            <span className="text-stroke-primary">PANDEY</span>
          </h1>

          <div className="h-12 mt-6 mb-10 overflow-hidden relative w-full flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-sans text-secondary absolute uppercase tracking-widest font-medium"
              >
                {roles[currentRole]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <a href="#experience" className="shimmer-hover group relative px-8 py-4 bg-primary text-white font-sans font-bold tracking-wider rounded-none border border-primary overflow-hidden flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,45,120,0.5)] transition-all">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`${import.meta.env.BASE_URL}cv.pdf`} 
              download="Nirdeshika_Pandey_CV.pdf"
              className="group px-8 py-4 bg-transparent text-accent font-sans font-bold tracking-wider rounded-none border border-accent flex items-center justify-center gap-3 hover:bg-accent hover:text-background transition-all"
            >
              Download CV
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Right Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            {/* Spinning animated border */}
            <div className="absolute inset-[-10px] rounded-full bg-[conic-gradient(from_0deg,transparent,hsl(var(--accent)),transparent)] animate-spin-slow opacity-50 clip-hexagon"></div>

            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>

            {/* Image container */}
            <div className="relative w-full h-full clip-hexagon bg-muted overflow-hidden border-4 border-white/10 flex items-center justify-center p-1">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-portrait.png`}
                alt="Nirdeshika Pandey"
                className="w-full h-full object-cover clip-hexagon hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card border border-primary/30 p-4 rounded-full shadow-[0_0_20px_var(--color-primary)] animate-float">
              <Sparkles className="text-primary w-8 h-8" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
