import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-400 border-t border-border/10">
      {/* Upper Premium Layer: Contextual CTA / Engagement */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-16 pb-12 grid md:grid-cols-12 gap-8 items-center border-b border-white/[0.06]">
        <div className="md:col-span-7 space-y-2">
          <span className="text-[10px] uppercase tracking-[0.15em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block">
            Briefings & Tax Circulars
          </span>
          <h3 className="text-white font-heading font-bold text-xl md:text-2xl tracking-tight">
            Subscribe to our regulatory intelligence
          </h3>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            Critical statutory updates, fiscal changes, and compliance advisory sheets delivered monthly directly from our partners.
          </p>
        </div>
        
        <div className="md:col-span-5 w-full">
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 p-1.5 bg-white/[0.03] border border-white/10 rounded-xl focus-within:border-secondary/40 transition-all">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
              <Input 
                type="email" 
                placeholder="executive@firm.com" 
                className="bg-transparent border-0 h-9 pl-9 text-xs text-white focus-visible:ring-0 placeholder:text-slate-600 w-full"
              />
            </div>
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white font-heading font-bold text-[10px] uppercase tracking-wider h-9 px-4 rounded-lg flex items-center gap-1.5 shrink-0 transition-all">
              <span>Join Ledger</span>
              <ArrowRight size={12} />
            </Button>
          </form>
        </div>
      </div>

      {/* Middle Layer: Structured Links and Corporate Identity */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
        
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-4 space-y-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
              <span className="font-heading font-black text-white text-xs">S</span>
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-white">
              Sterling <span className="text-secondary">CA</span>
            </span>
          </Link>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            Institutional-grade fiduciary precision. Providing statutory auditing, tax engineering, and structural corporate compliance vectors for corporate entities.
          </p>
          <div className="flex gap-4 pt-2">
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <ShieldCheck size={14} className="text-secondary" />
              <span>ICAI Regulated</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
              <Building2 size={14} className="text-secondary" />
              <span>Peer Reviewed</span>
            </div>
          </div>
        </div>

        {/* Links: Services */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">Practice Scope</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link to="/services" className="hover:text-white transition-colors">Corporate Taxation</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Statutory Audit</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">GST Compliance</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Capital Advisory</Link></li>
          </ul>
        </div>

        {/* Links: Firm */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">The Firm</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link to="/about" className="hover:text-white transition-colors">Partners Profile</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Office Desk</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Charter</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Engagement</Link></li>
          </ul>
        </div>

        {/* Links: Communication Channels */}
        <div className="col-span-2 md:col-span-4 space-y-4">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider">HQ Secretariat</h4>
          <div className="space-y-3 text-xs">
            <a href="mailto:contact@sterlingca.com" className="flex items-center gap-2.5 hover:text-white transition-colors group">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.08] transition-colors">
                <Mail size={12} className="text-secondary" />
              </div>
              <span>contact@sterlingca.com</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center gap-2.5 hover:text-white transition-colors group">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.08] transition-colors">
                <Phone size={12} className="text-secondary" />
              </div>
              <span>+1 (555) 123-4567</span>
            </a>
            <div className="flex items-start gap-2.5 group">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 shrink-0">
                <MapPin size={12} className="text-secondary" />
              </div>
              <span className="leading-relaxed text-slate-400">Financial Tower, 4th Floor, Corporate Hub Area, 440001</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Layer: Legal & Authentication Footnotes */}
      <div className="bg-slate-950/40 border-t border-white/[0.04]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Sterling CA Firm. All global rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed for enterprise scaling</span>
            <span className="w-1 h-1 rounded-full bg-secondary mx-1" />
            <span className="text-slate-400 font-semibold">ICAI Regulatory Member</span>
          </div>
        </div>
      </div>
    </footer>
  );
}