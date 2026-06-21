import { Twitter, Twitch } from "lucide-react";
import hamza from "@/assets/team/hamza.png";
import selena from "@/assets/team/selena.png";
import ahmedAmr from "@/assets/team/ahmed_amr.png";
import osama from "@/assets/team/osama.png";
import ibrahim from "@/assets/team/ibrahim.png";
import ahmedJarjees from "@/assets/team/ahmed_jarjees.png";

const players = [
  { img: hamza, name: "Hamza Basha", role: "CEO & Manager", position: "object-center" },
  { img: selena, name: "Selena Ayyash", role: "Logistics Manager", position: "object-center" },
  { img: ahmedAmr, name: "Ahmed Amr", role: "Social Media Manager", position: "object-center" },
  { img: osama, name: "Osama Alawneh", role: "Tournament Coordinator", position: "object-center" },
  { img: ibrahim, name: "Ibrahim Almahseeri", role: "Game Observer & Stream Operator", position: "object-center" },
  { img: ahmedJarjees, name: "Ahmed Jerjees", role: "Tech Support Specialist", position: "object-center" },
];

const Team = () => {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              The Roster
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-4">
            Meet Our <span className="text-gradient-fire">Team Members</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden clip-corner border border-border bg-card hover:border-primary transition-all"
            >
              <div className="relative h-96 overflow-hidden bg-[#1a0a0a]">
                <img
                  src={p.img}
                  alt={`${p.name} portrait`}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className={`w-full h-full object-cover ${p.position} group-hover:scale-105 transition-transform duration-700`}
                  style={{ imageRendering: "pixelated" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent pointer-events-none" />
              </div>
              <div className="p-5 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-fire" />
                <h3 className="font-display font-bold text-lg uppercase text-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1 mb-4">
                  {p.role}
                </p>
                <div className="flex gap-3">
                  <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Twitch" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitch className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
