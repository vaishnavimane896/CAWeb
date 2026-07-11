import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Hero from "@/pages/home/Hero";
import ServicesGrid from "@/pages/home/ServicesGrid";
import TaxReadinessWidget from "@/pages/home/TaxReadinessWidget";
import MetricsSection from "@/pages/home/MetricsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />

      <section className="bg-surface py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 grid md:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <TaxReadinessWidget />
          <MetricsSection />
        </div>
      </section>

      <section className="bg-primary py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[700px] mx-auto px-4 text-center"
        >
          <h2 className="font-heading font-bold text-3xl text-white">
            Ready to optimize your financial strategy?
          </h2>
          <p className="mt-3 text-slate-400">
            Connect with our senior partners for a confidential assessment of
            your current regulatory and financial standing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your business email"
              className="bg-white"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-white shrink-0">
              <Mail size={16} className="mr-1.5" /> Request Callback
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}