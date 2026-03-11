import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="relative bg-primary overflow-hidden py-20 lg:py-28">
      {/* Subtle noise texture - professional finish */}
      <div className="absolute inset-0 opacity-8 mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="footerNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="3" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="hsl(220, 50%, 15%)" filter="url(#footerNoise)" />
        </svg>
      </div>

      {/* Radial gradient accent - subtle upward light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 600px 500px at center, rgba(180, 140, 0, 0.1) 0%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
          >
            Carla <span className="text-gradient-gold">Caroline</span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-gold-light/70 font-body text-base mb-10 tracking-wide"
          >
            Psicóloga · Especialista em TCC · CRP 14/08385-4
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-2 text-gold-light/50 text-sm font-body"
          >
            <span>Feito com</span>
            <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
              <Heart className="w-4 h-4 text-gold fill-gold" />
            </motion.div>
            <span>para cuidar de você</span>
          </motion.div>
        </div>

        {/* Divider line */}
        <div className="mt-12 pt-12 border-t border-gold/10" />
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gold-light/40 text-xs font-body mt-8"
        >
          © 2024 Carla Caroline. Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
};

export default FooterSection;
