import { Landmark, FileCheck2, TrendingUp, Building2, Laptop, Factory, HeartPulse } from "lucide-react";

// Used on Home ("Core Competencies") and can be reused on Services
export const coreCompetencies = [
  {
    icon: Landmark,
    title: "Tax & Regulatory",
    description:
      "Comprehensive direct and indirect tax structuring, compliance management, and litigation support. Specializing in international transfer pricing and cross-border tax optimization.",
  },
  {
    icon: FileCheck2,
    title: "Statutory Audit",
    description:
      "Rigorous financial statement audits ensuring complete regulatory adherence and stakeholder transparency. Independent assurance using advanced data analytics and predictive risk modeling.",
  },
  {
    icon: TrendingUp,
    title: "Corporate Advisory",
    description:
      "Strategic financial planning, mergers & acquisitions support, and capital structuring for enterprise scale. Strategic capital restructuring, M&A due diligence, and IPO readiness advisory.",
  },
];

// Services page tabs
export const serviceTabs = [
  { id: "direct-tax", label: "Direct Tax" },
  { id: "indirect-tax", label: "Indirect Tax (GST)" },
  { id: "audit", label: "Audit & Assurance" },
  { id: "business-setup", label: "Business Setup" },
  { id: "virtual-cfo", label: "Virtual CFO" },
];

export const serviceDetails = {
  "direct-tax": [
    {
      title: "Corporate Tax Planning",
      scope: "Strategic analysis of corporate structures to optimize tax liabilities in compliance with current regulations.",
      deliverables: ["Quarterly Tax Optimization Reports", "Annual Filing Preparation", "Tax Risk Assessment Document"],
      timeline: "Ongoing quarterly review; 4-6 weeks for annual comprehensive planning.",
    },
    {
      title: "Individual Tax Advisory (HNI)",
      scope: "Bespoke wealth management and tax compliance services for high-net-worth individuals.",
      deliverables: ["Personalized Wealth & Tax Blueprint", "Capital Gains Optimization Strategy", "Estate Planning Framework"],
      timeline: "2-4 weeks for initial blueprint; bi-annual review sessions.",
    },
  ],
  "indirect-tax": [
    {
      title: "GST Compliance & Advisory",
      scope: "Comprehensive GST advisory, compliance, and representational services tailored for complex supply chains.",
      deliverables: ["Monthly/Quarterly GSTR Filings", "Input Tax Credit (ITC) Reconciliation Reports", "Annual Return (GSTR-9) Preparation"],
      timeline: "Monthly recurring compliance; customized timeline for specific advisory matters.",
    },
  ],
  audit: [
    {
      title: "Statutory Audit",
      scope: "Independent examination of financial records to ensure compliance with statutory reporting requirements.",
      deliverables: ["Audited Financial Statements", "Independent Auditor's Report", "Management Letter outlining internal control observations"],
      timeline: "4-8 weeks depending on company size and complexity.",
    },
  ],
  "business-setup": [
    {
      title: "Company Incorporation",
      scope: "End-to-end support in structuring and registering new business entities.",
      deliverables: ["Entity Structuring Advisory Document", "Incorporation Certificate & PAN/TAN", "Initial Compliance Checklist"],
      timeline: "2-3 weeks for standard Pvt Ltd incorporation.",
    },
  ],
  "virtual-cfo": [
    {
      title: "Virtual CFO Services",
      scope: "Strategic financial leadership on a fractional basis for growing enterprises.",
      deliverables: ["Monthly MIS Dashboards", "Cash Flow Forecasting Models", "Board Presentation Decks"],
      timeline: "Ongoing retainer basis with weekly/bi-weekly touchpoints.",
    },
  ],
};

export const methodology = [
  { step: "1", title: "Assessment", description: "Deep dive into current financial standing and objectives.", deliverable: "Gap Analysis Report" },
  { step: "2", title: "Strategy", description: "Formulating tailored solutions and actionable blueprints.", deliverable: "Implementation Roadmap" },
  { step: "3", title: "Execution", description: "Seamless implementation of strategies with precision.", deliverable: "Monthly Compliance Filing" },
  { step: "4", title: "Monitoring", description: "Continuous review and adaptation to regulatory changes.", deliverable: "Annual Impact Audit" },
];

export const industries = [
  { icon: Building2, title: "Real Estate", description: "Tax structuring for joint ventures and regulatory compliance.", caseStudy: "Structured tax for a $200M REIT portfolio." },
  { icon: Laptop, title: "Technology", description: "Startup advisory, ESOP structuring, and cross-border taxation.", caseStudy: "Optimized tax for a $500M Tech Unicorn." },
  { icon: Factory, title: "Manufacturing", description: "Cost audits, supply chain optimization, and GST advisory.", caseStudy: "Reduced GST leakage by 15% for auto-parts major." },
  { icon: HeartPulse, title: "Healthcare", description: "Revenue cycle management and regulatory financial compliance.", caseStudy: "Managed financial compliance for 50+ hospital chain." },
];

export const clientResources = [
  { title: "FY 24-25 Tax Planner", description: "Comprehensive guide for the current financial year." },
  { title: "Compliance Calendar", description: "Never miss a statutory deadline with our monthly tracker." },
  { title: "White Papers", description: "In-depth analysis of global tax trends." },
  { title: "Budget Analysis 2024", description: "Key takeaways from the latest fiscal policy." },
];

export const complianceEntities = [
  {
    id: "private-limited",
    label: "Private Limited",
    checklist: [
      { status: "done", title: "Annual Return Filing (AOC-4 & MGT-7)", note: "Due within 30/60 days of AGM." },
      { status: "done", title: "Income Tax Return (ITR-6)", note: "Mandatory e-filing post audit." },
      { status: "pending", title: "DIR-3 KYC", note: "Annual director KYC update." },
      { status: "done", title: "ESG Compliance Reporting", note: "Sustainability disclosure requirements." },
      { status: "done", title: "Cross-border Transfer Pricing", note: "Master file and local file documentation." },
    ],
  },
  {
    id: "startup",
    label: "Startup (DPIIT)",
    checklist: [
      { status: "done", title: "Angel Tax Exemption Filing", note: "DPIIT recognition compliance." },
      { status: "pending", title: "ESOP Pool Documentation", note: "Vesting schedule disclosure." },
      { status: "done", title: "Annual Return Filing", note: "Due within 30/60 days of AGM." },
    ],
  },
  {
    id: "individual",
    label: "Individual (HNI)",
    checklist: [
      { status: "done", title: "Income Tax Return (ITR-2/3)", note: "Capital gains & foreign assets disclosure." },
      { status: "pending", title: "Advance Tax Installments", note: "Quarterly payment schedule." },
      { status: "done", title: "Foreign Asset Reporting", note: "Schedule FA compliance." },
    ],
  },
  {
    id: "global-enterprise",
    label: "Global Enterprise",
    checklist: [
      { status: "done", title: "Transfer Pricing Documentation", note: "Master file and local file." },
      { status: "done", title: "IFRS Reconciliation", note: "Cross-border reporting alignment." },
      { status: "pending", title: "Country-by-Country Report", note: "BEPS Action 13 compliance." },
    ],
  },
];

export const stats = [
  { value: "15+", label: "Years of Practice" },
  { value: "500+", label: "Active Corporate Clients" },
  { value: "99.8%", label: "Compliance Success Rate" },
  { value: "$1.2B+", label: "Audited Revenue" },
];

// About page
export const milestones = [
  { year: "2023", description: "Expanded into International Tax Advisory.", active: true },
  { year: "2018", description: "Pioneered AI-driven audit methodologies." },
  { year: "2015", description: "Recognized as Top 50 Regional Audit Firm." },
  { year: "2010", description: "Established pan-India presence with 5 regional offices." },
  { year: "2005", description: "Launched Corporate Advisory vertical." },
  { year: "1998", description: "Founded in central business district." },
];

export const leadership = [
  {
    name: "Arthur Sterling",
    title: "Managing Partner, FCA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    bio: "Over 20 years of experience in complex audit and strategic financial planning.",
    tags: ["Corporate Audit", "M&A Strategy"],
  },
  {
    name: "Eleanor Vance",
    title: "Senior Partner, CPA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Over 20 years of experience in international taxation and wealth preservation.",
    tags: ["International Tax", "Wealth Management"],
  },
  {
    name: "David Chen",
    title: "Director of Advisory, CFA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Over 15 years of experience in risk assessment and corporate valuation.",
    tags: ["Risk Assessment", "Valuation"],
  },
  {
    name: "Sophia Moreno",
    title: "Partner, ESG & Sustainability",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Over 18 years of experience in sustainable finance and corporate governance.",
    tags: ["Green Finance", "CSR Audit"],
  },
];

// Contact page
export const contactServiceAreas = [
  { icon: Landmark, title: "Corporate Taxation", description: "Strategic planning and compliance." },
  { icon: TrendingUp, title: "Financial Audit", description: "Comprehensive review and reporting." },
  { icon: FileCheck2, title: "GST Compliance", description: "Filing, reconciliation, and advisory." },
  { icon: TrendingUp, title: "Wealth Management", description: "Portfolio optimization and planning." },
];

export const bookingFaq = [
  { q: "Initial Consultation Fee?", a: "The first 30-minute discovery call is complimentary." },
  { q: "What to prepare?", a: "Please have recent financial statements or specific inquiry documents ready." },
  { q: "Can I book a physical meeting?", a: "Yes, we offer on-site consultations for corporate clients within the metropolitan area." },
  { q: "GST Audit Documents?", a: "Please prepare your purchase/sales registers, GSTR-2A/3B reconciliations, and trial balance." },
  { q: "Services for NRIs?", a: "We provide specialized tax planning and compliance services for Non-Resident Indians." },
];

export const regionalOffices = [
  { city: "Mumbai", contact: "Rajesh Kumar", phone: "+91 22 4567 8901" },
  { city: "Bangalore", contact: "Priya Sharma", phone: "+91 80 2345 6789" },
  { city: "Hyderabad", contact: "Vikram Reddy", phone: "+91 40 3456 7890" },
];