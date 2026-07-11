import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Landmark,
  TrendingUp,
  FileCheck2,
  Users,
  MessageCircle,
  ClipboardList,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Building2,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const steps = ["Consultation Mode", "Practice Area", "Schedule", "Finalize"];

const consultationTypes = [
  { id: "new-client", icon: Users, title: "Discovery Consultation", description: "Initial 30-min strategy alignment session." },
  { id: "existing-review", icon: ClipboardList, title: "Corporate Review", description: "Deep-dive analysis on active advisory matters." },
  { id: "general-inquiry", icon: MessageCircle, title: "Strategic Briefing", description: "Quick consultation regarding upcoming changes." },
];

const serviceAreas = [
  { icon: Landmark, title: "Corporate Taxation & Structure", description: "Strategic planning, domestic & international cross-border compliance." },
  { icon: FileCheck2, title: "GST Advisory & Auditing", description: "Periodic structure reconciliation, filings, and regulatory reviews." },
  { icon: TrendingUp, title: "Wealth Engineering", description: "Capital portfolio growth optimization, asset structuring, and planning." },
  { icon: Building2, title: "Statutory & Private Audits", description: "Comprehensive regulatory compliance checks and independent reporting." },
];

function getUpcomingDates() {
  const dates = [];
  let d = new Date();
  while (dates.length < 6) {
    d = new Date(d.getTime() + 24 * 60 * 60 * 1000);
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      dates.push(new Date(d));
    }
  }
  return dates;
}

const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

export default function Consaltation() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    type: consultationTypes[0].id,
    service: serviceAreas[0].title,
    turnover: "",
    date: null,
    time: null,
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const dates = getUpcomingDates();
  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const canContinue = () => {
    if (step === 0) return !!form.type;
    if (step === 1) return !!form.service;
    if (step === 2) return !!form.date && !!form.time;
    if (step === 3) return form.name && form.email;
    return true;
  };

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-surface">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-white border border-border rounded-2xl p-8 md:p-12 text-center shadow-2xl shadow-slate-900/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 border border-secondary/20">
            <ShieldCheck size={32} className="text-secondary" />
          </div>
          <h1 className="font-heading font-black text-3xl text-primary tracking-tight">Booking Secured</h1>
          <p className="text-slate-600 mt-4 text-sm leading-relaxed">
            Thank you, <span className="text-primary font-bold">{form.name}</span>. Your slot for <span className="font-semibold text-primary">{form.service}</span> has been provisionally locked on our calendars.
          </p>
          <div className="my-6 p-4 bg-surface rounded-xl border border-border text-xs text-left text-slate-600 space-y-1.5">
            <p><span className="font-semibold text-primary">Time:</span> {form.time}</p>
            <p><span className="font-semibold text-primary">Date:</span> {form.date?.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            <p><span className="font-semibold text-primary">Firm Contact:</span> partner@sterlingca.com</p>
          </div>
          <Button
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-heading font-bold uppercase tracking-wider text-xs py-6 rounded-xl transition-all shadow-lg shadow-secondary/20"
            onClick={() => { setSubmitted(false); setStep(0); }}
          >
            Return to Dashboard
          </Button>
        </motion.div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-surface">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 lg:py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Interactive Briefing Board */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
              Corporate Intake
            </span>
            <h1 className="font-heading font-black text-3xl lg:text-4xl text-primary tracking-tight leading-none">
              Schedule Briefing
            </h1>
            <p className="text-slate-600 text-xs mt-3 leading-relaxed">
              Secure priority access to our corporate advisors. Lock in your session through our private scheduling ledger.
            </p>
          </div>

          {/* Mini dynamic receipt/tracker */}
          <div className="bg-white border border-border rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="font-heading font-bold text-xs text-primary uppercase tracking-wider pb-3 border-b border-border">
              Session Manifest
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start justify-between">
                <span className="text-slate-400">Engagement</span>
                <span className="font-semibold text-primary text-right max-w-[180px] truncate">
                  {consultationTypes.find(t => t.id === form.type)?.title || "Not selected"}
                </span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-slate-400">Practice Area</span>
                <span className="font-semibold text-primary text-right max-w-[180px] truncate">{form.service}</span>
              </div>
              {form.date && (
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Target Date</span>
                  <span className="font-semibold text-secondary">
                    {form.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </span>
                </div>
              )}
              {form.time && (
                <div className="flex items-start justify-between">
                  <span className="text-slate-400">Target Time</span>
                  <span className="font-semibold text-secondary">{form.time}</span>
                </div>
              )}
            </div>
          </div>

          {/* Flat Horizontal Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">
              <span>Progress</span>
              <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary" 
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Right Active Interactive Section */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-border/80 shadow-sm rounded-2xl p-6 md:p-10 min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex-1"
              >
                {/* Step 0: Type Selection */}
                {step === 0 && (
                  <div>
                    <h2 className="font-heading font-bold text-xl text-primary mb-2">Select Account Mode</h2>
                    <p className="text-xs text-slate-500 mb-6">Specify the operational umbrella for this advisory session.</p>
                    <div className="space-y-3">
                      {consultationTypes.map((t) => {
                        const isSelected = form.type === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => update("type", t.id)}
                            className={`w-full text-left border rounded-xl p-5 flex items-start gap-4 transition-all ${
                              isSelected 
                                ? "border-primary bg-primary/[0.02] shadow-sm" 
                                : "border-border hover:border-slate-300 bg-white"
                            }`}
                          >
                            <div className={`p-3 rounded-xl border ${isSelected ? "bg-primary text-white border-primary" : "bg-surface text-slate-600 border-border"}`}>
                              <t.icon size={18} />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-bold text-primary">{t.title}</p>
                              <p className="text-xs text-slate-500 leading-relaxed">{t.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 1: Services Selection */}
                {step === 1 && (
                  <div>
                    <h2 className="font-heading font-bold text-xl text-primary mb-2">Select Primary Scope</h2>
                    <p className="text-xs text-slate-500 mb-6">Choose the accounting, audit, or tax framework required.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {serviceAreas.map((area) => {
                        const isSelected = form.service === area.title;
                        return (
                          <button
                            key={area.title}
                            onClick={() => update("service", area.title)}
                            className={`text-left border rounded-xl p-5 flex flex-col justify-between h-44 transition-all ${
                              isSelected 
                                ? "border-primary bg-primary/[0.02] shadow-sm" 
                                : "border-border hover:border-slate-300 bg-white"
                            }`}
                          >
                            <div className={`p-2.5 rounded-lg inline-block ${isSelected ? "bg-primary text-white" : "bg-surface text-secondary"}`}>
                              <area.icon size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-primary tracking-tight leading-snug">{area.title}</p>
                              <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">{area.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 p-5 bg-surface rounded-xl border border-border flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Estimated Enterprise Turnover</label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                          <Input className="pl-9 bg-white" placeholder="e.g. $2M - $5M" value={form.turnover} onChange={(e) => update("turnover", e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time Booking */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading font-bold text-xl text-primary mb-2 flex items-center gap-2">
                        <Calendar size={18} className="text-secondary" /> Allocation Date
                      </h2>
                      <p className="text-xs text-slate-500 mb-4">Select an upcoming corporate business morning or afternoon.</p>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                        {dates.map((d) => {
                          const isSelected = form.date?.toDateString() === d.toDateString();
                          return (
                            <button
                              key={d.toISOString()}
                              onClick={() => update("date", d)}
                              className={`rounded-xl border p-3.5 text-center transition-all ${
                                isSelected ? "border-primary bg-primary text-white shadow-sm" : "border-border bg-white hover:border-slate-400"
                              }`}
                            >
                              <p className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                                {d.toLocaleDateString(undefined, { weekday: "short" })}
                              </p>
                              <p className="text-xl font-black my-0.5 tracking-tight">{d.getDate()}</p>
                              <p className={`text-[10px] font-medium uppercase tracking-wider ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                                {d.toLocaleDateString(undefined, { month: "short" })}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-2">
                      <h2 className="font-heading font-bold text-xl text-primary mb-2 flex items-center gap-2">
                        <Clock size={18} className="text-secondary" /> Window Slot
                      </h2>
                      <p className="text-xs text-slate-500 mb-4">Select a specific temporal asset interface block.</p>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                        {timeSlots.map((t) => {
                          const isSelected = form.time === t;
                          return (
                            <button
                              key={t}
                              onClick={() => update("time", t)}
                              className={`rounded-xl border py-3 text-xs font-bold tracking-wide transition-all ${
                                isSelected ? "border-secondary bg-secondary text-white shadow-sm" : "border-border bg-white text-slate-700 hover:border-slate-400"
                              }`}
                            >
                              {t}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Enterprise & Individual Metadata */}
                {step === 3 && (
                  <div>
                    <h2 className="font-heading font-bold text-xl text-primary mb-2">Corporate Identity Credentials</h2>
                    <p className="text-xs text-slate-500 mb-6">Complete secure field values to register authorization parameters.</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Full Name *</label>
                        <Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Alexander Wright" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Corporate Email *</label>
                        <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="wright@enterprise.com" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Secure Contact Line</label>
                        <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+1 (555) 019-2831" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Company Nomenclature</label>
                        <Input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Wright Holdings Ltd" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Executive Directives / Special Notes</label>
                      <Textarea
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Provide details on any complex structural updates or custom filing timelines required..."
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls Interface Footer */}
            <div className="flex items-center justify-between border-t border-border pt-6 mt-8">
              <Button 
                variant="ghost" 
                onClick={back} 
                disabled={step === 0} 
                className="gap-2 font-heading text-xs font-bold uppercase tracking-wider h-11 px-4 rounded-xl"
              >
                <ArrowLeft size={14} /> Back
              </Button>

              {step < steps.length - 1 ? (
                <Button
                  onClick={next}
                  disabled={!canContinue()}
                  className="bg-primary hover:bg-slate-900 text-white gap-2 font-heading text-xs font-bold uppercase tracking-wider h-11 px-6 rounded-xl transition-all"
                >
                  Next Component <ArrowRight size={14} />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canContinue()}
                  className="bg-secondary hover:bg-secondary/90 text-white gap-2 font-heading text-xs font-bold uppercase tracking-wider h-11 px-6 rounded-xl transition-all shadow-lg shadow-secondary/20 animate-pulse"
                >
                  Lock Session <CheckCircle size={14} />
                </Button>
              )}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}