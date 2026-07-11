export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-white font-heading font-bold mb-3">Sterling CA</h3>
          <p className="text-sm text-slate-400">
            High-trust financial advisory and audit services ensuring stability and precision.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Taxation</li>
            <li>Audit</li>
            <li>Advisory</li>
            <li>Compliance</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Contact</h4>
          <p className="text-sm text-slate-400">contact@sterlingca.com</p>
          <p className="text-sm text-slate-400">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © 2026 Sterling CA Firm. All rights reserved. ICAI Regulatory Member.
      </div>
    </footer>
  );
}