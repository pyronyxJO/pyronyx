import { Handshake } from "lucide-react";
import fantech from "@/assets/sponsors/fantech_jordan.png";
import pcZone from "@/assets/sponsors/pc_zone.png";
import midas from "@/assets/sponsors/midas_computer_center.png";
import suntop from "@/assets/sponsors/suntop.png";
import pillars from "@/assets/sponsors/pillars.png";
import cloudTor from "@/assets/sponsors/cloud_tor.png";
import nairoukh from "@/assets/sponsors/nairoukh_store.png";
import ieee from "@/assets/sponsors/IEEE.png";
import playgo from "@/assets/sponsors/playgo.png";
import goodDay from "@/assets/sponsors/good_day.png";
import baker from "@/assets/sponsors/baker.png";
import gameak from "@/assets/sponsors/gameak.png";
import itti from "@/assets/sponsors/itti.png";
import tech3arabi from "@/assets/sponsors/tech3arabi.png";
import sinalco from "@/assets/sponsors/sinalco.png";
import torabika from "@/assets/sponsors/torabika.png";
import eti from "@/assets/sponsors/eti.png";

const sponsors = [
  { name: "Fantech Jordan", logo: fantech, url: "https://fantech-jo.com/en" },
  { name: "PC Zone", logo: pcZone, url: "https://www.facebook.com/groups/198915702010938/" },
  { name: "Midas Computer Center", logo: midas, url: "https://mcc-jo.com/" },
  { name: "Suntop", logo: suntop, url: "https://www.instagram.com/suntopjordan/" },
  { name: "Pillars", logo: pillars, url: "https://www.facebook.com/Pillarsforchips/" },
  { name: "Cloud Tor", logo: cloudTor, url: "https://www.facebook.com/CloudTor" },
  { name: "Nairoukh Store", logo: nairoukh, url: "https://www.instagram.com/nairoukh.store/" },
  { name: "IEEE", logo: ieee, url: "https://www.ieee.org/" },
  { name: "PlayGo", logo: playgo, url: "https://www.instagram.com/playgo.jo/" },
  { name: "Good Day", logo: goodDay, url: "https://www.instagram.com/gooddaycoffee.jo/" },
  { name: "Baker", logo: baker, url: "https://www.facebook.com/WeBakewithLoves" },
  { name: "Gameak", logo: gameak, url: "https://gameakjo.com/" },
  { name: "ITTI", logo: itti, url: "https://itti.es/" },
  { name: "Tech3arabi", logo: tech3arabi, url: "https://tech3arabi.com/" },
  { name: "Sinalco", logo: sinalco, url: "https://sinalco.com/" },
  { name: "Torabika", logo: torabika, url: "https://www.facebook.com/TorabikaJordan/" },
  { name: "ETI", logo: eti, url: "https://www.facebook.com/etijordan/" },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Powered By
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-4">
            Trusted <span className="text-gradient-fire">Partners</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Brands that fuel our fire and amplify the spectacle.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-8 mb-16 border-y border-border [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-12 animate-scroll-x w-max items-center">
            {[...sponsors, ...sponsors].map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="group flex flex-col items-center gap-3 min-w-[160px] hover:scale-105 transition-transform"
              >
                <div className="h-24 w-24 flex items-center justify-center">
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="font-display text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  {s.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative max-w-4xl mx-auto p-10 md:p-14 bg-card border border-border clip-corner overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial opacity-50" />
          <div className="relative text-center">
            <Handshake className="w-12 h-12 text-primary mx-auto mb-4 animate-flicker" />
            <h3 className="font-display font-black text-3xl md:text-5xl uppercase mb-4">
              Become A <span className="text-gradient-fire">Sponsor</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Reach millions of engaged gamers worldwide. Align your brand with
              the most explosive moments in esports.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <a href="mailto:pyronyxjo@gmail.com" className="text-lg md:text-xl text-foreground hover:text-primary transition-colors">
                  pyronyxjo@gmail.com
                </a>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <a href="tel:+962780540661" className="text-lg md:text-xl text-foreground hover:text-primary transition-colors">
                  +962 78 054 0661
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
