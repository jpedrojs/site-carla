import { motion } from "framer-motion";
import { GraduationCap, Monitor, MapPin } from "lucide-react";
import clinicPhoto from "@/assets/clinic-kids.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Clinic photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-gold rounded-2xl opacity-15 blur-xl" />
              <img
                src={clinicPhoto}
                alt="Espaço infantil da clínica com brinquedos e livros"
                className="relative rounded-2xl shadow-xl w-full max-w-lg mx-auto object-cover aspect-[3/4]"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Sobre mim</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Sua saúde mental em <span className="text-gradient-gold">boas mãos</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Sou Carla Caroline, psicóloga com especialização em Terapia Cognitivo-Comportamental (TCC).
              Atendo adultos e crianças, tanto presencialmente em minha clínica quanto online via Google Meet.
              Meu espaço clínico é pensado especialmente para crianças, com brinquedos, livros e jogos
              que tornam o processo terapêutico mais leve e acolhedor.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Especialista em TCC</h4>
                  <p className="text-muted-foreground text-sm font-body">Formação e especialização em Terapia Cognitivo-Comportamental</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Atendimento Online</h4>
                  <p className="text-muted-foreground text-sm font-body">Sessões via Google Meet com a mesma qualidade do presencial</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Clínica Acolhedora</h4>
                  <p className="text-muted-foreground text-sm font-body">Espaço adequado para crianças com brinquedos, livros e jogos</p>
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
