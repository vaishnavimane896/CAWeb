import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { coreCompetencies } from "@/data/servicesData";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading font-bold text-3xl text-primary">Core Competencies</h2>
          <p className="mt-3 text-slate-600">
            Structured financial solutions designed to mitigate risk and accelerate sustainable enterprise growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coreCompetencies.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-surface"
            >
              <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                <item.icon size={20} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              <a href="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}