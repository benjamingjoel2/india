import { getContent } from "@/lib/content";
import { StaysShowcase } from "./StaysShowcase";

/** One of each kind: palace, haveli, tented lodge, houseboat, homestay. */
const picks = ["udaipur-lake-palace", "jaipur-heritage-haveli", "kanha-tented-lodge", "vembanad-houseboat", "nubra-valley-homestay"];

export async function StaysFeature() {
  const { stays, stayTypeLabels, stayTypePlurals } = await getContent();
  const list = picks.map((s) => stays.find((x) => x.slug === s)!).filter(Boolean);
  return (
    <section aria-labelledby="stays-title">
      <StaysShowcase stays={list} labels={stayTypeLabels} plurals={stayTypePlurals} />
    </section>
  );
}
