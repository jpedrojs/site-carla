import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/556791902497?text=Olá, Carla! Gostaria de agendar uma consulta.";

const WhatsAppCTA = () => {
  return (
    <>
      {/* Full section CTA */}
      <section className="py-20 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Pronta para te <span className="text-gradient-gold">acolher</span>
            </h2>
            <p className="text-gold-light/70 font-body text-lg max-w-md mx-auto mb-10">
              Dê o primeiro passo. Agende sua sessão pelo WhatsApp e comece sua jornada de autocuidado.
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground font-body font-bold px-10 py-5 rounded-full shadow-gold text-xl transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Fale comigo no WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold animate-pulse-gold hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-accent-foreground" />
      </a>
    </>
  );
};

export default WhatsAppCTA;
