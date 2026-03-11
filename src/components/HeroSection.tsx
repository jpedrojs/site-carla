import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import carlaPhoto from "@/assets/carla-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-navy overflow-hidden flex items-center">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-6 pt-20 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 max-w-5xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left">
            
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
              <span className="text-gold text-4xl font-serif">Ψ</span>
              <p className="text-gold font-body text-sm tracking-[0.3em] uppercase">
                Psicóloga · CRP 14/08385-4
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Carla <span className="text-gradient-gold">Caroline</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-gold-light/90 mb-4 leading-snug">
              Uma vida saudável começa com uma{" "}
              <span className="text-gradient-gold">mente saudável</span>.
            </p>

            <p className="text-gold-light/60 font-body text-sm mb-8 max-w-md mx-auto lg:mx-0">
              Especialista em Terapia Cognitivo-Comportamental para adultos e crianças.
              Atendimento presencial e online.
            </p>

            <motion.a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground font-body font-bold px-8 py-4 rounded-full shadow-gold text-lg transition-all">
              
              <MessageCircle className="w-5 h-5" />
              Agende sua consulta
            </motion.a>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0">
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-2xl" />
              <img

                alt="Psicóloga Carla Caroline"
                className="relative w-72 md:w-80 lg:w-96 rounded-3xl object-cover shadow-2xl border-2 border-gold/20" src="/lovable-uploads/7bc7634d-7f9d-42af-a9a4-ff3ee899ea27.png" />
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" fill="hsl(220, 20%, 97%)" />
        </svg>
      </div>
    </section>);

};

export default HeroSection;