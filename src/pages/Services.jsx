import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Globe2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  serviceTabs,
  serviceDetails,
  methodology,
  industries,
  clientResources,
} from "@/data/servicesData";

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);

  return (
    <>
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 pt-16 pb-8">
        <h1 className="font-heading font-bold text-4xl text-primary">Expert Financial Solutions</h1>
        <p className="text-slate-600 mt-3 max-w-2xl">
          Comprehensive advisory and audit services tailored for high-net-worth
          individuals and corporate stakeholders seeking precision and growth.
        </p>

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

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {(serviceDetails[activeTab] || []).map((item, i) => (
              <AccordionItem
                key={item.title}
                value={`item-${i}`}
                className="bg-white border border-border rounded-lg px-5"
              >
                <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 space-y-4">
                  <div>
                    <p className="font-medium text-primary mb-1">Scope of Work</p>
                    <p>{item.scope}</p>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-1">Key Deliverables</p>
                    <ul className="list-disc list-inside space-y-0.5">
                      {item.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-primary mb-1">Typical Timeline</p>
                    <p>{item.timeline}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-10">
        <h2 className="font-heading font-bold text-2xl text-primary mb-8">Process & Methodology</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodology.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-border rounded-lg p-6 text-center"
            >
              <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center mx-auto mb-4 text-sm font-semibold">
                {step.step}
              </div>
              <h3 className="font-heading font-semibold text-primary">{step.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{step.description}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-slate-500">Deliverable</p>
                <p className="text-xs font-medium text-secondary">{step.deliverable}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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