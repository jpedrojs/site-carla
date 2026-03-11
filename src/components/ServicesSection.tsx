import { motion } from "framer-motion";
import { useRef } from "react";
import { Heart, Baby, Brain, Frown, Sparkles, Users, HandHeart, Puzzle, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { icon: Frown, title: "Depressão", desc: "Tratamento especializado para superar a depressão e reencontrar o prazer de viver." },
  { icon: Brain, title: "Ansiedade", desc: "Técnicas da TCC para controlar a ansiedade e viver com mais tranquilidade." },
  { icon: Heart, title: "Relacionamentos", desc: "Apoio para construir relações mais saudáveis e significativas." },
  { icon: Baby, title: "Terapia Infantil", desc: "Atendimento lúdico e acolhedor em espaço preparado para crianças." },
  { icon: Sparkles, title: "Crianças Especiais", desc: "Acompanhamento especializado para crianças com necessidades específicas." },
  { icon: Puzzle, title: "Neurodivergências", desc: "Suporte para TDAH, TEA e outras neurodivergências com abordagem acolhedora." },
  { icon: Users, title: "Terapia de Casal", desc: "Mediação e fortalecimento do vínculo para casais em dificuldade." },
  { icon: HandHeart, title: "Autoestima", desc: "Resgate da autoconfiança e construção de uma autoimagem positiva." },
];

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("div[class*='min-w']")?.clientWidth || 400;
    const amount = (cardWidth + 24) * 2; // scroll 2 cards at a time
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-5% w-64 h-64 rounded-full" style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)"
        }} />
        <div className="absolute bottom-40 left-10% w-96 h-96 rounded-full" style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)"
        }} />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="servicesNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="10" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#servicesNoise)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 relative">
          
          {/* Decorative line above title */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mb-6 h-1 w-20 rounded-full"
            style={{ background: "linear-gradient(to right, transparent, rgba(180, 140, 0, 0.6), transparent)" }}
          />
          
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Especialidades</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Como posso te <span className="text-gradient-gold">ajudar</span>
          </h2>
        </motion.div>

        {/* Scroll buttons */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background shadow-navy flex items-center justify-center text-foreground hover:bg-gold hover:text-accent-foreground transition-colors -ml-3 lg:-ml-6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background shadow-navy flex items-center justify-center text-foreground hover:bg-gold hover:text-accent-foreground transition-colors -mr-3 lg:-mr-6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.15)" }}
                className="min-w-[calc(50%-12px)] sm:min-w-[calc(50%-12px)] snap-start bg-white rounded-2xl p-6 sm:p-10 transition-all duration-400 group border border-gray-100 hover:border-gold/30 shadow-sm"
                style={{
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
                }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <s.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 sm:mb-4 break-words">{s.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed break-words overflow-hidden">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
