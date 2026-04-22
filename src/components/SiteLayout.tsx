import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

type NavItem = { to: string; label: string; num: string; external?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Index", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/synthesis", label: "Synthesis", num: "03" },
  { to: "/article", label: "Article", num: "04" },
];

export const SiteLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-8 w-8 bg-navy text-primary-foreground grid place-items-center font-mono text-xs font-bold">
              EB
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-serif text-base text-navy">Ethan Blair</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate">Materials · ChemE</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {nav.map((n) =>
              n.external ? (
                <a
                  key={n.to}
                  href={n.to}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative px-2 sm:px-3 py-2 font-mono text-[11px] tracking-[0.18em] uppercase text-slate hover:text-navy transition-colors"
                >
                  <span className="hidden md:inline mr-1.5 text-slate-light">{n.num}</span>
                  {n.label}
                  <span className="absolute left-2 right-2 -bottom-px h-px bg-copper transition-transform origin-left scale-x-0 group-hover:scale-x-100" />
                </a>
              ) : (
                <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "group relative px-2 sm:px-3 py-2 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors",
                    isActive ? "text-navy" : "text-slate hover:text-navy",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="hidden md:inline mr-1.5 text-slate-light">{n.num}</span>
                    {n.label}
                    <span
                      className={cn(
                        "absolute left-2 right-2 -bottom-px h-px bg-copper transition-transform origin-left",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </>
                )}
                </NavLink>
              ),
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-navy-deep text-primary-foreground mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-light mb-3">Portfolio · 2026</div>
            <h3 className="font-serif text-3xl text-primary-foreground leading-tight">
              Optimizing the<br />Multi-Material Frontier.
            </h3>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-light mb-4">Contact</div>
            <a href="mailto:ethan.blair@colorado.edu" className="group flex items-center gap-2 mb-2 hover:text-copper transition-colors">
              <Mail className="h-4 w-4" /> ethan.blair@colorado.edu
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 hover:text-copper transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn / ethanblair
              <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />
            </a>
            <p className="mt-4 text-sm text-slate-light">
              University of Colorado Boulder<br />
              Department of Chemical & Biological Engineering
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-light mb-4">Sections</div>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.to}>
                  {n.external ? (
                    <a href={n.to} target="_blank" rel="noreferrer" className="font-mono text-xs tracking-wider uppercase hover:text-copper transition-colors">
                      <span className="text-slate-light mr-2">{n.num}</span>{n.label}
                    </a>
                  ) : (
                    <Link to={n.to} className="font-mono text-xs tracking-wider uppercase hover:text-copper transition-colors">
                      <span className="text-slate-light mr-2">{n.num}</span>{n.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-slate-light">
            <span>© 2026 Ethan Blair · All rights reserved</span>
            <span>Boulder, Colorado · 40.0150°N 105.2705°W</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;