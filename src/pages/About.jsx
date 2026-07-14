import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Gavel,
  ArrowUpRight,
  Award,
  Users2,
  ShieldCheck,
  Globe2,
  Sparkles,
  X,
  Mail,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { milestones, leadership } from "@/data/servicesData";

// Refactored stats array to separate target numbers from their formatting suffixes/precisions
const quickStats = [
  { icon: Award, value: 25, suffix: "+", decimals: 0, label: "Years Experience" },
  { icon: Users2, value: 500, suffix: "+", decimals: 0, label: "Corporate Clients" },
  { icon: ShieldCheck, value: 99.8, suffix: "%", decimals: 1, label: "Compliance Rate" },
  { icon: Globe2, value: 15, suffix: "+", decimals: 0, label: "Jurisdictions Served" },
];

export default function About() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const latestMilestone = milestones.find((m) => m.active) || milestones[0];

  // Sort milestones chronologically ascending
  const chronologicalMilestones = [...milestones].sort(
    (a, b) => parseInt(a.year) - parseInt(b.year)
  );

  return (
    <div className="bg-slate-50/50 min-h-screen relative">
      
      {/* SECTION 1: HERO & STATS GRID */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-border rounded-xl p-8 flex flex-col justify-between shadow-sm"
        >
          <div>
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
          </div>

          {/* Latest milestone highlight */}
          <div className="mt-8 pt-6 border-t border-border">
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
          className="bg-primary rounded-xl p-8 flex flex-col justify-center shadow-lg"
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
                <p className="font-heading font-bold text-2xl text-white leading-none">
                  <AnimatedCounter 
                    target={stat.value} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </p>
                <p className="text-xs text-slate-400 mt-1.5">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: Firm Milestones Timeline */}
      <section className="bg-white border-y border-border py-20 overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
              Our Journey
            </span>
            <h2 className="font-heading font-bold text-3xl text-primary">Firm Milestones</h2>
            <p className="text-slate-600 mt-2">Nearly three decades of building trust, one milestone at a time.</p>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block">
              <motion.div
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full bg-secondary"
              />
            </div>

            {/* Timeline Rows */}
            <div className="space-y-10 md:space-y-12 relative">
              {chronologicalMilestones.map((m, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div key={m.year} className="relative">
                    
                    {/* Desktop alternations */}
                    <div className="hidden md:grid grid-cols-2 gap-12 items-center w-full">
                      <div className={`flex ${isLeft ? "justify-end text-right" : "justify-start opacity-0 pointer-events-none"}`}>
                        {isLeft && (
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="max-w-[340px] w-full"
                          >
                            <MilestoneCard m={m} align="right" />
                          </motion.div>
                        )}
                      </div>

                      <div className={`flex ${!isLeft ? "justify-start text-left" : "justify-end opacity-0 pointer-events-none"}`}>
                        {!isLeft && (
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="max-w-[340px] w-full"
                          >
                            <MilestoneCard m={m} align="left" />
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Timeline Center Dot */}
                    <span
                      className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-[3px] border-white z-10 transition-colors duration-300 ${
                        m.active 
                          ? "bg-secondary ring-4 ring-secondary/20" 
                          : "bg-slate-300 shadow-sm"
                      }`}
                    />

                    {/* Mobile Layout */}
                    <div className="block md:hidden pl-8 border-l-2 border-slate-100 relative ml-3">
                      <span
                        className={`absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white ${
                          m.active ? "bg-secondary ring-4 ring-secondary/15" : "bg-slate-300"
                        }`}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                      >
                        <MilestoneCard m={m} align="left" mobile />
                      </motion.div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP TEAM */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-20">
        <h2 className="font-heading font-bold text-2xl text-primary">Leadership & Expertise</h2>
        <p className="text-slate-600 mt-1 mb-8">
          Our team of senior partners brings decades of specialized financial experience. Click any card to view detailed profiles.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelectedPerson(person)}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-primary shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={person.image}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

              {/* Arrow Indicator Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={15} className="text-white" />
              </div>

              {/* Text Bottom Metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-semibold text-white text-lg leading-tight">{person.name}</h3>
                <p className="text-xs text-secondary font-medium mt-1">{person.title}</p>
                <p className="text-[11px] text-slate-300 mt-2 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {person.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILS DIALOG / MODAL SYSTEM */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPerson(null)}
            className="fixed inset-0 bg-primary/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-border flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPerson(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/45 backdrop-blur-sm hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close details"
              >
                <X size={16} />
              </button>

              {/* Image side */}
              <div className="md:w-2/5 aspect-[4/5] md:aspect-auto relative bg-primary shrink-0">
                <img
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 md:hidden to-transparent" />
              </div>

              {/* Info text details side */}
              <div className="p-6 md:p-8 flex flex-col justify-between md:w-3/5">
                <div>
                  <span className="text-xs text-secondary font-bold uppercase tracking-wider">
                    Senior Leadership
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-primary mt-1">
                    {selectedPerson.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 mt-0.5">
                    {selectedPerson.title}
                  </p>

                  <hr className="my-4 border-slate-100" />

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedPerson.bio}
                  </p>

                  {/* Additional Dynamic Metadata Sections */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Briefcase size={16} className="text-secondary shrink-0" />
                      <span className="text-xs font-medium">Expertise Areas: Tax Law, Advisory</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <GraduationCap size={16} className="text-secondary shrink-0" />
                      <span className="text-xs font-medium">Education: Chartered Accountancy (ICAI)</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Tags & Contact */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPerson.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold bg-secondary/10 text-secondary px-2.5 py-1 rounded-md border border-secondary/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:info@sterlingca.com?subject=Inquiry for ${selectedPerson.name}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors"
                  >
                    <Mail size={14} /> Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 4: GOVERNANCE FRAMEWORK */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-8 pb-24">
        <div className="bg-white border border-border rounded-xl p-8 flex flex-col md:flex-row gap-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-border">
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
    </div>
  );
}

{/* TIMELINE HELPER COMPONENT */}
function MilestoneCard({ m, align, mobile }) {
  const isRight = align === "right";

  return (
    <div className={`bg-white border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 ${
      isRight && !mobile ? "border-r-4 border-r-secondary" : "border-l-4 border-l-secondary"
    }`}>
      <p className={`font-heading font-extrabold text-lg leading-none tracking-tight ${
        m.active ? "text-secondary" : "text-primary"
      }`}>
        {m.year}
      </p>
      <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
        {m.description}
      </p>
    </div>
  );
}

{/* REUSABLE ANIMATED COUNTER COMPONENT */}
function AnimatedCounter({ target, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  
  // Triggers animation only when the counter card scrolls into view
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, (latest) => latest.toFixed(decimals));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Animate from 0 to the target value over a duration of 1.5 seconds
      const controls = animate(count, target, {
        duration: 1.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, target]);

  // Keep React state updated when the MotionValue transforms
  useEffect(() => {
    return roundedValue.on("change", (latest) => setDisplayValue(latest));
  }, [roundedValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}