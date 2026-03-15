import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  "Critical Thinking",
  "Vision-Oriented Thinking",
  "Communication Skills",
  "Self-Reflection",
  "Adaptability",
  "Active Learner",
  "Data Science",
  "Computer Science",
  "Brand Communication",
  "English",
  "Nepali"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">Core <span className="text-primary italic">Competencies</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 rounded-3xl border-primary/20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none" />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10">
            {skills.map((skill, index) => {
              const isPink = index % 2 === 0;
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "px-6 py-3 rounded-full font-sans text-sm md:text-base font-semibold tracking-wider uppercase transition-all duration-300 cursor-default",
                    isPink 
                      ? "bg-primary text-white shadow-[0_0_15px_rgba(255,45,120,0.3)] hover:shadow-[0_0_25px_rgba(255,45,120,0.6)]" 
                      : "bg-transparent text-accent border border-accent hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  )}
                >
                  {skill}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
