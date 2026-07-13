import { motion } from "framer-motion";
import { 
  Mail, 
  Building2, 
  Cpu, 
  TrendingUp, 
  Globe 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Hero from "@/pages/home/Hero";
import ServicesGrid from "@/pages/home/ServicesGrid";
import TaxReadinessWidget from "@/pages/home/TaxReadinessWidget";
import MetricsSection from "@/pages/home/MetricsSection";

// Static data for the sections
const onboardingSteps = [
  {
    step: "01",
    title: "Discovery & Diagnostics",
    description: "Deep-dive analysis of your entity's current filing positions, compliance history, and internal control structures.",
    deliverable: "Gap Analysis Report",
  },
  {
    step: "02",
    title: "Strategic Alignment",
    description: "Designing a robust operational tax architecture mapped against evolving ICAI, SEBI, and global tax guidelines.",
    deliverable: "Implementation Roadmap",
  },
  {
    step: "03",
    title: "Execution & Oversight",
    description: "Executing precise quarterly audit cycles, filing schedules, and real-time transaction reporting systems.",
    deliverable: "Attestation & Filings",
  },
  {
    step: "04",
    title: "Continuous Guardrails",
    description: "Year-round strategic monitoring, proactive risk profiling, and instant advisory SLAs for incoming query resolutions.",
    deliverable: "Compliance Dashboard",
  },
];

const industries = [
  {
    icon: Cpu,
    title: "Technology & SaaS",
    description: "Navigating complex multi-jurisdictional tax implications, R&D tax credits, and recurring revenue recognition policies.",
    caseStudy: "Series B SaaS Tax Restructuring",
  },
  {
    icon: Building2,
    title: "Real Estate & Infra",
    description: "Structuring project-level compliance frameworks, cross-border investment flows, and dedicated joint-venture audits.",
    caseStudy: "Commercial REIT Pre-IPO Compliance",
  },
  {
    icon: TrendingUp,
    title: "Financial Services",
    description: "Regulatory reporting alignments under rigorous central banking and securities board mandates.",
    caseStudy: "AIF Fund Structuring Audit",
  },
  {
    icon: Globe,
    title: "Cross-Border Trade",
    description: "Comprehensive alignment of foreign entity compliance, transfer pricing documentation, and international tax treaties.",
    caseStudy: "Multi-Nation Transfer Pricing Defense",
  },
];

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

      {/* ================= NEW SECTION 1: Engagement Framework (Timeline) ================= */}
      <section className="bg-white border-y border-border py-20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
              Our Process
            </span>
            <h2 className="font-heading font-bold text-3xl text-primary">
              The Engagement Framework
            </h2>
            <p className="text-slate-600 mt-2">
              How we systematically analyze, restructure, and safeguard your corporate financial health.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal timeline connecting line on larger viewports */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-100">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-full bg-secondary"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {onboardingSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Badge */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-heading font-bold mb-5 ring-4 ring-white shadow-sm">
                    {step.step}
                  </div>
                  
                  <h3 className="font-heading font-semibold text-primary text-base">{step.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{step.description}</p>
                  
                  <div className="mt-5 pt-4 border-t border-dashed border-slate-200">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Core Deliverable</p>
                    <p className="text-xs font-semibold text-secondary mt-0.5">{step.deliverable}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* Call to Action Section */}
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