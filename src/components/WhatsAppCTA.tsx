import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/556791902497?text=Olá, Carla! Gostaria de agendar uma consulta.";

const WhatsAppCTA = () => {
  return (
    <>
      {/* Full section CTA */}
      <section className="py-28 lg:py-40 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gold/8 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
              style={{ willChange: "transform" }}
            >
              <span className="text-gold text-6xl">✨</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6">
              Pronta para te <span className="text-gradient-gold">acolher</span>
            </h2>
            <p className="text-gold-light/70 font-body text-xl max-w-2xl mx-auto mb-12">
              Dê o primeiro passo. Agende sua sessão pelo WhatsApp e comece sua jornada de autocuidado e transformação pessoal.
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 font-body font-bold px-14 py-7 rounded-full text-2xl relative overflow-hidden group shadow-2xl"
              style={{
                background: "linear-gradient(135deg, hsl(45, 85%, 58%) 0%, hsl(42, 80%, 50%) 100%)",
                boxShadow: "0 10px 40px -10px rgba(180, 140, 0, 0.4)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageCircle className="w-6 h-6 relative z-10" style={{ color: "hsl(220, 50%, 15%)" }} />
              <span className="relative z-10" style={{ color: "hsl(220, 50%, 15%)" }}>Fale comigo no WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center animate-pulse-gold"
        style={{
          background: "linear-gradient(135deg, hsl(45, 85%, 58%) 0%, hsl(42, 80%, 50%) 100%)",
          boxShadow: "0 8px 32px -8px rgba(180, 140, 0, 0.5)"
        }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" style={{ color: "hsl(220, 50%, 15%)" }} />
      </motion.a>
    </>
  );
};

export default WhatsAppCTA;
