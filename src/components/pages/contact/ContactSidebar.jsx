import { MapPin, Phone, Mail } from "lucide-react";
import { regionalOffices } from "@/data/servicesData";

export default function ContactSidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-border rounded-xl overflow-hidden">
        
        {/* FAKE MAP PREVIEW */}
        <div className="h-40 bg-slate-100 relative overflow-hidden flex items-center justify-center border-b border-border">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #475569 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
          {/* Abstract roads */}
          <div className="absolute w-full h-3 bg-white/60 top-1/2 -rotate-12 transform origin-center"></div>
          <div className="absolute w-3 h-full bg-white/60 left-1/3 rotate-12 transform origin-center"></div>
          {/* Animated Marker */}
          <div className="relative z-10 flex flex-col items-center">
            <MapPin size={32} className="text-secondary fill-secondary/20 drop-shadow-md" />
            <div className="w-4 h-1 bg-black/20 rounded-[100%] mt-1 blur-[1px]"></div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-heading font-semibold text-primary mb-3">Sterling CA Firm</h3>
          <div className="space-y-2.5 text-sm text-slate-600">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="text-slate-400 mt-0.5 shrink-0" />
              100 Financial Plaza, Suite 400<br />Metropolis, NY 10004
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-slate-400 shrink-0" /> +1 (555) 019-2045
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-slate-400 shrink-0" /> advisory@sterlingca.com
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm font-medium text-primary">Join Our Team</p>
            <p className="text-xs text-slate-500">Looking for a career in finance?</p>
            <a href="#" className="text-xs font-medium text-secondary hover:underline">View Openings →</a>
          </div>
        </div>
      </div>

      <div className="bg-white border border-border rounded-xl p-6">
        <h3 className="font-heading font-semibold text-primary mb-4">Regional Liaison Offices</h3>
        <div className="space-y-4">
          {regionalOffices.map((office) => (
            <div key={office.city} className="flex items-start justify-between gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
              <div>
                <p className="text-sm font-medium text-primary">{office.city}</p>
                <p className="text-xs text-slate-500">Contact: {office.contact}</p>
              </div>
              <a href={`tel:${office.phone.replace(/[^\d+]/g, "")}`} className="text-xs font-medium text-secondary whitespace-nowrap mt-0.5 hover:underline">
                {office.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}