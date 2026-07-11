import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function AccordionItem({ children, className = "" }) {
  const [open, setOpen] = useState(false);

  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={`border-b ${className}`}>
      {items.map((child, index) =>
        child?.type?.displayName === "AccordionTrigger"
          ? (
              <child.type
                key={index}
                {...child.props}
                open={open}
                setOpen={setOpen}
              />
            )
          : (
              <child.type
                key={index}
                {...child.props}
                open={open}
              />
            )
      )}
    </div>
  );
}

export function AccordionTrigger({
  children,
  open,
  setOpen,
  className = "",
}) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`w-full flex items-center justify-between py-4 font-medium ${className}`}
    >
      {children}
      <ChevronDown
        className={`transition-transform ${
          open ? "rotate-180" : ""
        }`}
        size={18}
      />
    </button>
  );
}

AccordionTrigger.displayName = "AccordionTrigger";

export function AccordionContent({
  children,
  open,
  className = "",
}) {
  if (!open) return null;

  return (
    <div className={`pb-4 text-sm text-slate-600 ${className}`}>
      {children}
    </div>
  );
}