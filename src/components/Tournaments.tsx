import { Flame } from "lucide-react";

const Tournaments = () => {
  return (
    <section id="tournaments" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Upcoming Battles
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-4">
            Active <span className="text-gradient-fire">Tournaments</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto p-12 md:p-16 bg-card border border-border clip-corner text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-fire" />
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-fire text-primary-foreground clip-corner">
            <Flame className="w-8 h-8 animate-flicker" />
          </div>
          <h3 className="font-display font-black text-3xl md:text-5xl uppercase text-gradient-fire mb-4">
            Coming Soon
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            We're forging something epic. New tournaments will be announced
            soon — stay tuned and follow our socials to be the first to know.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
