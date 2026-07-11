import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-lg text-primary">
          Sterling CA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                pathname === link.to
                  ? "text-secondary"
                  : "text-slate-600 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm">Call Us</Button>
          <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white">
            Book Consultation
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-600">
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="bg-secondary text-white w-full">Book Consultation</Button>
        </div>
      )}
    </header>
  );
}