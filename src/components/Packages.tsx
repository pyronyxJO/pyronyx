import { Trophy, Video, Megaphone, Check, Star } from "lucide-react";

type Pkg = {
  name: string;
  price: string;
  euro?: string;
  desc: string;
  includes: string[];
  bestFor?: string[];
  cta: string;
  featured?: boolean;
};

type Category = {
  id: string;
  title: string;
  icon: typeof Trophy;
  blurb: string;
  packages: Pkg[];
};

const categories: Category[] = [
  {
    id: "tournaments",
    title: "Tournament Management",
    icon: Trophy,
    blurb: "From community brackets to full-scale LAN productions.",
    packages: [
      {
        name: "Starter Tournament",
        price: "140–180 JOD",
        euro: "€180–230",
        desc: "Perfect for gaming cafés, school clubs, and small online communities.",
        includes: [
          "Tournament setup & management",
          "Player registration handling",
          "Bracket creation & match scheduling",
          "Ruleset preparation",
          "Discord / WhatsApp communication",
          "Admin support during the event",
          "Winner announcement graphics",
          "Basic post-event report",
        ],
        bestFor: ["Online tournaments", "Small LAN events", "Community activations"],
        cta: "Get Started",
      },
      {
        name: "Standard Tournament",
        price: "300–400 JOD",
        euro: "€385–510",
        desc: "Designed for universities, gaming cafés, and medium-sized gaming events.",
        includes: [
          "Full tournament operations",
          "Registration & player support",
          "Match scheduling & admin team",
          "Event branding graphics",
          "Livestream support setup",
          "Social media promotion support",
          "Giveaway coordination",
          "Highlight content posts",
          "Event analytics & report",
        ],
        bestFor: ["University tournaments", "Café competitions", "Brand activations"],
        cta: "Book a Service",
        featured: true,
      },
      {
        name: "Premium Tournament Experience",
        price: "800–1200+ JOD",
        euro: "€1020–1530+",
        desc: "Built for large-scale gaming events and premium esports activations.",
        includes: [
          "Full offline tournament management",
          "Multi-admin operations team",
          "Stream production setup",
          "Casters & host coordination",
          "Sponsor branding integration",
          "Event photography / videography",
          "Highlight recap content",
          "Audience engagement activities",
          "Detailed event performance report",
        ],
        bestFor: ["Major LAN events", "Telecom activations", "Gaming festivals"],
        cta: "Contact Us",
      },
    ],
  },
  {
    id: "video",
    title: "Event Video Production",
    icon: Video,
    blurb: "Cinematic coverage built for esports energy and social reach.",
    packages: [
      {
        name: "Basic Event Coverage",
        price: "80–140 JOD",
        euro: "€100–180",
        desc: "Simple and clean esports event coverage.",
        includes: [
          "Event filming coverage",
          "1 short highlight reel",
          "Basic editing and music",
          "Social-ready formatting",
          "Delivery within 5 days",
        ],
        cta: "Get Started",
      },
      {
        name: "Standard Event Production",
        price: "180–350 JOD",
        euro: "€230–450",
        desc: "Professional esports event coverage optimized for social media.",
        includes: [
          "2–4 minute cinematic highlight video",
          "3 Instagram / TikTok clips",
          "Basic motion graphics",
          "Player or audience reactions",
          "Branding integration",
          "Fast-paced social editing",
          "Delivery within 5 days",
        ],
        cta: "Book a Service",
        featured: true,
      },
      {
        name: "Premium Event Production",
        price: "500–1200+ JOD",
        euro: "€640–1530+",
        desc: "High-end esports media coverage for large gaming events.",
        includes: [
          "Multi-camera event coverage",
          "Advanced editing & transitions",
          "Same-day social clips",
          "Interviews & creator coverage",
          "Sponsor integration",
          "Custom thumbnails & graphics",
          "Full event recap package",
        ],
        cta: "Contact Us",
      },
    ],
  },
  {
    id: "social",
    title: "Gaming Social Media Management",
    icon: Megaphone,
    blurb: "Content engineered for Gen Z gamers and gaming-first brands.",
    packages: [
      {
        name: "Starter Content Package",
        price: "100–180 JOD/mo",
        euro: "€130–230/mo",
        desc: "Gaming-focused social media content for small brands and cafés.",
        includes: [
          "6 monthly posts",
          "Arabic captions",
          "Gaming-themed branding",
          "Monthly content calendar",
          "Instagram-ready formatting",
        ],
        cta: "Get Started",
      },
      {
        name: "Standard Content Package",
        price: "250–450 JOD/mo",
        euro: "€320–575/mo",
        desc: "Designed for growing gaming brands and businesses.",
        includes: [
          "4 monthly posts",
          "4 short-form reels / videos",
          "Trend-based gaming content",
          "Arabic captions & hashtags",
          "Story templates",
          "Monthly content calendar",
          "Engagement-focused strategy",
        ],
        cta: "Book a Service",
        featured: true,
      },
      {
        name: "Premium Content Package",
        price: "600–1200 JOD/mo",
        euro: "€770–1500/mo",
        desc: "Full gaming social media management for brands targeting Gen Z audiences.",
        includes: [
          "Full monthly content management",
          "Filming sessions",
          "Reels & TikTok production",
          "Campaign planning",
          "Gaming trend research",
          "Analytics reporting",
          "Strategy meetings",
          "Creator collaboration support",
        ],
        cta: "Contact Us",
      },
    ],
  },
];

const ctaHref = "#contact";

const PackageCard = ({ pkg }: { pkg: Pkg }) => {
  return (
    <div
      className={`group relative flex flex-col h-full p-6 md:p-7 clip-corner transition-all duration-300 hover:-translate-y-1 ${
        pkg.featured
          ? "bg-gradient-to-b from-primary/15 via-card to-card border border-primary/60 shadow-glow"
          : "bg-card border border-border hover:border-primary/50 hover:shadow-glow-sm"
      }`}
    >
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-fire text-primary-foreground font-display text-[10px] uppercase tracking-[0.25em] flex items-center gap-1 clip-corner shadow-glow-sm">
          <Star className="w-3 h-3" />
          Recommended
        </div>
      )}

      <h4 className="font-display font-bold text-lg uppercase tracking-wider text-foreground mb-2">
        {pkg.name}
      </h4>

      <div className="mb-3">
        <div className="font-display font-black text-2xl md:text-3xl text-primary leading-none">
          {pkg.price}
        </div>
        {pkg.euro && (
          <div className="font-display text-xs uppercase tracking-widest text-muted-foreground mt-1">
            {pkg.euro}
          </div>
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{pkg.desc}</p>

      <ul className="space-y-2 mb-5">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {pkg.bestFor && (
        <div className="mb-5 pt-4 border-t border-border/60">
          <p className="font-display text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
            Best for
          </p>
          <div className="flex flex-wrap gap-1.5">
            {pkg.bestFor.map((b) => (
              <span
                key={b}
                className="text-xs px-2 py-0.5 border border-border bg-background/60 text-foreground/80 clip-corner"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      )}

      <a
        href={ctaHref}
        className={`mt-auto inline-flex items-center justify-center h-11 px-5 font-display font-bold uppercase tracking-widest text-xs clip-corner transition-all ${
          pkg.featured
            ? "bg-gradient-fire text-primary-foreground shadow-glow-sm hover:shadow-glow"
            : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow-sm"
        }`}
      >
        {pkg.cta}
      </a>
    </div>
  );
};

const Packages = () => {
  return (
    <section id="packages" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-60 pointer-events-none" />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
              Pyronyx Services
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-5">
            Gaming &amp; Esports <span className="text-gradient-fire">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Helping brands, cafés, schools, and communities connect with gaming audiences through
            tournaments, content, and experiences.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-fire text-primary-foreground clip-corner shadow-glow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-2xl md:text-3xl uppercase tracking-wider text-foreground">
                        {cat.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base">{cat.blurb}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch pt-4">
                  {cat.packages.map((pkg) => (
                    <PackageCard key={pkg.name} pkg={pkg} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
