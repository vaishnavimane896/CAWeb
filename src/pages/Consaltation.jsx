import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  ClipboardCheck,
  Presentation,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Briefcase,
  Landmark,
  ReceiptText,
  Gem,
  FileSearch,
  Award,
  Users2,
  Lock,
  PhoneCall,
  FileText,
  Handshake,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const steps = ["Consultation Mode", "Practice Area", "Schedule", "Finalize"];

const consultationTypes = [
  { id: "new-client", icon: Compass, color: "text-indigo-600", bg: "bg-indigo-50", title: "Discovery Consultation", description: "Initial 30-min strategy alignment session." },
  { id: "existing-review", icon: ClipboardCheck, color: "text-emerald-600", bg: "bg-emerald-50", title: "Corporate Review", description: "Deep-dive analysis on active advisory matters." },
  { id: "general-inquiry", icon: Presentation, color: "text-amber-600", bg: "bg-amber-50", title: "Strategic Briefing", description: "Quick consultation regarding upcoming changes." },
];

const serviceAreas = [
  { icon: Landmark, color: "text-indigo-600", bg: "bg-indigo-50", title: "Corporate Taxation & Structure", description: "Strategic planning, domestic & international cross-border compliance." },
  { icon: ReceiptText, color: "text-amber-600", bg: "bg-amber-50", title: "GST Advisory & Auditing", description: "Periodic structure reconciliation, filings, and regulatory reviews." },
  { icon: Gem, color: "text-rose-600", bg: "bg-rose-50", title: "Wealth Engineering", description: "Capital portfolio growth optimization, asset structuring, and planning." },
  { icon: FileSearch, color: "text-emerald-600", bg: "bg-emerald-50", title: "Statutory & Private Audits", description: "Comprehensive regulatory compliance checks and independent reporting." },
];

// --- New section data ---

const trustPoints = [
  { icon: Award, value: "15+", label: "Years of Practice" },
  { icon: Users2, value: "500+", label: "Corporate Clients" },
  { icon: ShieldCheck, value: "99.8%", label: "Compliance Success Rate" },
  { icon: Lock, value: "100%", label: "Confidential Engagements" },
];

const processTimeline = [
  {
    icon: PhoneCall,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Confirmation Call",
    description: "A member of our team reaches out within 2 business hours to confirm your slot and gather initial context.",
  },
  {
    icon: FileText,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Document Preparation",
    description: "We send a short checklist so the assigned partner walks into your session already briefed on your numbers.",
  },
  {
    icon: Handshake,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Strategy Session",
    description: "Meet your advisor — in person, via video, or by phone — for a focused, actionable session on your objectives.",
  },
];

const testimonials = [
  {
    quote: "Sterling CA restructured our cross-border tax position and saved us six figures within the first year. The discovery call alone was worth it.",
    name: "Meera Anand",
    title: "CFO, Vantage Logistics",
  },
  {
    quote: "Booking was effortless and the partner who called us back had clearly read our brief. Rare to see that level of preparation.",
    name: "Daniel Osei",
    title: "Founder, Osei & Farrow",
  },
  {
    quote: "We use them for statutory audit every year now. Precise, on schedule, and they explain findings in plain language.",
    name: "Priya Raghunathan",
    title: "Director of Finance, Nimbus Health",
  },
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
  const handleSubmit = () => setSubmitted(true);

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

          {/* Progress Indicator */}
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
                            <div className={`p-3 rounded-xl border transition-all ${
                              isSelected
                                ? "bg-primary text-white border-primary scale-105"
                                : `${t.bg} ${t.color} border-transparent`
                            }`}>
                              <t.icon size={18} strokeWidth={2.25} />
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
                        const AreaIcon = area.icon;
                        return (
                          <button
                            key={area.title}
                            onClick={() => update("service", area.title)}
                            className={`text-left border rounded-xl p-5 flex flex-col justify-between min-h-[160px] transition-all ${
                              isSelected
                                ? "border-primary bg-primary/[0.02] shadow-sm"
                                : "border-border hover:border-slate-300 bg-white"
                            }`}
                          >
                            <div className="flex flex-col gap-2">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                                isSelected
                                  ? "bg-primary text-white border-primary scale-105"
                                  : `${area.bg} ${area.color} border-transparent`
                              }`}>
                                <AreaIcon size={19} strokeWidth={2.25} />
                              </div>
                              <p className="text-sm font-bold text-primary tracking-tight leading-snug">{area.title}</p>
                            </div>
                            <div>
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
                      <h2 className="font-heading font-bold text-xl text-primary mb-2 flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                          <Calendar size={16} strokeWidth={2.25} />
                        </span>
                        Allocation Date
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
                      <h2 className="font-heading font-bold text-xl text-primary mb-2 flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <Clock size={16} strokeWidth={2.25} />
                        </span>
                        Window Slot
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

                {/* Step 3: Enterprise Metadata */}
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
                      <textarea
                        className="w-full rounded-lg border border-border p-3 text-sm bg-white focus:outline-none focus:border-primary"
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

            {/* Pagination Controls Footer */}
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

      {/* ================= SECTION 1: Trust Bar ================= */}
      <section className="border-y border-border bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {trustPoints.map((tp, i) => (
              <motion.div
                key={tp.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <tp.icon size={20} strokeWidth={2.25} />
                </div>
                <div>
                  <p className="font-heading font-black text-2xl text-primary leading-none tracking-tight">
                    {tp.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{tp.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: What Happens After You Book ================= */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
            The Process
          </span>
          <h2 className="font-heading font-black text-3xl text-primary tracking-tight">
            What Happens After You Book
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            No black box. Here's exactly what to expect once you lock your session.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {processTimeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white border border-border rounded-2xl p-6"
            >
              {/* FIXED: Removed 'absolute' and structured inside a flex container line inline with the icon */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                  <item.icon size={20} strokeWidth={2.25} />
                </div>
                <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
              </div>
              
              <h3 className="font-heading font-bold text-primary">{item.title}</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: Testimonials ================= */}
      <section className="bg-primary py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/20 border border-secondary/30 inline-block mb-3">
              Client Voices
            </span>
            <h2 className="font-heading font-black text-3xl text-white tracking-tight">
              Trusted by Finance Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <Quote size={20} className="text-secondary/50 mb-2" />
                <p className="text-sm text-slate-200 leading-relaxed">{t.quote}</p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}