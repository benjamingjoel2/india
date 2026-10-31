// Renders the share image (scripts/og/opengraph-image.tsx) for every language to public/og/<locale>.png.
// Run `npm run og-images` after changing the design, the tagline or its translations, and commit the PNGs.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { build } from "esbuild";

const root = process.cwd();
const bundle = path.join(root, "node_modules/.cache/og-images/render.cjs");
await mkdir(path.dirname(bundle), { recursive: true });
await build({
  entryPoints: [path.join(root, "scripts/og/opengraph-image.tsx")],
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  packages: "external",
  tsconfig: path.join(root, "tsconfig.json"),
  outfile: bundle,
  logLevel: "warning",
  // next/root-params only works inside Next; the image takes its locale from params instead.
  plugins: [
    {
      name: "stub-root-params",
      setup(b) {
        b.onResolve({ filter: /^next\/root-params$/ }, () => ({ path: "root-params", namespace: "stub" }));
        b.onLoad({ filter: /.*/, namespace: "stub" }, () => ({ contents: "export const locale = async () => undefined;" }));
      },
    },
  ],
});
const mod = createRequire(import.meta.url)(bundle);
await mkdir(path.join(root, "public/og"), { recursive: true });
for (const locale of mod.locales) {
  const res = await mod.default({ params: Promise.resolve({ locale }) });
  const png = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(root, `public/og/${locale}.png`), png);
  console.log(`og-images: ${locale} ${mod.size.width}x${mod.size.height}, ${png.length} bytes`);
}
