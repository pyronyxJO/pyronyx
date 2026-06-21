import { Instagram, Twitter, Facebook, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/pyronyx-logo.png";
import { DISCORD_URL } from "@/lib/links";

const scrollTop = () =>
  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <Link to="/" onClick={scrollTop} className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Pyronyx" width={52} height={52} className="h-13 w-13 object-contain" style={{ height: '3.25rem', width: '3.25rem' }} />
              <span className="font-display font-black text-2xl tracking-widest text-gradient-fire">
                PYRONYX
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-5">
              Igniting the future of esports, competitive gaming, and digital
              communities. Where competition evolves and legends rise.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 h-10 bg-gradient-fire text-primary-foreground font-display font-bold uppercase tracking-widest text-xs clip-corner shadow-glow-sm hover:shadow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Join Discord
            </a>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-primary mb-4">Explore</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/tournaments" onClick={scrollTop} className="hover:text-primary transition-colors">Tournaments</Link></li>
              <li><Link to="/media" onClick={scrollTop} className="hover:text-primary transition-colors">Media</Link></li>
              <li><Link to="/about" onClick={scrollTop} className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/packages" onClick={scrollTop} className="hover:text-primary transition-colors">Packages</Link></li>
              <li><a href="/#sponsors" className="hover:text-primary transition-colors">Sponsors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-primary mb-4">Connect</h4>
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.instagram.com/pyronyx.gg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors clip-corner">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://x.com/pyronyxgg" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors clip-corner">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61551713952634" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors clip-corner">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/channel/UCQ4khG-Qkl0MkZ6r0l8GY_A" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors clip-corner">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <a href="mailto:pyronyxjo@gmail.com" className="hover:text-primary transition-colors">pyronyxjo@gmail.com</a>
            </p>
          </div>
        </div>


        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pyronyx Esports. All rights reserved.</p>
          <p className="font-display uppercase tracking-widest text-xs">
            Ignite · Compete · <span className="text-primary">Conquer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
