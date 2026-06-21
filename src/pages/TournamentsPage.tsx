import PageShell from "@/components/PageShell";
import Tournaments from "@/components/Tournaments";
import { Calendar, Users, Eye, Trophy, Gamepad2 } from "lucide-react";

import asuFc26 from "@/assets/tournaments/ASU fc26 tournament.png";
import pyronyxOpen from "@/assets/tournaments/pyronyx open tournament.jpeg";
import cs2Ramadan from "@/assets/tournaments/cs2 ramadan tournament.jpeg";
import cs2First from "@/assets/tournaments/cs2 first tournament.jpeg";

type PastTournament = {
  title: string;
  img: string;
  game: string;
  mode: string;
  date: string;
  registrations: string;
  views: string;
  extraViews?: string;
  prize: string;
};

const past: PastTournament[] = [
  {
    title: "ASU FC26 Tournament",
    img: asuFc26.url,
    game: "EA Sports FC 26",
    mode: "1v1",
    date: "19 December 2025",
    registrations: "32 players",
    views: "72,000+ social media views",
    extraViews: "400+ live tournament viewers",
    prize: "100 JOD cash prize",
  },
  {
    title: "Pyronyx Open Tournament",
    img: pyronyxOpen.url,
    game: "Counter-Strike 2",
    mode: "2v2",
    date: "24 October 2025",
    registrations: "20 teams (40 players)",
    views: "64,000+ social media views",
    prize: "Gaming accessories worth $200+",
  },
  {
    title: "CS2 Ramadan Tournament",
    img: cs2Ramadan.url,
    game: "Counter-Strike 2",
    mode: "1v1",
    date: "15 March 2025",
    registrations: "35 players",
    views: "27,000+ social media views",
    prize: "HyperX Cloud Mix Headset",
  },
  {
    title: "CS2 1v1 Tournament",
    img: cs2First.url,
    game: "Counter-Strike 2",
    mode: "1v1",
    date: "10 October 2024",
    registrations: "48 players",
    views: "21,000+ social media views",
    prize: "$150+ in prizes",
  },
];

const Stat = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-start gap-3">
    <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-primary/10 border border-primary/30 clip-corner text-primary">
      <Icon className="w-4 h-4" />
    </div>
    <div className="min-w-0">
      <div className="font-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>
      <div className="text-sm md:text-base text-foreground font-semibold leading-snug">
        {value}
      </div>
    </div>
  </div>
);

const TournamentsPage = () => (
  <PageShell>
    <Tournaments />

    <section className="relative py-20 md:py-28 border-t border-border/60">
      <div className="container">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Hall of Fire
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-4">
            Past <span className="text-gradient-fire">Tournaments</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A look back at the battles we've hosted — the players, the prizes,
            and the numbers behind every event.
          </p>
        </div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {past.map((t) => (
            <article
              key={t.title}
              className="group relative bg-card border border-border clip-corner overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-fire" />

              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={t.img}
                  alt={`${t.title} announcement poster`}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-background/80 backdrop-blur border border-primary/40 clip-corner">
                  <span className="font-display text-[10px] uppercase tracking-[0.25em] text-primary">
                    Completed
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7 flex-1 flex flex-col gap-5">
                <div>
                  <h3 className="font-display font-black text-xl md:text-2xl uppercase leading-tight mb-2">
                    {t.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-0.5 text-[11px] font-display uppercase tracking-wider bg-primary/10 border border-primary/30 text-primary">
                      {t.game}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-display uppercase tracking-wider bg-secondary/40 border border-border text-foreground">
                      {t.mode}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Stat icon={Calendar} label="Date" value={t.date} />
                  <Stat icon={Users} label="Registrations" value={t.registrations} />
                  <Stat
                    icon={Eye}
                    label="Reach"
                    value={t.extraViews ? `${t.views} • ${t.extraViews}` : t.views}
                  />
                  <Stat icon={Trophy} label="Prize" value={t.prize} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default TournamentsPage;
