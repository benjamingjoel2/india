import { buildSearchIndex } from "@/lib/search";
import { isLocale, locales } from "@/lib/i18n/config";

export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = () => locales.map((locale) => ({ locale }));

export async function GET(_req: Request, { params }: RouteContext<"/[locale]/search-index.json">) {
  const { locale } = await params;
  return Response.json(isLocale(locale) ? buildSearchIndex(locale) : []);
}
