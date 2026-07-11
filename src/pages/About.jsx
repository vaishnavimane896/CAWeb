import { motion } from "framer-motion";
import { Gavel, Link2 } from "lucide-react";
import { milestones, leadership } from "@/data/servicesData";

export default function About() {
  return (
    <>
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-border rounded-xl p-8"
        >
          <h1 className="font-heading font-bold text-4xl text-primary leading-tight">
            Precision, Integrity, Growth.
          </h1>
          <p className="mt-5 text-slate-600 leading-relaxed">
            At Sterling CA Firm, we navigate complex financial landscapes with
            uncompromising precision. Our mission is to provide high-net-worth
            individuals and corporate entities with strategic foresight,
            robust compliance, and actionable advisory that ensures long-term
            stability and sustainable growth. We are deeply committed to
            technological integration in financial reporting, leveraging
            modern tools to enhance accuracy, and maintaining ethical
            stewardship in an evolving regulatory landscape.
          </p>
          <div className="mt-8 pt-6 border-t border-border flex gap-8">
            <div>
              <p className="font-heading font-bold text-3xl text-primary">25+</p>
              <p className="text-sm text-slate-500">Years Experience</p>
            </div>
            <div>
              <p className="font-heading font-bold text-3xl text-primary">500+</p>
              <p className="text-sm text-slate-500">Corporate Clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-primary rounded-xl p-8"
        >
          <h2 className="font-heading font-semibold text-lg text-white mb-6">Firm Milestones</h2>
          <div className="relative pl-6 space-y-6 before:absolute before:left-[5px] before:top-1 before:bottom-1 before:w-px before:bg-white/20">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <span
                  className={`absolute -left-6 top-1 w-2.5 h-2.5 rounded-full ${
                    m.active ? "bg-secondary ring-4 ring-secondary/20" : "bg-white/40"
                  }`}
                />
                <p className={`text-sm font-semibold ${m.active ? "text-secondary" : "text-white"}`}>
                  {m.year}
                </p>
                <p className="text-sm text-slate-300 mt-0.5">{m.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-8">
        <h2 className="font-heading font-bold text-2xl text-primary">Leadership & Expertise</h2>
        <p className="text-slate-600 mt-1 mb-8">
          Our team of senior partners brings decades of specialized financial experience.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl overflow-hidden border border-border bg-white"
            >
              <img src={person.image} alt={person.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-primary">{person.name}</h3>
                  <Link2 size={14} className="text-slate-400" />
                </div>
                <p className="text-sm text-secondary font-medium">{person.title}</p>
                <p className="text-sm text-slate-600 mt-2">{person.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {person.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-surface text-slate-600 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-8 pb-16">
        <div className="bg-white border border-border rounded-xl p-8 flex gap-5">
          <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shrink-0">
            <Gavel size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg text-primary mb-2">Governance Framework</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sterling CA Firm operates under a robust governance framework
              that ensures absolute data integrity and client confidentiality.
              Our practices are strictly aligned with the regulatory standards
              established by the Institute of Chartered Accountants of India
              (ICAI) and SEBI regulations for corporate entities.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">
              We maintain international IFRS alignment across all cross-border
              engagements, ensuring that our audit and advisory services meet
              global benchmarks for professional ethics, independence, and
              objectivity. Our commitment to transparency and statutory
              compliance remains the cornerstone of our professional rigor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}