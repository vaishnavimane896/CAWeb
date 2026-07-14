import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactServiceAreas } from "@/data/servicesData";

const steps = ["Type", "Service Type", "Date/Time", "Details"];

export default function ConsultationForm() {
  const [selected, setSelected] = useState(contactServiceAreas[0].title);

  return (
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
  );
}