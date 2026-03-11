import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-navy overflow-hidden flex items-center">
      {/* Subtle noise texture overlay - professional depth */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="heroNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="hsl(220, 50%, 15%)" filter="url(#heroNoise)" />
        </svg>
      </div>

      {/* Radial gradient light source - emanating from behind the image */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[900px] h-[900px] opacity-25"
          style={{
            background: "radial-gradient(ellipse 900px 700px at 60% 40%, rgba(180, 140, 0, 0.08) 0%, transparent 60%)",
            filter: "blur(100px)"
          }}
        />
      </div>

      {/* Floating organic blobs - very subtle */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 opacity-4 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)"
        }}
      />
      <motion.div
        animate={{ y: [0, 35, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 opacity-3 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.15) 0%, transparent 70%)",
          filter: "blur(90px)"
        }}
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/4 w-72 h-72 opacity-3 pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(220, 220, 220, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 max-w-7xl mx-auto">
          {/* Text Content - Premium Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left">
            
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <span className="text-gold text-6xl leading-none">Ψ</span>
              <div>
                <p className="text-gold-light/75 font-body text-xs tracking-widest uppercase font-semibold">
                  Psicóloga
                </p>
                <p className="text-gold-light/60 font-body text-xs tracking-widest">CRP 14/08385-4</p>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Carla <span className="text-gradient-gold">Caroline</span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-gold-light/85 mb-8 leading-snug">
              Uma vida saudável<br />começa com uma <span className="text-gradient-gold">mente saudável</span>.
            </p>

            <p className="text-gold-light/60 font-body text-base mb-12 max-w-sm leading-relaxed">
              Especialista em Terapia Cognitivo-Comportamental para adultos e crianças. Atendimento presencial e online.
            </p>

            <motion.a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground font-body font-bold px-8 py-4 rounded-full shadow-gold text-lg transition-all duration-300 hover:shadow-2xl">
              <MessageCircle className="w-5 h-5" />
              Agende sua consulta
            </motion.a>
          </motion.div>

          {/* Professional Image - Minimal and Clean */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 flex-1 flex justify-center lg:justify-end relative">
            
            {/* Subtle glow container */}
            <div className="relative">
              <div className="absolute -inset-16 opacity-0 hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(ellipse 600px 500px at center, rgba(180, 140, 0, 0.08) 0%, transparent 70%)",
                  filter: "blur(100px)"
                }}
              />
              
              {/* Clean image without artificial borders */}
              <img
                src="/lovable-uploads/7bc7634d-7f9d-42af-a9a4-ff3ee899ea27.png"
                alt="Psicóloga Carla Caroline"
                className="relative w-80 md:w-96 lg:w-[440px] object-cover shadow-2xl transition-all duration-500 hover:shadow-[0_40px_80px_rgba(180,140,0,0.15)]"
                style={{
                  borderRadius: "6px",
                  clipPath: "polygon(0 0.5%, 99.5% 0, 100% 0.5%, 100% 99.5%, 99.5% 100%, 0.5% 100%, 0 99.5%, 0 0.5%)"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Separator wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,80 C360,120 1080,40 1440,80 L1440,120 L0,120 Z" fill="hsl(220, 20%, 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;