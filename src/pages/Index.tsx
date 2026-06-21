import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Trophy, Users, Play, Handshake, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeStats from "@/components/HomeStats";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DISCORD_URL } from "@/lib/links";

const explore = [
  {
    to: "/tournaments",
    title: "Tournaments",
    desc: "Browse our past events and stay ready for what's coming next.",
    icon: Trophy,
  },
  {
    to: "/media",
    title: "Media",
    desc: "Highlights, reels, and the biggest plays from our broadcasts.",
    icon: Play,
  },
  {
    to: "/about",
    title: "About Pyronyx",
    desc: "Who we are, what we stand for, and the team behind every event.",
    icon: Users,
  },
];

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <HomeStats />

        {/* Explore gateway */}
        <section className="relative py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
                <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                  Explore Pyronyx
                </span>
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase leading-tight">
                Dive <span className="text-gradient-fire">Deeper</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {explore.map(({ to, title, desc, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}
                  className="group relative flex flex-col p-7 bg-card border border-border clip-corner hover:border-primary/60 hover:-translate-y-1 hover:shadow-glow-sm transition-all"
                >
                  <div className="w-12 h-12 mb-5 flex items-center justify-center bg-gradient-fire text-primary-foreground clip-corner shadow-glow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wider text-foreground group-hover:text-primary transition-colors mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.25em] text-primary">
                    Visit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Sponsors />

        {/* Discord CTA strip */}
        <section className="relative py-20 md:py-24 border-t border-border/60">
          <div className="container">
            <div className="relative max-w-4xl mx-auto p-10 md:p-14 bg-card border border-border clip-corner overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-fire" />
              <div className="absolute inset-0 bg-gradient-radial opacity-40" />
              <div className="relative">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-gradient-fire text-primary-foreground clip-corner shadow-glow-sm">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="font-display font-black text-3xl md:text-5xl uppercase mb-4">
                  Stay In The <span className="text-gradient-fire">Loop</span>
                </h3>
                <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto">
                  All tournament announcements, registrations, and updates drop
                  first in our Discord. Join the community and never miss an event.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="fire" size="xl">
                    <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle /> Join Discord
                    </a>
                  </Button>
                  <Button asChild variant="ember" size="xl">
                    <Link
                      to="/tournaments"
                      onClick={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}
                    >
                      <Trophy /> Past Tournaments
                    </Link>
                  </Button>
                  <Button asChild variant="ember" size="xl">
                    <Link
                      to="/packages"
                      onClick={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}
                    >
                      <Handshake /> Work With Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pyronyx",
            url: "https://pyronyxgg.lovable.app",
            description:
              "Pyronyx is a Jordanian esports organization powering tournaments across FC, CS2, and more.",
            sameAs: [
              "https://www.instagram.com/pyronyx.gg/",
              "https://x.com/pyronyxgg",
              "https://www.facebook.com/profile.php?id=61551713952634",
              "https://www.youtube.com/channel/UCQ4khG-Qkl0MkZ6r0l8GY_A",
            ],
          }),
        }}
      />
    </div>
  );
};

export default Index;
