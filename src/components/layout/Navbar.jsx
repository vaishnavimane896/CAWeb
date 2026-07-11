import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Handle scroll animation effect for navbar background scaling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-surface-card/80 backdrop-blur-xl h-16 border-b border-border/50 shadow-sm" 
          : "bg-surface-card/0 h-20"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        
        {/* Brand/Logo with Interactive Text Sliding Effect */}
        <Link to="/" className="flex items-center gap-2.5 group relative overflow-hidden py-1">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-slate-900 flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] shadow-md shadow-primary/10">
            <ShieldCheck size={18} className="text-secondary animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base tracking-tight text-primary transition-all duration-300 group-hover:text-secondary">
              Sterling CA
            </span>
            <span className="text-[9px] tracking-[0.2em] font-bold text-slate-600 uppercase transition-all duration-300 group-hover:translate-x-0.5">
              Secure Growth
            </span>
          </div>
        </Link>

        {/* Animated Slide-Line Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/60 border border-border/60 p-1 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 ease-out overflow-hidden group/link ${
                  isActive
                    ? "text-primary-foreground bg-primary shadow-sm"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Background sliding capsule fill effect for hover states */}
                {!isActive && (
                  <span className="absolute inset-0 bg-secondary/10 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Dynamic Action Buttons Group */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-primary transition-colors py-2 relative group"
          >
            <span>Call Desk</span>
            <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
          </Link>
          
          <Button 
            size="sm" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold text-xs uppercase tracking-wider px-6 h-10 rounded-xl relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30 group"
          >
            <span className="flex items-center gap-2">
              Consultation
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Button>
        </div>

        {/* Magnetic Style Hamburger Trigger */}
        <button 
          className="md:hidden p-2.5 text-primary hover:bg-surface border border-border/40 rounded-xl transition-all duration-300 active:scale-95" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <X size={20} className={`absolute transition-all duration-500 ease-spring ${open ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-50"}`} />
            <Menu size={20} className={`absolute transition-all duration-500 ease-spring ${!open ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-50"}`} />
          </div>
        </button>
      </div>

      {/* Spring-Animated Mobile Dropdown Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface-card/95 backdrop-blur-2xl border-b border-border shadow-2xl transition-all duration-500 ease-in-out origin-top ${
          open 
            ? "opacity-100 transform scale-y-100 pointer-events-auto" 
            : "opacity-0 transform scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.to;
              return (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setOpen(false)} 
                  style={{ transitionDelay: open ? `${idx * 50}ms` : '0ms' }}
                  className={`text-base font-heading font-bold p-4 rounded-xl flex items-center justify-between border transition-all duration-300 ${
                    isActive 
                      ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/10 translate-x-2" 
                      : "bg-surface/50 border-border/40 text-slate-600 hover:text-primary hover:bg-surface hover:translate-x-1"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className={`transition-transform duration-300 ${isActive ? "opacity-100 rotate-45" : "opacity-30 group-hover:opacity-100"}`} />
                </Link>
              );
            })}
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Mobile Navigation Interactive Actions */}
          <div className="flex flex-col gap-3">
            <Button 
              variant="outline"
              className="w-full bg-surface-card border-border/80 text-slate-900 font-heading font-bold text-xs uppercase tracking-wider py-5 rounded-xl transition-all hover:bg-surface"
            >
              Secure Hotline
            </Button>
            <Button 
              className="bg-secondary text-secondary-foreground font-heading font-bold text-xs uppercase tracking-wider w-full py-5 rounded-xl shadow-lg shadow-secondary/10 active:scale-[0.99] transition-transform"
            >
              Book Corporate Advisory
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}