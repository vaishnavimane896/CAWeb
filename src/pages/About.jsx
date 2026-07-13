import { motion } from "framer-motion";
import {
  Gavel,
  ArrowUpRight,
  Award,
  Users2,
  ShieldCheck,
  Globe2,
  Sparkles,
} from "lucide-react";
import { milestones, leadership } from "@/data/servicesData";

const quickStats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users2, value: "500+", label: "Corporate Clients" },
  { icon: ShieldCheck, value: "99.8%", label: "Compliance Rate" },
  { icon: Globe2, value: "15+", label: "Jurisdictions Served" },
];

export default function About() {
  const latestMilestone = milestones.find((m) => m.active) || milestones[0];

  return (
    <>
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-border rounded-xl p-8 flex flex-col"
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

          {/* Latest milestone highlight — replaces the old stats row */}
          <div className="mt-auto pt-6 border-t border-border">
            <div className="flex items-start gap-4 bg-secondary/5 border border-secondary/20 rounded-lg p-4">
              <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                <Sparkles size={17} />
              </div>
              <div>
                <p className="text-xs font-semibold text-secondary uppercase tracking-wide">
                  Latest Milestone · {latestMilestone.year}
                </p>
                <p className="text-sm text-primary mt-1 leading-relaxed">
                  {latestMilestone.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-primary rounded-xl p-8 flex flex-col justify-center"
        >
          <h2 className="font-heading font-semibold text-lg text-white mb-6">Sterling CA at a Glance</h2>
          <div className="grid grid-cols-2 gap-5">
            {quickStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-lg p-4"
              >
                <stat.icon size={18} className="text-secondary mb-3" />
                <p className="font-heading font-bold text-2xl text-white leading-none">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= NEW SECTION: Firm Milestones — zigzag timeline ================= */}
      <section className="bg-white border-y border-border py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
              Our Journey
            </span>
            <h2 className="font-heading font-bold text-3xl text-primary">Firm Milestones</h2>
            <p className="text-slate-600 mt-2">Nearly three decades of building trust, one milestone at a time.</p>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden sm:block">
              <motion.div
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full bg-secondary"
              />
            </div>

            <div className="space-y-10 sm:space-y-4">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={m.year}
                    className={`sm:grid sm:grid-cols-2 sm:gap-10 items-center ${
                      isLeft ? "" : ""
                    }`}
                  >
                    {/* Left slot */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                      className={`${isLeft ? "sm:text-right sm:pr-2" : "sm:order-2 sm:pl-2"}`}
                    >
                      {isLeft ? (
                        <MilestoneCard m={m} align="right" />
                      ) : (
                        <div className="hidden sm:block" />
                      )}
                    </motion.div>

                    {/* Right slot */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 24 : -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45 }}
                      className={`${isLeft ? "hidden sm:block" : "sm:pl-2"}`}
                    >
                      {!isLeft ? <MilestoneCard m={m} align="left" /> : null}
                    </motion.div>

                    {/* Mobile fallback (always left-aligned, stacked) */}
                    <div className="sm:hidden">
                      {isLeft ? null : <MilestoneCard m={m} align="left" mobileOnly />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16">
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
              className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-primary"
            >
              <img
                src={person.image}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

              {/* Link icon, appears on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={15} className="text-white" />
              </div>

              {/* Text content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-semibold text-white">{person.name}</h3>
                <p className="text-xs text-secondary font-medium mt-0.5">{person.title}</p>

                {/* Bio + tags reveal on hover */}
                <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300 ease-in-out">
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{person.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {person.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-white/10 text-white px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
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

function MilestoneCard({ m, align, mobileOnly }) {
  return (
    <div className={`relative ${mobileOnly ? "pl-6" : ""}`}>
      {/* Dot on the center line (desktop only, non-mobile-only cards) */}
      {!mobileOnly && (
        <span
          className={`hidden sm:block absolute top-5 w-3 h-3 rounded-full ${
            m.active ? "bg-secondary ring-4 ring-secondary/20" : "bg-slate-300"
          } ${align === "right" ? "-right-[52px]" : "-left-[52px]"}`}
        />
      )}
      {mobileOnly && (
        <span
          className={`sm:hidden absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full ${
            m.active ? "bg-secondary ring-4 ring-secondary/20" : "bg-slate-300"
          }`}
        />
      )}
      <div className={`bg-surface border border-border rounded-lg p-5 inline-block ${align === "right" ? "sm:ml-auto" : ""} w-full sm:w-auto sm:max-w-sm`}>
        <p className={`text-sm font-bold ${m.active ? "text-secondary" : "text-primary"}`}>{m.year}</p>
        <p className="text-sm text-slate-600 mt-1">{m.description}</p>
      </div>
    </div>
  );
}