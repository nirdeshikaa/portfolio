import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white text-glow mb-4">
            Let's Connect <span className="text-accent">✦</span>
          </h2>
          <div className="w-32 h-[1px] bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-serif text-white mb-8">Get in touch for collaborations or inquiries.</h3>
            
            <div className="group flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-muted border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_var(--color-primary)] transition-all duration-300">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-sans text-muted-foreground uppercase tracking-wider mb-1">Call Me</p>
                <p className="text-xl font-sans text-white">+977 9845761036</p>
              </div>
            </div>

            <div className="group flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-muted border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:shadow-[0_0_20px_var(--color-accent)] transition-all duration-300">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-sans text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:nirdeshikapandey572@gmail.com" className="text-xl font-sans text-white hover:text-accent transition-colors">
                  nirdeshikapandey572@gmail.com
                </a>
              </div>
            </div>

            <div className="group flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-muted border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-background group-hover:border-secondary group-hover:shadow-[0_0_20px_var(--color-secondary)] transition-all duration-300">
                <MapPin className="text-white group-hover:text-background w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-sans text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                <p className="text-xl font-sans text-white">Goldhunga, Kathmandu</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-2xl space-y-6">
              <div>
                <label className="block text-sm font-sans font-medium text-white/70 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-input border border-border rounded-xl px-4 py-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-white/70 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-input border border-border rounded-xl px-4 py-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-sans font-medium text-white/70 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-input border border-border rounded-xl px-4 py-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full shimmer-hover bg-primary text-white font-sans font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,45,120,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
