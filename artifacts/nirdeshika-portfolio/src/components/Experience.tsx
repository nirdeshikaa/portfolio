import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Brand Ambassador",
    company: "Camel Cigarette",
    description: "Approached and engaged potential customers to promote product trials and increase brand awareness. Communicated confidently, handled objections, and represented the brand professionally in high-traffic environments.",
    date: "Recent"
  },
  {
    role: "Freelance Model",
    company: "Various Brands (incl. Nabil Bank)",
    description: "Collaborated on promotional and marketing campaigns, maintaining a professional image and delivering strong on-camera presence. Adapted to different brand aesthetics while meeting strict production deadlines.",
    date: "Ongoing"
  },
  {
    role: "Social Media & Brand Support",
    company: "Freelance",
    description: "Assisted with content coordination and brand communication, contributing to audience engagement and campaign visibility across digital platforms.",
    date: "2023 - Present"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-display text-white tracking-widest mb-2">EXPERIENCE</h2>
          <p className="text-xl text-primary font-serif italic">Professional Journey ✦</p>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Glowing Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-primary/30 shadow-[0_0_10px_var(--color-primary)]"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start md:items-center",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-37px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_15px_var(--color-primary)]">
                    <div className="absolute inset-[3px] rounded-full bg-accent animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className={cn(
                    "w-full md:w-[calc(50%-3rem)] glass-card p-8 rounded-2xl border-l-4 border-l-primary group hover:-translate-y-2",
                    isEven ? "md:border-l-0 md:border-r-4 md:border-r-accent" : ""
                  )}>
                    <span className="text-sm font-sans font-bold text-secondary tracking-widest uppercase mb-2 block">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-serif text-white font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-accent font-sans font-medium mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground font-sans leading-relaxed group-hover:text-white/90 transition-colors">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
