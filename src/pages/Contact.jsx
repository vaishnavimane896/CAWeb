import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  HelpCircle,
  CheckCircle2,
  MessageCircle,
  Clock,
  Send,
  Globe2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  contactServiceAreas,
  bookingFaq,
  regionalOffices,
} from "@/data/servicesData";

const steps = ["Type", "Service Type", "Date/Time", "Details"];

// New section data
const supportChannels = [
  {
    icon: Mail,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Email Support",
    detail: "advisory@sterlingca.com",
    response: "Typical response within 4 business hours.",
  },
  {
    icon: Phone,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Phone Line",
    detail: "+1 (555) 019-2045",
    response: "Mon-Fri, 9:00 AM - 7:00 PM (ET).",
  },
  {
    icon: MessageCircle,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Live Chat",
    detail: "Available on this site",
    response: "Instant reply during business hours.",
  },
  {
    icon: Globe2,
    color: "text-rose-600",
    bg: "bg-rose-50",
    title: "Regional Desks",
    detail: "Mumbai, Bangalore, Hyderabad",
    response: "Local-language support available.",
  },
];

export default function Contact() {
  const [selected, setSelected] = useState(contactServiceAreas[0].title);

  return (
    <>
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

            {/* Regional Liaison Offices now lives here, replacing the FAQ card */}
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold text-primary mb-4">Regional Liaison Offices</h3>
              <div className="space-y-4">
                {regionalOffices.map((office) => (
                  <div key={office.city} className="flex items-start justify-between gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-primary">{office.city}</p>
                      <p className="text-xs text-slate-500">Contact: {office.contact}</p>
                    </div>
                    <a href={`tel:${office.phone.replace(/[^\d+]/g, "")}`} className="text-xs font-medium text-secondary whitespace-nowrap mt-0.5">
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: Booking FAQ (now full-width) ================= */}
      <section className="bg-white border-y border-border">
        <div className="max-w-[900px] mx-auto px-4 md:px-12 py-16">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
              Good to Know
            </span>
            <h2 className="font-heading font-bold text-3xl text-primary">Booking FAQ</h2>
            <p className="text-slate-600 mt-2">Answers to what people usually ask before scheduling.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {bookingFaq.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`faq-${i}`}
                className="bg-surface border border-border rounded-lg px-5"
              >
                <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline gap-3">
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={15} className="text-secondary shrink-0" />
                    {item.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 pl-[26px]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ================= SECTION: Support Channels ================= */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-20">
        <div className="max-w-2xl mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
            Reach Us
          </span>
          <h2 className="font-heading font-bold text-3xl text-primary">Support Channels</h2>
          <p className="text-slate-600 mt-2">Pick whichever way works best for you — we're responsive on all of them.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, i) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-border rounded-xl p-6"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${channel.bg} ${channel.color}`}>
                <channel.icon size={20} strokeWidth={2.25} />
              </div>
              <h3 className="font-heading font-semibold text-primary">{channel.title}</h3>
              <p className="text-sm text-secondary font-medium mt-1">{channel.detail}</p>
              <p className="text-xs text-slate-500 mt-2 flex items-start gap-1.5">
                <Clock size={12} className="mt-0.5 shrink-0" />
                {channel.response}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION: Closing CTA ================= */}
      <section className="bg-primary py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[700px] mx-auto px-4 text-center"
        >
          <h2 className="font-heading font-bold text-3xl text-white">
            Still deciding? Let's talk it through.
          </h2>
          <p className="mt-3 text-slate-400">
            Send us a note and a senior partner will get back to you personally —
            no automated queues, no sales scripts.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="bg-white" />
            <Button className="bg-secondary hover:bg-secondary/90 text-white shrink-0 gap-1.5">
              <Send size={16} /> Send a Note
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}