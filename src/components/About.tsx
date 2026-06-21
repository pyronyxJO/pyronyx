import { Trophy, Users, Zap, Target } from "lucide-react";

const features = [
  { icon: Trophy, title: "Compete To Win", desc: "We build competitive teams, host high-level tournaments, and create opportunities for players to prove themselves on the biggest stages.", bottom: "Victory is the standard." },
  { icon: Users, title: "Build Our Community", desc: "Pyronyx is powered by passionate gamers, creators, and fans working together to grow esports in Jordan and beyond.", bottom: "Together we rise." },
  { icon: Zap, title: "Create & Inspire", desc: "From tournaments to content creation, we deliver experiences that entertain, inspire, and push the esports scene forward.", bottom: "Content that ignites." },
  { icon: Target, title: "Represent Your Team", desc: "We aim to elevate Jordanian esports and showcase regional talent to the Middle East and the global gaming community.", bottom: "Your team. Your pride." },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
              <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
                Who We Are
              </span>
            </div>
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-6">
              Forged in <span className="text-gradient-fire">Fire</span>,
              <br />
              Built to <span className="text-gradient-fire">Burn</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pyronyx is a Jordanian esports organization focused on competitive
              gaming, tournaments, content creation, and community growth. Built
              by passionate gamers and esports organizers, Pyronyx aims to
              create professional and engaging experiences that support the
              growth of esports in Jordan and the Middle East.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group relative p-6 bg-card/60 border border-border hover:border-primary/60 backdrop-blur-sm clip-corner transition-all hover:-translate-y-1 hover:shadow-glow-sm"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-ember opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-fire text-primary-foreground clip-corner">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {f.desc}
                  </p>
                  <p className="font-display font-bold text-xs uppercase tracking-widest text-primary">
                    {f.bottom}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
