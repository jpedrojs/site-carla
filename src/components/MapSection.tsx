import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import mapsScreenshot from "../assets/maps-screenshot.png";

const CLINIC_ADDRESS = "Av. Prof. João Thomes, 312 - Q.ta da Lagoa, Três Lagoas - MS, 79611-170";
const GOOGLE_MAPS_URL = `https://maps.google.com/maps/search/${encodeURIComponent(CLINIC_ADDRESS)}`;

const MapSection = () => {
  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Localização</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Encontre nossa <span className="text-gradient-gold">clínica</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Text Content - Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Visite-nos em <span className="text-gradient-gold">Três Lagoas</span>
            </h3>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Estou localizada em um espaço acolhedor e preparado para oferecer o melhor atendimento em psicologia clínica. Tanto para atendimento presencial quanto para consultas online.
            </p>

            {/* Address Card */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-body text-sm text-gold uppercase tracking-wider mb-2">Endereço</p>
                  <p className="font-display font-semibold text-foreground text-lg leading-relaxed">
                    {CLINIC_ADDRESS}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body font-bold px-9 py-4 rounded-full text-lg shadow-lg relative overflow-hidden group w-fit hover:shadow-xl transition-all"
              style={{
                background: "linear-gradient(135deg, hsl(45, 85%, 58%) 0%, hsl(42, 80%, 50%) 100%)",
                boxShadow: "0 10px 40px -10px rgba(180, 140, 0, 0.4)"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MapPin className="w-5 h-5 relative z-10" style={{ color: "hsl(220, 50%, 15%)" }} />
              <span className="relative z-10" style={{ color: "hsl(220, 50%, 15%)" }}>Ver no Google Maps</span>
            </a>
          </motion.div>

          {/* Image - Right */}
          <motion.a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer group"
          >
            <img
              src={mapsScreenshot}
              alt="Localização da clínica - Mapa do Google Maps"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-6">
              <span className="text-white font-bold text-lg">Clique para abrir no Maps</span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
