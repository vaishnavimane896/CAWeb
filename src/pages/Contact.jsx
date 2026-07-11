import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, HelpCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  contactServiceAreas,
  bookingFaq,
  regionalOffices,
} from "@/data/servicesData";

const steps = ["Type", "Service Type", "Date/Time", "Details"];

export default function Contact() {
  const [selected, setSelected] = useState(contactServiceAreas[0].title);

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16">
      <h1 className="font-heading font-bold text-4xl text-primary">Schedule a Consultation</h1>
      <p className="text-slate-600 mt-3 max-w-xl">
        Connect with our advisory team to discuss your financial strategy and compliance requirements.
      </p>

      <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-8">
        <div>
          {/* Stepper */}
          <div className="flex items-center mb-8">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                      i === 0
                        ? "bg-secondary text-white"
                        : "bg-white border border-border text-slate-400"
                    }`}
                  >
                    {i}
                  </div>
                  <span className={`text-xs mt-1.5 ${i === 0 ? "text-primary font-medium" : "text-slate-400"}`}>
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && <div className="flex-1 h-px bg-border mx-2 mb-5" />}
              </div>
            ))}
          </div>

          <div className="bg-white border border-border rounded-xl p-8">
            <h2 className="font-heading font-semibold text-lg text-primary mb-5">Select Area of Interest</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactServiceAreas.map((area) => (
                <motion.button
                  key={area.title}
                  onClick={() => setSelected(area.title)}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left border rounded-lg p-4 transition-colors ${
                    selected === area.title
                      ? "border-secondary bg-secondary/5"
                      : "border-border hover:border-slate-300"
                  }`}
                >
                  <area.icon size={20} className="text-secondary mb-2" />
                  <p className="text-sm font-semibold text-primary">{area.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{area.description}</p>
                </motion.button>
              ))}
            </div>

            <div className="mt-5 bg-surface rounded-md px-4 py-2.5 flex items-center gap-2 text-sm text-primary">
              <CheckCircle2 size={16} className="text-secondary" />
              Selected: <span className="font-medium">{selected}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Annual Turnover</label>
                <Input placeholder="e.g. $5M+" />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-1.5 block">Current Auditor</label>
                <Input placeholder="Firm Name" />
              </div>
            </div>

            <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-white">
              Continue to Schedule
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="h-40 bg-surface flex items-center justify-center text-slate-400 text-sm">
              Map preview
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
                <a href="#" className="text-xs font-medium text-secondary">View Openings →</a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-xl p-6">
            <h3 className="font-heading font-semibold text-primary mb-4">Booking FAQ</h3>
            <div className="space-y-4">
              {bookingFaq.map((item) => (
                <div key={item.q} className="flex gap-2.5">
                  <HelpCircle size={15} className="text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-primary">{item.q}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-border rounded-xl p-6">
            <h3 className="font-heading font-semibold text-primary mb-4">Regional Liaison Offices</h3>
            <div className="space-y-4">
              {regionalOffices.map((office) => (
                <div key={office.city}>
                  <p className="text-sm font-medium text-primary">{office.city}</p>
                  <p className="text-xs text-slate-500">Contact: {office.contact}</p>
                  <p className="text-xs text-slate-500">{office.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}