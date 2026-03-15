import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-card/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-serif text-white inline-block relative z-10 px-8 bg-background py-2">
            Academic <span className="text-accent italic">Background</span>
          </h2>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card p-10 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 text-white/5 group-hover:text-primary/10 transition-colors duration-500">
              <BookOpen size={180} />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-sans text-sm font-bold tracking-widest mb-6">
                2022 – 2026
              </span>
              <h3 className="text-3xl font-serif text-white mb-2">Sunway College</h3>
              <p className="text-xl text-primary font-sans font-medium mb-4">Computer and Data Science</p>
              <p className="text-muted-foreground">Currently pursuing advanced studies bridging software engineering with analytical data modeling.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="glass-card p-10 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 text-white/5 group-hover:text-accent/10 transition-colors duration-500">
              <BookOpen size={180} />
            </div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-sans text-sm font-bold tracking-widest mb-6">
                2019 – 2021
              </span>
              <h3 className="text-3xl font-serif text-white mb-2">GoldenGate Int'l College</h3>
              <p className="text-xl text-accent font-sans font-medium mb-4">Science Stream</p>
              <p className="text-muted-foreground">Built a strong foundational understanding in scientific principles and analytical thinking.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
