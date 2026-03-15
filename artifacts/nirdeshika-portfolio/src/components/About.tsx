import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
        >
          {/* Editorial Quote Block */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-2 bg-primary animate-pulse-glow" />
            <h2 className="font-serif text-5xl md:text-7xl leading-tight text-white mb-6">
              Driven by <br/>
              <span className="text-accent italic font-light">Excellence.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-sans font-light">
              Bridging the gap between analytical data science and compelling brand communication.
            </p>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <p className="text-lg md:text-xl text-foreground/90 font-sans leading-relaxed">
                <span className="text-4xl text-primary font-serif float-left mr-2 leading-none mt-1">I</span>
                am Nirdeshika, 21 — a highly driven and disciplined individual dedicated to excellence and long-term impact. I approach every opportunity with focus, professionalism, and a results-oriented mindset.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed mt-4">
                Whether analyzing complex datasets or representing luxury brands on camera, I remain constantly open to learning and expanding my skill set.
              </p>
            </div>

            {/* Stat Chips */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3 bg-muted border border-white/10 px-5 py-3 rounded-full text-sm font-medium tracking-wide">
                <MapPin size={18} className="text-primary" />
                Kathmandu, Nepal
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3 bg-muted border border-white/10 px-5 py-3 rounded-full text-sm font-medium tracking-wide">
                <GraduationCap size={18} className="text-accent" />
                Sunway College
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3 bg-muted border border-white/10 px-5 py-3 rounded-full text-sm font-medium tracking-wide">
                <Briefcase size={18} className="text-secondary" />
                Open to Opportunities
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
