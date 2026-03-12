import { motion } from "framer-motion";
import { GraduationCap, Monitor, MapPin } from "lucide-react";
import clinicPhoto from "@/assets/carla-photo.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 lg:py-40 bg-muted/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/3 left-5% w-80 h-80 rounded-full" style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.1) 0%, transparent 70%)",
          filter: "blur(100px)"
        }} />
        <div className="absolute bottom-20 right-10% w-96 h-96 rounded-full" style={{
          background: "radial-gradient(circle, rgba(180, 140, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(120px)"
        }} />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="aboutNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="15" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#aboutNoise)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
          {/* Clinic photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative"
          >
            <div className="relative group">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -inset-6 bg-gradient-to-br from-gold via-gold/40 to-transparent rounded-2xl opacity-10 blur-xl group-hover:opacity-6 transition-opacity"
                style={{ willChange: "transform" }}
              />
              <div className="absolute -inset-3 bg-gradient-gold rounded-2xl opacity-10 blur-xl" />
              <img
                src={clinicPhoto}
                alt="Espaço infantil da clínica com brinquedos e livros"
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover aspect-[3/4]"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex-1">
            
            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 h-1 w-16 rounded-full"
              style={{ background: "linear-gradient(to right, transparent, rgba(180, 140, 0, 0.6), transparent)" }}
            />
            
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Sobre mim</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Sua saúde mental em <span className="text-gradient-gold">boas mãos</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-10 text-lg">
              Sou Carla Caroline, psicóloga com especialização em Terapia Cognitivo-Comportamental (TCC).
              Atendo adultos e adolescentes, tanto presencialmente em minha clínica quanto online via Google Meet.
              Meu espaço clínico é acolhedor e preparado para oferecer um ambiente seguro e confortável para o processo terapêutico.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <GraduationCap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-lg">Especialista em TCC</h4>
                  <p className="text-muted-foreground font-body text-base mt-1 text-justify">Formação e especialização em Terapia Cognitivo-Comportamental</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <Monitor className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-lg">Atendimento Online</h4>
                  <p className="text-muted-foreground font-body text-base mt-1 text-justify">Sessões via Google Meet com a mesma qualidade do presencial</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-lg">Clínica Acolhedora</h4>
                  <p className="text-muted-foreground font-body text-base mt-1 text-justify">Ambiente acolhedor e confortável para sessões presenciais</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
