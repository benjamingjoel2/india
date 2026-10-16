import { ButtonLink } from "@/components/ui/Button";
import { Display } from "@/components/ui/Display";
import { JaaliPanel } from "@/components/ui/Jaali";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ivory-deep pt-32 pb-20">
      <JaaliPanel className="absolute inset-y-0 right-0 w-1/2 text-sandstone opacity-30" />
      <div className="page-x relative mx-auto w-full max-w-page">
        <p className="eyebrow mb-5 text-stone">404</p>
        <Display as="h1" size="xl" className="max-w-3xl">Even the best travelers get *lost*.</Display>
        <p className="mt-6 max-w-lg text-lede text-charcoal/80">This page has wandered off. Let&rsquo;s get you back on the road.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/journeys" variant="secondary">Explore journeys</ButtonLink>
        </div>
      </div>
    </section>
  );
}
