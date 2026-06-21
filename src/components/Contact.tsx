import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/pyronyx.gg/" },
  { icon: Twitter, label: "Twitter / X", href: "https://x.com/pyronyxgg" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61551713952634" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCQ4khG-Qkl0MkZ6r0l8GY_A" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <div className="inline-block mb-4 px-3 py-1 border border-primary/40 bg-primary/5 clip-corner">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
            Get In Touch
          </span>
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl uppercase leading-tight mb-6">
          Light The <span className="text-gradient-fire">Fuse</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
          Whether you're a player chasing glory, a brand seeking impact, or
          media looking for the next story — reach out to us directly.
        </p>

        <div className="space-y-8 mb-12">
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</p>
            <a href="mailto:pyronyxjo@gmail.com" className="text-2xl md:text-3xl text-foreground hover:text-primary transition-colors break-all">
              pyronyxjo@gmail.com
            </a>
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-2">HQ</p>
            <p className="text-2xl md:text-3xl text-foreground">Amman · Jordan</p>
          </div>
        </div>

        <div>
          <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow the fire</p>
          <div className="flex gap-3 justify-center">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 flex items-center justify-center border border-border bg-card hover:border-primary hover:text-primary hover:shadow-glow-sm hover:-translate-y-1 transition-all clip-corner"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
