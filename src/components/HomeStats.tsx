import { Trophy, Users, Eye, UserPlus, Handshake, Coins } from "lucide-react";

const stats = [
  { icon: Trophy, value: "6", label: "Events Hosted" },
  { icon: Users, value: "155+", label: "Players Participated" },
  { icon: Eye, value: "6M+", label: "Social Media Views" },
  { icon: UserPlus, value: "1K+", label: "Social Media Followers" },
  { icon: Handshake, value: "17", label: "Partners & Sponsors" },
  { icon: Coins, value: "$1000+", label: "Prizes Awarded" },
];

const HomeStats = () => {
  return (
    <section className="relative py-16 md:py-20 border-y border-border/60 bg-card/20">
      <div className="container">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <div className="inline-block mb-3 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Track Record
            </span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase leading-tight">
            Numbers That <span className="text-gradient-fire">Speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative p-6 md:p-7 bg-card border border-border clip-corner hover:border-primary/60 hover:-translate-y-1 hover:shadow-glow-sm transition-all text-center"
            >
              <div className="w-11 h-11 mx-auto mb-4 flex items-center justify-center bg-gradient-fire text-primary-foreground clip-corner">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="font-display font-black text-3xl md:text-5xl text-gradient-fire leading-none">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
