import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronRight, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroFire from "@/assets/hero-fire.jpg";
import { DISCORD_URL } from "@/lib/links";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFire}
          alt="Fiery esports arena background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      {/* Floating embers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-1.5 h-1.5 rounded-full bg-primary shadow-glow-sm animate-ember-float"
            style={{
              left: `${(i * 8 + 5) % 100}%`,
              top: `${(i * 13 + 20) % 90}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/40 bg-primary/5 backdrop-blur-sm clip-corner animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            Active Esports Organization
          </span>
        </div>

        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9] mb-6 animate-fade-in-up">
          <span className="text-foreground glow-text">Where Pyro </span>
          <span className="text-gradient-fire">Meets Onyx</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Champs are born in flames and shadows. 🔥
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/90 mb-10 leading-relaxed animate-fade-in-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          Join our Discord community to receive tournament announcements and updates.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
          <Button asChild variant="fire" size="xl">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle /> Join Discord <ChevronRight />
            </a>
          </Button>
          <Button asChild variant="ember" size="xl">
            <Link
              to="/tournaments"
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}
            >
              <Trophy /> View Tournaments
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
          {[
            { v: "250+", l: "Players" },
            { v: "$1K+", l: "Prize Pool" },
            { v: "5", l: "Events" },
          ].map((s) => (
            <div
              key={s.l}
              className="border border-border bg-card/40 backdrop-blur-sm p-4 md:p-6 clip-corner hover:border-primary/60 transition-all"
            >
              <div className="font-display font-black text-2xl md:text-4xl text-gradient-fire">
                {s.v}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
