import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/pyronyx-logo.png";
import { DISCORD_URL } from "@/lib/links";

type LinkDef = { label: string } & ({ to: string } | { hash: string });

const links: LinkDef[] = [
  { label: "Home", to: "/" },
  { label: "Tournaments", to: "/tournaments" },
  { label: "Media", to: "/media" },
  { label: "About", to: "/about" },
  { label: "Packages", to: "/packages" },
  { label: "Sponsors", hash: "sponsors" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToHash = (hash: string) => {
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.hash = hash;
    } else {
      navigate(`/#${hash}`);
    }
  };

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

  const linkClass =
    "font-display text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <Link to="/" onClick={scrollTop} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Pyronyx logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain group-hover:animate-flicker"
          />
          <span className="font-display font-black text-2xl tracking-widest text-gradient-fire">
            PYRONYX
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) =>
            "to" in l ? (
              <li key={l.label}>
                <Link to={l.to} onClick={scrollTop} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ) : (
              <li key={l.label}>
                <button onClick={() => goToHash(l.hash)} className={linkClass}>
                  {l.label}
                </button>
              </li>
            )
          )}
        </ul>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 h-10 bg-gradient-fire text-primary-foreground font-display font-bold uppercase tracking-widest text-xs clip-corner shadow-glow-sm hover:shadow-glow transition-all"
        >
          <MessageCircle className="w-4 h-4" /> Join Discord
        </a>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) =>
              "to" in l ? (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    onClick={() => {
                      setOpen(false);
                      scrollTop();
                    }}
                    className="block font-display uppercase tracking-widest text-foreground hover:text-primary py-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ) : (
                <li key={l.label}>
                  <button
                    onClick={() => goToHash(l.hash)}
                    className="block w-full text-left font-display uppercase tracking-widest text-foreground hover:text-primary py-2"
                  >
                    {l.label}
                  </button>
                </li>
              )
            )}
            <li>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-5 h-11 bg-gradient-fire text-primary-foreground font-display font-bold uppercase tracking-widest text-xs clip-corner"
              >
                <MessageCircle className="w-4 h-4" /> Join Discord
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
