import { motion } from "framer-motion";
import { stats } from "@/data/servicesData";

export default function MetricsSection() {
  return (
    <div className="space-y-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="border-l-2 border-secondary pl-4"
        >
          <p className="font-heading font-bold text-3xl md:text-4xl text-primary tabular-nums">
            {stat.value}
          </p>
          <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}