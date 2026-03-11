import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contato" className="bg-primary py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
          Carla <span className="text-gradient-gold">Caroline</span>
        </h3>
        <p className="text-gold-light/60 font-body text-sm mb-6">
          Psicóloga · Especialista em TCC · CRP 14/08385-4
        </p>
        <div className="flex items-center justify-center gap-1 text-gold-light/40 text-xs font-body">
          <span>Feito com</span>
          <Heart className="w-3 h-3 text-gold" />
          <span>para cuidar de você</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
