import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Globe2, Clock } from "lucide-react";

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

export default function SupportChannels() {
  return (
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
  );
}