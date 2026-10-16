import type { Metadata } from "next";
import { contact } from "@/config/site";
import { PlannerForm } from "@/components/planner/PlannerForm";
import { JaaliPanel } from "@/components/ui/Jaali";

export const metadata: Metadata = {
  title: "Plan my journey",
  description: "Tell us about the India trip you're imagining in five short steps. Your dedicated specialist will reply personally, often within 15 minutes.",
  alternates: { canonical: "/plan-my-journey" },
};

export default function PlanMyJourneyPage() {
  return (
    <div className="relative bg-ivory pt-36 pb-24 md:pt-44">
      <JaaliPanel className="absolute top-0 right-0 h-80 w-1/3 text-sandstone opacity-30" />
      <div className="page-x relative mx-auto grid max-w-page gap-16 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <h1 className="font-display text-display-lg">
            Let&rsquo;s plan your <em className="display-em">India</em>.
          </h1>
          <p className="mt-6 text-lede text-charcoal/80">
            Five short steps, about three minutes. There&rsquo;s no commitment and no payment: just the start of a conversation with
            the specialist who will plan every detail with you.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-charcoal/80">
            <li>— {contact.replyPromise}</li>
            <li>— Your progress saves as you go</li>
            <li>— Prefer to talk? <a href={contact.whatsappHref} className="underline underline-offset-4">WhatsApp us</a></li>
          </ul>
        </aside>
        <div className="lg:col-span-8">
          <PlannerForm />
        </div>
      </div>
    </div>
  );
}
