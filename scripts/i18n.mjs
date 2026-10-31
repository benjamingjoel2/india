#!/usr/bin/env node
// Translation helper for the Next.js site (no runtime dependency).
//
//   node scripts/i18n.mjs keys      write i18n/client-keys.json (strings client components need); runs before every build
//   node scripts/i18n.mjs extract   write i18n/strings.json: every English string that needs a translation
//   node scripts/i18n.mjs check     list strings missing from i18n/{fr,de,es}.json (exit 1 if any)
//
// Sources: copy in /data and the navigation/brand/contact config (walked like lib/i18n/server.ts `localize`),
// plus literal t("…") and msg("…") calls in app/, components/, lib/ and mdx-components.tsx.
// Journal article bodies are translated as whole files in content/journal/<locale>/.
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LOCALES = ["fr", "de", "es"];
const mode = process.argv[2] || "check";

// Must match ID_KEYS in lib/i18n/server.ts.
const ID_KEYS = new Set([
  "slug", "key", "id", "image", "images", "gallery", "src", "href", "emailHref", "region", "regions", "route", "styles",
  "accent", "date", "staySlug", "bestMonths", "typicalMonths", "festivals", "relatedJourneys", "bestRegions", "type",
  "calendar", "category_", "code", "symbol", "locale", "hex", "ink", "poster", "mp4", "webm", "devanagari", "urdu",
  "pronunciation", "postalAddress", "email", "name_",
]);
const isCopy = (s) => /\p{L}{2}/u.test(s) && !/^[a-z0-9-]+$/.test(s) && !/^https?:/.test(s);

async function load(rel) {
  return import(pathToFileURL(join(ROOT, rel)).href);
}

async function dataStrings() {
  const out = new Set();
  const walk = (v, k = "") => {
    if (typeof v === "string") { if (!ID_KEYS.has(k) && isCopy(v)) out.add(v); }
    else if (Array.isArray(v)) v.forEach((x) => walk(x, k));
    else if (v && typeof v === "object" && !ID_KEYS.has(k)) for (const [kk, vv] of Object.entries(v)) walk(vv, kk);
  };
  for (const f of ["regions", "journeys", "experiences", "stays", "festivals", "faqs", "posts", "months", "legal", "brand"]) {
    const m = await load(`data/${f}.ts`);
    for (const v of Object.values(m)) if (typeof v !== "function") walk(v, "");
  }
  const { images } = await load("data/images.ts");
  for (const img of Object.values(images)) out.add(img.alt);
  // data/index.ts label maps
  const idx = readFileSync(join(ROOT, "data/index.ts"), "utf8");
  for (const m of idx.matchAll(/:\s*"([^"]+)",?\n/g)) if (isCopy(m[1])) out.add(m[1]);
  // config/site.ts: navigation and contact copy
  const site = readFileSync(join(ROOT, "config/site.ts"), "utf8");
  const nav = site.slice(site.indexOf("export const navigation"));
  for (const m of nav.matchAll(/(?:label|intro|title|text):\s*"([^"]+)"/g)) out.add(m[1]);
  for (const m of nav.matchAll(/\["([^"]+)",\s*"[a-z-]+"\]/g)) out.add(m[1]);
  out.add(/replyPromise:\s*"([^"]+)"/.exec(site)[1]);
  return out;
}

function files(dir, acc = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) files(p, acc);
    else if (/\.(tsx?|mjs)$/.test(f)) acc.push(p);
  }
  return acc;
}

function codeStrings() {
  const all = new Set();
  const client = new Set();
  const list = [...files(join(ROOT, "app")), ...files(join(ROOT, "components")), ...files(join(ROOT, "lib")), join(ROOT, "mdx-components.tsx")];
  for (const f of list) {
    const src = readFileSync(f, "utf8");
    const isClient = /^\s*["']use client["']/.test(src);
    for (const m of src.matchAll(/\b(?:t|msg)\(\s*"((?:[^"\\]|\\.)*)"/g)) {
      const s = JSON.parse(`"${m[1]}"`);
      if (!/\p{L}/u.test(s)) continue;
      all.add(s);
      if (isClient) client.add(s);
    }
  }
  return { all, client };
}

async function clientKeys(client) {
  const keys = new Set(client);
  const { images } = await load("data/images.ts");
  for (const img of Object.values(images)) keys.add(img.alt);
  const { brand } = await load("data/brand.ts");
  keys.add(brand.meaning);
  const { regions } = await load("data/regions.ts");
  for (const r of regions) keys.add(r.name);
  const { monthNames } = await load("data/months.ts");
  for (const n of Object.values(monthNames)) keys.add(n);
  const site = readFileSync(join(ROOT, "config/site.ts"), "utf8");
  keys.add(/replyPromise:\s*"([^"]+)"/.exec(site)[1]);
  return [...keys].sort();
}

const { all, client } = codeStrings();
if (mode === "keys") {
  writeFileSync(join(ROOT, "i18n/client-keys.json"), JSON.stringify(await clientKeys(client), null, 1) + "\n");
  process.exit(0);
}
const strings = [...new Set([...(await dataStrings()), ...all])];
if (mode === "extract") {
  writeFileSync(join(ROOT, "i18n/strings.json"), JSON.stringify(strings, null, 1) + "\n");
  console.log(`${strings.length} strings, ${strings.reduce((a, s) => a + s.length, 0)} characters`);
  process.exit(0);
}
let missing = 0;
for (const l of LOCALES) {
  const dict = JSON.parse(readFileSync(join(ROOT, `i18n/${l}.json`), "utf8"));
  const miss = strings.filter((s) => !(s in dict));
  missing += miss.length;
  console.log(`${l}: ${strings.length - miss.length}/${strings.length} translated`);
  if (process.argv.includes("-v")) miss.slice(0, 50).forEach((s) => console.log("   ", JSON.stringify(s)));
  const ids = { ...dict };
  for (const s of strings) delete ids[s];
  const unused = Object.keys(ids);
  if (unused.length && process.argv.includes("-v")) console.log(`  ${unused.length} unused`);
}
process.exit(missing ? 1 : 0);
