import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[380px] overflow-hidden flex items-center" style={{
      background: "radial-gradient(ellipse 140% 100% at 50% 10%, hsl(220, 45%, 18%) 0%, hsl(220, 50%, 12%) 100%)"
    }}>
      {/* Noise texture overlay - 3% opacity for premium feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="heroNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="5" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#heroNoise)" />
        </svg>
      </div>

      {/* Floating organic blobs - glassmorphism effect */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[25%] w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.6,
          willChange: "transform"
        }}
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] left-[15%] w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(200, 180, 120, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.5,
          willChange: "transform"
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 py-4 lg:py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-6 max-w-7xl mx-auto items-center">
          {/* Text Content - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1">

            <div className="flex items-center gap-3 mb-6">
              <span className="text-gold text-5xl leading-none">Ψ</span>
              <div>
                <p className="text-gold-light/80 font-body text-[10px] tracking-[0.25em] uppercase font-bold">
                  Psicóloga
                </p>
                <p className="text-gold-light/50 font-body text-[10px] tracking-wider">CRP 14/08385-4</p>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              Carla <span className="text-gradient-gold">Caroline</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-gold-light/90 mb-6 leading-tight">
              Uma vida saudável começa com uma <span className="text-gradient-gold">mente saudável</span>
            </p>

            <p className="text-gold-light/60 font-body text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              Especialista em Terapia Cognitivo-Comportamental para adultos e crianças. Atendimento presencial e online.
            </p>

            <motion.a
              href="https://wa.me/556791902497?text=Olá, Carla! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 font-body font-bold px-9 py-4 rounded-full text-lg shadow-lg relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, hsl(45, 85%, 58%) 0%, hsl(42, 80%, 50%) 100%)",
                boxShadow: "0 10px 40px -10px rgba(180, 140, 0, 0.4)"
              }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageCircle className="w-5 h-5 relative z-10" style={{ color: "hsl(220, 50%, 15%)" }} />
              <span className="relative z-10" style={{ color: "hsl(220, 50%, 15%)" }}>Fale comigo</span>
            </motion.a>
          </motion.div>

          {/* Professional Image - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end">

            <div className="relative">
              {/* Subtle depth shadow behind image */}
              <div
                className="absolute -inset-4 rounded-lg opacity-40"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, transparent 70%)",
                  filter: "blur(30px)"
                }}
              />

              <img
                src="/lovable-uploads/7bc7634d-7f9d-42af-a9a4-ff3ee899ea27.png"
                alt="Psicóloga Carla Caroline"
                className="relative w-full max-w-[480px] lg:max-w-[600px] h-auto object-cover rounded-lg"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;