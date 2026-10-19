import { Accordion } from "@/components/ui/Accordion";
import { VerifyFlag } from "@/components/ui/VerifyFlag";

export interface FaqLike {
  id?: string;
  question: string;
  answer: string | string[];
  verifyNote?: string;
}

/** Accessible FAQ accordion with FAQPage structured data. */
export function FaqList({ items, withSchema = true }: { items: FaqLike[]; withSchema?: boolean }) {
  const norm = items.map((f, i) => ({ ...f, id: f.id ?? `faq-${i}`, answer: Array.isArray(f.answer) ? f.answer : [f.answer] }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: norm.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") } })),
  };
  return (
    <>
      <Accordion
        items={norm.map((f) => ({
          id: f.id,
          title: <span id={f.id} className="scroll-mt-32">{f.question}</span>,
          content: (
            <div className="space-y-4">
              {f.answer.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
              {f.verifyNote && (
                <p className="flex flex-wrap items-center gap-3 text-sm text-charcoal/75">
                  <VerifyFlag /> {f.verifyNote}
                </p>
              )}
            </div>
          ),
        }))}
      />
      {withSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </>
  );
}
