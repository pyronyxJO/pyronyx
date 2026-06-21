import { Play } from "lucide-react";
import m1 from "@/assets/media-1.jpg";
import asu from "@/assets/media-asu.png";
import cs2 from "@/assets/media-cs2.png";
import bau from "@/assets/media-bau.png";

const clips = [
  { img: m1, title: "Ramadan C.S Tournament Stream Highlights", url: "https://youtu.be/n4tfXL0KwR8?si=aSqFrq7SlpT_nnnO" },
  { img: asu, title: "ASU Esports Day", url: "https://www.instagram.com/p/DSpv9IbDNxS/?img_index=1" },
  { img: cs2, title: "Pyronyx Open Tournament", url: "https://www.instagram.com/p/DQPnuzWjlA0/" },
  { img: bau, title: "Esports Education With IEEE", url: "https://www.instagram.com/p/DLkcwYZNs3L/?img_index=1" },
];

const Media = () => {
  return (
    <section id="media" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Highlights & Reels
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-4">
            Watch The <span className="text-gradient-fire">Flames</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The biggest plays, sharpest moments and rawest reactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {clips.map((c, i) => (
            <a
              key={c.title}
              href={c.url || undefined}
              target={c.url ? "_blank" : undefined}
              rel={c.url ? "noopener noreferrer" : undefined}
              className={`group relative overflow-hidden clip-corner border border-border hover:border-primary transition-all hover:-translate-y-1 block ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                width={1024}
                height={768}
                className={`w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ${
                  i === 0 ? "h-full min-h-[400px]" : "h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-gradient-fire flex items-center justify-center shadow-glow animate-pulse-glow">
                  <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <h3 className="font-display font-bold text-lg uppercase text-foreground group-hover:text-primary transition-colors">
                  {c.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
