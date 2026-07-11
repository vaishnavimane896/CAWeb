import { motion } from "framer-motion";
import { BadgeCheck, TrendingUp, Building2, Landmark, Factory, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustIcons = [Building2, Landmark, Factory, Briefcase, Building2];
const bars = [40, 55, 48, 70, 85, 100];

export default function Hero() {
  return (
    <section className="bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full mb-6">
            <BadgeCheck size={14} /> ICAI Registered Firm
          </span>

          <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-primary">
            Precision Accounting.{" "}
            <span className="text-secondary">Strategic Growth.</span>
          </h1>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-lg">
            Risk-mitigated financial engineering for global enterprises. Expert
            financial advisory, statutory auditing, and compliance management
            for modern enterprises and high-net-worth individuals.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </div>

          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-xs font-medium text-slate-500 tracking-wide uppercase mb-4">
              Trusted by 50+ Fortune 500 Companies
            </p>
            <div className="flex gap-6 text-slate-400">
              {trustIcons.map((Icon, i) => (
                <Icon key={i} size={22} />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-xl border border-border shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Q3 Financials
            </span>
            <TrendingUp size={16} className="text-secondary" />
          </div>
          <div className="flex items-end gap-3 h-52">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.08 }}
                className={`flex-1 rounded-t-md ${
                  i === bars.length - 1 ? "bg-primary" : "bg-secondary/70"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}