import ConsultationForm from "@/components/pages/contact/ConsultationForm";
import ContactSidebar from "@/components/pages/contact/ContactSidebar";
import BookingFaq from "@/components/pages/contact/BookingFaq";
import SupportChannels from "@/components/pages/contact/SupportChannels";
import ContactCta from "@/components/pages/contact/ContactCta";

export default function Contact() {
  return (
    <>
      {/* Top Section: Form and Sidebar */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16">
        <h1 className="font-heading font-bold text-4xl text-primary">Schedule a Consultation</h1>
        <p className="text-slate-600 mt-3 max-w-xl">
          Connect with our advisory team to discuss your financial strategy and compliance requirements.
        </p>

        <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-8">
          <ConsultationForm />
          <ContactSidebar />
        </div>
      </section>

      {/* Booking FAQ */}
      <BookingFaq />

      {/* Support Channels */}
      <SupportChannels />

      {/* Bottom CTA */}
      <ContactCta />
    </>
  );
}