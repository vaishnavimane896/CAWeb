import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { complianceEntities } from "@/data/servicesData";

export default function TaxReadinessWidget() {
  const [activeId, setActiveId] = useState(complianceEntities[0].id);
  const active = complianceEntities.find((e) => e.id === activeId);

  return (
    <div className="bg-white rounded-xl border border-border p-6">
      <h3 className="font-heading font-semibold text-lg text-primary">Compliance Readiness Engine</h3>
      <p className="text-sm text-slate-600 mt-1 mb-5">
        Select your entity profile to generate an initial compliance overview for FY 23-24.
      </p>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-5 hide-scrollbar">
        {complianceEntities.map((entity) => (
          <button
            key={entity.id}
            onClick={() => setActiveId(entity.id)}
            className={`whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
              activeId === entity.id
                ? "bg-primary text-white"
                : "bg-surface text-slate-600 hover:bg-slate-100"
            }`}
          >
            {entity.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={activeId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-4 divide-y divide-border"
        >
          {active.checklist.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 ${i > 0 ? "pt-4" : ""}`}>
              {item.status === "done" ? (
                <CheckCircle2 size={18} className="text-secondary mt-0.5 shrink-0" />
              ) : (
                <Clock size={18} className="text-slate-400 mt-0.5 shrink-0" />
              )}
              <div>
                <p className="text-sm font-medium text-primary">{item.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <a href="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-secondary hover:gap-2 transition-all">
        View Full Checklist <ArrowRight size={14} />
      </a>
    </div>
  );
}