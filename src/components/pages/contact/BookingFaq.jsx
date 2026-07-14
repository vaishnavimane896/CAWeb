import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bookingFaq } from "@/data/servicesData";

export default function BookingFaq() {
  return (
    <section className="bg-white border-y border-border">
      <div className="max-w-[900px] mx-auto px-4 md:px-12 py-16">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
            Good to Know
          </span>
          <h2 className="font-heading font-bold text-3xl text-primary">Booking FAQ</h2>
          <p className="text-slate-600 mt-2">Answers to what people usually ask before scheduling.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {bookingFaq.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="bg-surface border border-border rounded-lg px-5"
            >
              <AccordionTrigger className="text-sm font-semibold text-primary hover:no-underline gap-3">
                <span className="flex items-center gap-2.5">
                  <HelpCircle size={15} className="text-secondary shrink-0" />
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 pl-[26px]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}