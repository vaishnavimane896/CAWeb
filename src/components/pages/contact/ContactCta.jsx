import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactCta() {
  return (
    <section className="bg-primary py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[700px] mx-auto px-4 text-center"
      >
        <h2 className="font-heading font-bold text-3xl text-white">
          Still deciding? Let's talk it through.
        </h2>
        <p className="mt-3 text-slate-400">
          Send us a note and a senior partner will get back to you personally —
          no automated queues, no sales scripts.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Input placeholder="Enter your email" className="bg-white" />
          <Button className="bg-secondary hover:bg-secondary/90 text-white shrink-0 gap-1.5">
            <Send size={16} /> Send a Note
          </Button>
        </div>
      </motion.div>
    </section>
  );
}