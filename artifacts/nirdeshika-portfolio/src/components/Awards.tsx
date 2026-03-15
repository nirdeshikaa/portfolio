import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const awards = [
  {
    title: "Miss Confident Award",
    event: "VOUX II (Finale)",
    category: "Modeling & Pageantry"
  },
  {
    title: "Champion",
    event: "Inter-College Basketball Tournament",
    category: "Sports & Athletics"
  },
  {
    title: "Winner",
    event: "16th Rotaract Running Shield Quiz",
    category: "Academics",
    org: "Rotaract Club Kathmandu"
  }
];

export function Awards() {
  return (
    <section id="awards" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Honors & <span className="text-primary italic">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A track record of excellence spanning academics, athletics, and public presentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 text-center relative group overflow-hidden"
            >
              {/* Spotlight effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/0 group-hover:from-primary/10 transition-all duration-500"></div>
              
              <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center border border-accent/30 mb-6 group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 relative z-10">
                <Trophy className="text-accent w-10 h-10" />
              </div>
              
              <div className="relative z-10">
                <span className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-3 block">
                  {award.category}
                </span>
                <h3 className="text-2xl font-serif text-white mb-2">{award.title}</h3>
                <p className="text-muted-foreground font-sans">{award.event}</p>
                {award.org && (
                  <p className="text-sm text-accent/80 mt-2">{award.org}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
