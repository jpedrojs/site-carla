import { motion } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Baby, User } from "lucide-react";

const testimonials = [
  {
    name: "Mariana S.",
    type: "adult" as const,
    stars: 5,
    text: "A Carla me ajudou a superar uma fase muito difícil de ansiedade. O acolhimento dela é incrível e as técnicas da TCC mudaram minha vida.",
  },
  {
    name: "Família do Pedro (8 anos)",
    type: "child" as const,
    stars: 5,
    text: "Meu filho adora ir nas sessões! O espaço é lindo e a Carla sabe como se conectar com crianças. Vimos uma evolução enorme no comportamento dele.",
  },
  {
    name: "Carlos R.",
    type: "adult" as const,
    stars: 5,
    text: "Depois de anos adiando, finalmente procurei ajuda. A Carla é extremamente profissional e o atendimento online é muito prático. Recomendo demais.",
  },
  {
    name: "Família da Sofia (6 anos)",
    type: "child" as const,
    stars: 5,
    text: "A Sofia tem TEA e a Carla foi a profissional que mais entendeu as necessidades dela. Os brinquedos e jogos tornam tudo mais leve.",
  },
  {
    name: "Juliana M.",
    type: "adult" as const,
    stars: 5,
    text: "Eu e meu marido fizemos terapia de casal com a Carla e foi transformador. Ela nos ajudou a reconstruir nossa comunicação.",
  },
  {
    name: "Família do Lucas (10 anos)",
    type: "child" as const,
    stars: 4,
    text: "O Lucas tinha muita dificuldade na escola por causa do TDAH. Com o acompanhamento da Carla, ele melhorou muito o foco e a autoestima.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "text-gold fill-gold" : "text-border"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardEl = scrollRef.current.querySelector("div[class*='min-w']");
    const cardWidth = cardEl?.clientWidth || 400;
    const amount = cardWidth + 24;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-32 lg:py-40 bg-muted/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="absolute top-20 right-15% w-80 h-80 rounded-full" style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)"
        }} />
        <div className="absolute bottom-10 left-5% w-96 h-96 rounded-full" style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.07) 0%, transparent 70%)",
          filter: "blur(120px)"
        }} />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="testimonialsNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.88" numOctaves="3" seed="20" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#testimonialsNoise)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 relative">
          
          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mb-6 h-1 w-20 rounded-full"
            style={{ background: "linear-gradient(to right, transparent, rgba(180, 140, 0, 0.6), transparent)" }}
          />
          
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Depoimentos</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            O que dizem sobre o <span className="text-gradient-gold">atendimento</span>
          </h2>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-navy hover:shadow-2xl hover:bg-gold hover:text-accent-foreground flex items-center justify-center text-foreground transition-all duration-300 -ml-3 lg:-ml-6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-navy hover:shadow-2xl hover:bg-gold hover:text-accent-foreground flex items-center justify-center text-foreground transition-all duration-300 -mr-3 lg:-mr-6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.15)" }}
                className="min-w-[340px] md:min-w-[400px] snap-start bg-white rounded-2xl p-8 transition-all duration-400 border border-gray-100 hover:border-gold/30 flex flex-col group shadow-sm"
                style={{
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                      {t.type === "child" ? (
                        <Baby className="w-6 h-6 text-accent-foreground" />
                      ) : (
                        <User className="w-6 h-6 text-accent-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground">{t.name}</p>
                      <p className="text-muted-foreground font-body text-xs">
                        {t.type === "child" ? "Terapia Infantil" : "Terapia para Adultos"}
                      </p>
                    </div>
                  </div>
                  <StarRating count={t.stars} />
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
