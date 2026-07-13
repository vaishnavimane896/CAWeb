import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Globe2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Users2,
  Zap,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  serviceTabs,
  serviceDetails,
  methodology,
  industries,
  clientResources,
} from "@/data/servicesData";

const differentiators = [
  {
    icon: ShieldCheck,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Regulatory Precision",
    description: "Every engagement is cross-checked against the latest ICAI, SEBI, and IFRS standards before it reaches you.",
  },
  {
    icon: Users2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Senior Partner Access",
    description: "You work directly with a senior partner, not a rotating junior team — continuity from day one.",
  },
  {
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Responsive by Default",
    description: "Standard SLA of under 4 business hours for any client query, audit-season or not.",
  },
  {
    icon: Award,
    color: "text-rose-600",
    bg: "bg-rose-50",
    title: "15+ Years, Proven Record",
    description: "A 99.8% compliance success rate across 500+ active corporate clients.",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);

  return (
    <>
      {/* Services Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 pt-16 pb-8">
        <h1 className="font-heading font-bold text-4xl text-primary">Expert Financial Solutions</h1>
        <p className="text-slate-600 mt-3 max-w-2xl">
          Comprehensive advisory and audit services tailored for high-net-worth
          individuals and corporate stakeholders seeking precision and growth.
        </p>

        {/* Tab Navigation */}
        <div className="flex gap-6 overflow-x-auto mt-8 border-b border-border hide-scrollbar">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-secondary text-secondary"
                  : "border-transparent text-slate-500 hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Static, Attractive Service Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6 mt-8"
        >
          {(serviceDetails[activeTab] || []).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="bg-white border border-border rounded-xl p-6 flex flex-col justify-between shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <h3 className="font-heading font-bold text-lg text-primary">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{item.scope}</p>
                </div>

                {/* Deliverables */}
                <div className="mb-6">
                  <p className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2.5">
                    {item.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Footer Pin */}
              <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100 mt-auto bg-slate-50/50 -mx-6 -mb-6 px-6 pb-4 rounded-b-xl">
                <Clock size={15} className="text-slate-400 shrink-0" />
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-slate-400 font-medium">Timeline:</span>
                  <span className="font-semibold text-slate-700">{item.timeline}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process & Methodology */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16">
        <h2 className="font-heading font-bold text-2xl text-primary mb-12">Process & Methodology</h2>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-secondary"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {methodology.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-base font-heading font-bold mb-5 ring-4 ring-surface">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-primary">{step.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{step.description}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-slate-500">Deliverable</p>
                  <p className="text-xs font-medium text-secondary mt-0.5">{step.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-white border-y border-border py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
              Why Sterling CA
            </span>
            <h2 className="font-heading font-bold text-3xl text-primary">
              Why Partner With Us
            </h2>
            <p className="text-slate-600 mt-2">
              What actually changes when you work with us instead of a generic accounting shop.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-surface border border-border rounded-xl p-6"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                  <item.icon size={20} strokeWidth={2.25} />
                </div>
                <h3 className="font-heading font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-10">
        <h2 className="font-heading font-bold text-2xl text-primary mb-8">Industry Specializations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-border rounded-lg p-6"
            >
              <ind.icon size={22} className="text-secondary mb-4" />
              <h3 className="font-heading font-semibold text-primary">{ind.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{ind.description}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-slate-500">Case Study</p>
                <p className="text-xs font-medium text-primary">{ind.caseStudy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Resources */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-10">
        <h2 className="font-heading font-bold text-2xl text-primary mb-8">Client Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {clientResources.map((res) => (
            <div key={res.title} className="bg-white border border-border rounded-lg p-5 flex items-center justify-between">
              <div>
                <p className="font-medium text-primary text-sm">{res.title}</p>
                <p className="text-xs text-slate-500 mt-1">{res.description}</p>
              </div>
              <button className="w-9 h-9 rounded-md bg-surface flex items-center justify-center shrink-0">
                <Download size={16} className="text-slate-600" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-10">
        <h2 className="font-heading font-bold text-2xl text-primary mb-8">Global Presence</h2>
        <div className="bg-surface border border-border rounded-xl p-8 grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-heading font-semibold text-lg text-primary mb-2">Global Network</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Through our strategic alliances, we provide seamless advisory
              services across 15+ jurisdictions, ensuring your international
              operations remain compliant and optimized.
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4 text-sm text-secondary font-medium">
              <li>North America</li>
              <li>European Union</li>
              <li>Middle East</li>
              <li>South East Asia</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-border p-6 flex flex-col items-center justify-center text-center">
            <Globe2 size={28} className="text-secondary mb-3" />
            <p className="font-heading font-semibold text-primary">Cross-Border Expertise</p>
            <p className="text-sm text-slate-600 mt-1">
              Handling complex international tax treaties and foreign entity compliance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 pb-20">
        <div className="bg-primary rounded-xl p-12 text-center">
          <h2 className="font-heading font-bold text-2xl text-white">Not sure what you need?</h2>
          <p className="text-slate-400 mt-2">
            Let's discuss your specific financial landscape and determine the best path forward.
          </p>
          <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-white">
            Book a 15-min discovery call
          </Button>
        </div>
      </section>
    </>
  );
}