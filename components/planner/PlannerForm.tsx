"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { regions } from "@/data/regions";
import { monthNames, monthOrder } from "@/data/months";
import { images, type ImageKey } from "@/data/images";
import type { JourneyStyle, MonthKey } from "@/data/types";
import { brand, contact } from "@/config/site";
import { useCurrency } from "@/lib/currency";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { buttonClass } from "@/components/ui/Button";
import type { PlannerPreset } from "./PlannerProvider";

const STORAGE_KEY = "musafir:planner:v1";

/* ------------------------------------------------------------------ */
/* Options                                                             */
/* ------------------------------------------------------------------ */
const styleOptions: { value: JourneyStyle; label: string; image: ImageKey }[] = [
  { value: "classic", label: "Classic highlights", image: "taj-arch" },
  { value: "palaces-heritage", label: "Palaces & heritage", image: "udaipur-palace" },
  { value: "wildlife", label: "Wildlife & tigers", image: "tiger" },
  { value: "wellness", label: "Wellness & Ayurveda", image: "yoga-dawn" },
  { value: "spiritual", label: "Spiritual India", image: "varanasi-ghats" },
  { value: "food", label: "Food & markets", image: "spice-bowls" },
  { value: "adventure", label: "Mountains & adventure", image: "ladakh-road" },
  { value: "rail", label: "Rail journeys", image: "amber-fort" },
  { value: "honeymoon", label: "Honeymoon", image: "kerala-canoe" },
  { value: "family", label: "Family", image: "hawa-mahal" },
  { value: "beaches", label: "Beaches & islands", image: "andaman-beach" },
];

const paceOptions = [
  { value: "relaxed", label: "Relaxed", text: "Fewer places, longer stays, afternoons free." },
  { value: "balanced", label: "Balanced", text: "A good rhythm of exploring and resting." },
  { value: "full", label: "Full", text: "See as much as possible; early starts welcome." },
];

const stayOptions = [
  { value: "palaces-heritage", label: "Palaces and heritage" },
  { value: "luxury", label: "Luxury hotels" },
  { value: "boutique", label: "Boutique" },
  { value: "mix", label: "A mix" },
];

const interestOptions = ["Wildlife", "Culture", "Food", "Spirituality", "Wellness", "Adventure", "Beaches"];
const dietaryOptions = ["Vegetarian", "Vegan", "Allergies"];

const budgetBands = [
  { value: "under-2500", min: 0, max: 2500 },
  { value: "2500-4000", min: 2500, max: 4000 },
  { value: "4000-6000", min: 4000, max: 6000 },
  { value: "6000-9000", min: 6000, max: 9000 },
  { value: "9000-plus", min: 9000, max: 0 },
];

const countryCodes = [
  ["+1", "US / Canada"],
  ["+44", "United Kingdom"],
  ["+61", "Australia"],
  ["+64", "New Zealand"],
  ["+353", "Ireland"],
  ["+49", "Germany"],
  ["+33", "France"],
  ["+31", "Netherlands"],
  ["+41", "Switzerland"],
  ["+971", "UAE"],
  ["+65", "Singapore"],
  ["+91", "India"],
] as const;

const contactMethods = ["Email", "Telephone"] as const;

/* ------------------------------------------------------------------ */
/* State                                                               */
/* ------------------------------------------------------------------ */
export interface PlannerData {
  month: MonthKey | "flexible" | "";
  days: number;
  dateType: "exact" | "approximate";
  startDate: string;
  firstTime: "yes" | "no" | "";
  regions: string[];
  styles: string[];
  helpMeChoose: boolean;
  pace: string;
  stays: string;
  interests: string[];
  adults: number;
  children: number;
  childAges: string[];
  dietary: string[];
  allergyDetails: string;
  budget: string;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  contactMethods: string[];
  notes: string;
}

const empty: PlannerData = {
  month: "",
  days: 12,
  dateType: "approximate",
  startDate: "",
  firstTime: "",
  regions: [],
  styles: [],
  helpMeChoose: false,
  pace: "",
  stays: "",
  interests: [],
  adults: 2,
  children: 0,
  childAges: [],
  dietary: [],
  allergyDetails: "",
  budget: "",
  name: "",
  email: "",
  countryCode: "+44",
  phone: "",
  contactMethods: ["Email"],
  notes: "",
};

type Errors = Partial<Record<keyof PlannerData | "childAges", string>>;

const steps = [
  { key: "when", label: "When" },
  { key: "where", label: "Where & what" },
  { key: "style", label: "Style" },
  { key: "who", label: "Who" },
  { key: "contact", label: "Contact" },
] as const;

function validate(step: number, d: PlannerData): Errors {
  const e: Errors = {};
  if (step === 0) {
    if (!d.month) e.month = "Choose a month, or tell us you're flexible.";
    if (d.days < 5 || d.days > 30) e.days = "Journeys run from 5 to 30 days.";
    if (d.dateType === "exact" && !d.startDate) e.startDate = "Add your start date, or switch to approximate.";
    if (!d.firstTime) e.firstTime = "Let us know if this is your first time in India.";
  }
  if (step === 1) {
    if (!d.helpMeChoose && d.regions.length === 0 && d.styles.length === 0)
      e.regions = "Pick at least one region or journey style, or choose “Help me choose”.";
  }
  if (step === 2) {
    if (!d.pace) e.pace = "Choose a pace.";
    if (!d.stays) e.stays = "Choose a style of stay.";
    if (d.interests.length === 0) e.interests = "Choose at least one interest.";
  }
  if (step === 3) {
    if (d.adults < 1) e.adults = "At least one adult is traveling.";
    if (d.children > 0 && d.childAges.slice(0, d.children).some((a) => a === "")) e.childAges = "Add each child's age.";
    if (d.dietary.includes("Allergies") && !d.allergyDetails.trim()) e.allergyDetails = "Tell us about the allergies so we can plan safely.";
    if (!d.budget) e.budget = "Choose a budget range. It helps us suggest the right stays.";
  }
  if (step === 4) {
    if (d.name.trim().length < 2) e.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) e.email = "Please enter a valid email address.";
    if (d.phone && !/^[\d\s()-]{6,}$/.test(d.phone.trim())) e.phone = "Use digits only, without the country code.";
    if (d.contactMethods.includes("Telephone") && !d.phone.trim())
      e.phone = "Add a phone number so we can call you.";
    if (d.contactMethods.length === 0) e.contactMethods = "Choose at least one way to reach you.";
  }
  return e;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export function PlannerForm({ preset, variant = "page" }: { preset?: PlannerPreset; variant?: "page" | "modal" }) {
  const [data, setData] = useState<PlannerData>(empty);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [loaded, setLoaded] = useState(false);
  const reduce = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const uid = useId();
  const { format, currency } = useCurrency();

  // Restore saved progress, then apply any preset (e.g. "Plan around Diwali").
  useEffect(() => {
    let next = empty;
    let savedStep = 0;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { data: PlannerData; step: number };
        next = { ...empty, ...saved.data };
        savedStep = Math.min(Math.max(saved.step ?? 0, 0), steps.length - 1);
      }
    } catch {
      /* ignore */
    }
    if (preset) {
      next = {
        ...next,
        regions: preset.regions ? Array.from(new Set([...next.regions, ...preset.regions])) : next.regions,
        styles: preset.styles ? Array.from(new Set([...next.styles, ...preset.styles])) : next.styles,
        month: (preset.month as MonthKey) ?? next.month,
        notes: preset.note && !next.notes.includes(preset.note) ? [preset.note, next.notes].filter(Boolean).join("\n") : next.notes,
      };
    }
    // Hydrating from browser storage after mount is intentional (server has no access to it).
    /* eslint-disable react-hooks/set-state-in-effect */
    setData(next);
    setStep(savedStep);
    setLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [preset]);

  useEffect(() => {
    if (!loaded || status === "done") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, step }));
    } catch {
      /* ignore */
    }
  }, [data, step, loaded, status]);

  const set = <K extends keyof PlannerData>(key: K, value: PlannerData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };
  const toggle = (key: "regions" | "styles" | "interests" | "dietary" | "contactMethods", value: string) => {
    setData((d) => ({ ...d, [key]: d[key].includes(value) ? d[key].filter((v) => v !== value) : [...d[key], value] }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const focusHeading = () => window.setTimeout(() => headingRef.current?.focus(), 60);

  const next = () => {
    const e = validate(step, data);
    setErrors(e);
    if (Object.keys(e).length) {
      window.setTimeout(() => document.querySelector<HTMLElement>("[data-planner-error]")?.focus(), 30);
      return;
    }
    setStep((s) => s + 1);
    focusHeading();
  };
  const back = () => {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
    focusHeading();
  };

  async function submit() {
    const e = validate(4, data);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, childAges: data.childAges.slice(0, data.children), currency, submittedFrom: variant }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      focusHeading();
    } catch {
      setStatus("error");
    }
  }

  const startOver = () => {
    setData(empty);
    setStep(0);
    setStatus("idle");
  };

  /* ---------------- Confirmation ---------------- */
  if (status === "done") {
    const first = data.name.split(" ")[0];
    return (
      <div className="mx-auto max-w-2xl py-10 text-center" role="status">
        <svg aria-hidden viewBox="0 0 32 40" className="mx-auto h-14 w-12 text-marigold" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 39V16C2 8 8.5 2 16 2s14 6 14 14v23z" />
          <path d="M10 21l4.5 4.5L23 17" />
        </svg>
        <h2 ref={headingRef} tabIndex={-1} className="mt-6 font-display text-display-md outline-none">
          Thank you, <em className="display-em">{first}</em>.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lede text-charcoal/80">
          Your specialist is reading your ideas now and will be in touch by {formatMethods(data.contactMethods)}, usually within a few hours
          and often within 15 minutes during our working day.
        </p>
        <div className="mx-auto mt-10 max-w-md border-y border-charcoal/15 py-6 text-left text-sm">
          <dl className="grid grid-cols-[8rem_1fr] gap-y-2">
            <dt className="text-stone">When</dt>
            <dd>{data.month === "flexible" ? "Flexible" : monthNames[data.month as MonthKey]} · {data.days} days</dd>
            <dt className="text-stone">Where</dt>
            <dd>{data.helpMeChoose && !data.regions.length ? "Help me choose" : data.regions.map((r) => regions.find((x) => x.slug === r)?.name).join(", ") || "Open to ideas"}</dd>
            <dt className="text-stone">Travelers</dt>
            <dd>
              {data.adults} adult{data.adults > 1 ? "s" : ""}
              {data.children ? `, ${data.children} child${data.children > 1 ? "ren" : ""}` : ""}
            </dd>
          </dl>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/journeys" className={buttonClass("secondary")}>
            Browse journeys
          </Link>
          <a href={contact.emailHref} className={buttonClass("primary")}>
            Email us
          </a>
        </div>
        <button type="button" onClick={startOver} className="mt-8 text-sm underline underline-offset-4 opacity-70">
          Start a new plan
        </button>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className={cn(variant === "page" && "mx-auto max-w-3xl")}>
      {/* Progress */}
      <div className="mb-10">
        <p className="eyebrow mb-4 text-stone">Plan my journey · {brand.name}</p>
        <ol className="grid grid-cols-5 gap-2" aria-label="Progress">
          {steps.map((s, i) => (
            <li key={s.key} aria-current={i === step ? "step" : undefined}>
              <span className={cn("block h-[3px] rounded-full transition-colors duration-700", i <= step ? "bg-marigold" : "bg-charcoal/15")} />
              <span className={cn("mt-2 hidden text-xs sm:block", i === step ? "text-charcoal" : "text-stone")}>
                {i + 1}. {s.label}
              </span>
            </li>
          ))}
        </ol>
        <p className="sr-only" aria-live="polite">
          Step {step + 1} of {steps.length}: {steps[step].label}. {Math.round(progress)}% complete.
        </p>
      </div>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (step < steps.length - 1) next();
          else submit();
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.5, ease }}
          >
            {step === 0 && (
              <fieldset>
                <StepHeading ref={headingRef} step={1} title="When are you *dreaming* of going?" text="A rough idea is fine. We'll talk dates and seasons together." />
                <div className="grid gap-8">
                  <Field label="Travel month" error={errors.month} htmlFor={`${uid}-month`}>
                    <select id={`${uid}-month`} value={data.month} onChange={(e) => set("month", e.target.value as PlannerData["month"])} className={inputClass(errors.month)} aria-invalid={!!errors.month}>
                      <option value="">Select a month</option>
                      {monthOrder.map((m) => (
                        <option key={m} value={m}>
                          {monthNames[m]}
                        </option>
                      ))}
                      <option value="flexible">I&rsquo;m flexible</option>
                    </select>
                  </Field>
                  <Field label={`Number of days: ${data.days}`} error={errors.days} htmlFor={`${uid}-days`} hint="Most first journeys run 12–16 days.">
                    <input
                      id={`${uid}-days`}
                      type="range"
                      min={5}
                      max={30}
                      value={data.days}
                      onChange={(e) => set("days", Number(e.target.value))}
                      className="w-full accent-indigo"
                      aria-valuetext={`${data.days} days`}
                    />
                    <div className="mt-1 flex justify-between text-xs text-stone">
                      <span>5</span>
                      <span>30</span>
                    </div>
                  </Field>
                  <ChoiceGroup legend="Your dates are" error={errors.dateType}>
                    {(["approximate", "exact"] as const).map((v) => (
                      <Pill key={v} type="radio" name="dateType" checked={data.dateType === v} onChange={() => set("dateType", v)}>
                        {v === "exact" ? "Exact" : "Approximate"}
                      </Pill>
                    ))}
                  </ChoiceGroup>
                  {data.dateType === "exact" && (
                    <Field label="Start date" error={errors.startDate} htmlFor={`${uid}-start`}>
                      <input id={`${uid}-start`} type="date" value={data.startDate} onChange={(e) => set("startDate", e.target.value)} className={inputClass(errors.startDate)} aria-invalid={!!errors.startDate} />
                    </Field>
                  )}
                  <ChoiceGroup legend="Is this your first time in India?" error={errors.firstTime}>
                    {(["yes", "no"] as const).map((v) => (
                      <Pill key={v} type="radio" name="firstTime" checked={data.firstTime === v} onChange={() => set("firstTime", v)}>
                        {v === "yes" ? "Yes, first time" : "No, I've been before"}
                      </Pill>
                    ))}
                  </ChoiceGroup>
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <StepHeading ref={headingRef} step={2} title="Where, and what *calls* you?" text="Choose as many as you like, or let us suggest." />
                {errors.regions && <ErrorText>{errors.regions}</ErrorText>}
                <p className="eyebrow mt-2 mb-4 text-stone" id={`${uid}-regions`}>
                  Regions
                </p>
                <div role="group" aria-labelledby={`${uid}-regions`} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {regions.map((r) => (
                    <ImageChoice key={r.slug} image={r.image} label={r.name} checked={data.regions.includes(r.slug)} onChange={() => toggle("regions", r.slug)} />
                  ))}
                </div>
                <p className="eyebrow mt-10 mb-4 text-stone" id={`${uid}-styles`}>
                  Journey styles
                </p>
                <div role="group" aria-labelledby={`${uid}-styles`} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {styleOptions.map((s) => (
                    <ImageChoice key={s.value} image={s.image} label={s.label} checked={data.styles.includes(s.value)} onChange={() => toggle("styles", s.value)} />
                  ))}
                </div>
                <label className="mt-8 flex cursor-pointer items-start gap-4 border border-charcoal/20 p-5 has-[:checked]:border-indigo has-[:checked]:bg-indigo/5">
                  <input type="checkbox" checked={data.helpMeChoose} onChange={(e) => set("helpMeChoose", e.target.checked)} className="mt-1 size-4 accent-indigo" />
                  <span>
                    <span className="font-display text-lg">Help me choose</span>
                    <span className="mt-1 block text-sm text-charcoal/70">Not sure yet? Tell us what you love and your specialist will suggest a route.</span>
                  </span>
                </label>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <StepHeading ref={headingRef} step={3} title="How do you like to *travel*?" text="This shapes the rhythm of each day and where you lay your head." />
                <div className="grid gap-10">
                  <ChoiceGroup legend="Pace" error={errors.pace}>
                    <div className="grid w-full gap-3 sm:grid-cols-3">
                      {paceOptions.map((p) => (
                        <label key={p.value} className="cursor-pointer border border-charcoal/20 p-4 transition-colors has-[:checked]:border-indigo has-[:checked]:bg-indigo/5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-marigold">
                          <input type="radio" name="pace" className="sr-only" checked={data.pace === p.value} onChange={() => set("pace", p.value)} />
                          <span className="font-display text-lg">{p.label}</span>
                          <span className="mt-1 block text-sm text-charcoal/70">{p.text}</span>
                        </label>
                      ))}
                    </div>
                  </ChoiceGroup>
                  <ChoiceGroup legend="Stays" error={errors.stays}>
                    {stayOptions.map((s) => (
                      <Pill key={s.value} type="radio" name="stays" checked={data.stays === s.value} onChange={() => set("stays", s.value)}>
                        {s.label}
                      </Pill>
                    ))}
                  </ChoiceGroup>
                  <ChoiceGroup legend="Interests" error={errors.interests} hint="Choose all that apply.">
                    {interestOptions.map((i) => (
                      <Pill key={i} type="checkbox" checked={data.interests.includes(i)} onChange={() => toggle("interests", i)}>
                        {i}
                      </Pill>
                    ))}
                  </ChoiceGroup>
                </div>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset>
                <StepHeading ref={headingRef} step={4} title="Who's *coming* along?" text="So we can choose the right rooms, guides and menus." />
                <div className="grid gap-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Stepper label="Adults" value={data.adults} min={1} max={12} onChange={(v) => set("adults", v)} error={errors.adults} />
                    <Stepper
                      label="Children (under 18)"
                      value={data.children}
                      min={0}
                      max={8}
                      onChange={(v) => {
                        set("children", v);
                        setData((d) => ({ ...d, children: v, childAges: Array.from({ length: v }, (_, i) => d.childAges[i] ?? "") }));
                      }}
                    />
                  </div>
                  {data.children > 0 && (
                    <div>
                      <p className="mb-3 text-sm font-medium">Children&rsquo;s ages</p>
                      <div className="flex flex-wrap gap-3">
                        {Array.from({ length: data.children }).map((_, i) => (
                          <label key={i} className="flex flex-col text-xs text-stone">
                            Child {i + 1}
                            <select
                              value={data.childAges[i] ?? ""}
                              onChange={(e) => {
                                const ages = [...data.childAges];
                                ages[i] = e.target.value;
                                set("childAges", ages);
                              }}
                              className={cn(inputClass(errors.childAges && !data.childAges[i] ? "x" : undefined), "mt-1 w-28")}
                            >
                              <option value="">Age</option>
                              {Array.from({ length: 18 }).map((_, a) => (
                                <option key={a} value={a}>
                                  {a === 0 ? "Under 1" : a}
                                </option>
                              ))}
                            </select>
                          </label>
                        ))}
                      </div>
                      {errors.childAges && <ErrorText>{errors.childAges}</ErrorText>}
                    </div>
                  )}
                  <ChoiceGroup legend="Dietary needs" hint="Optional. India is wonderful for vegetarians and vegans.">
                    {dietaryOptions.map((d) => (
                      <Pill key={d} type="checkbox" checked={data.dietary.includes(d)} onChange={() => toggle("dietary", d)}>
                        {d}
                      </Pill>
                    ))}
                  </ChoiceGroup>
                  {data.dietary.includes("Allergies") && (
                    <Field label="Allergy details" error={errors.allergyDetails} htmlFor={`${uid}-allergy`}>
                      <input id={`${uid}-allergy`} value={data.allergyDetails} onChange={(e) => set("allergyDetails", e.target.value)} className={inputClass(errors.allergyDetails)} placeholder="e.g. peanuts, shellfish" />
                    </Field>
                  )}
                  <ChoiceGroup legend={`Budget per person (excluding international flights), shown in ${currency}`} error={errors.budget}>
                    {budgetBands.map((b) => (
                      <Pill key={b.value} type="radio" name="budget" checked={data.budget === b.value} onChange={() => set("budget", b.value)}>
                        {b.max === 0 ? `${format(b.min)}+` : b.min === 0 ? `Under ${format(b.max)}` : `${format(b.min)}–${format(b.max)}`}
                      </Pill>
                    ))}
                  </ChoiceGroup>
                </div>
              </fieldset>
            )}

            {step === 4 && (
              <fieldset>
                <StepHeading ref={headingRef} step={5} title="How can we *reach* you?" text="Your specialist will reply personally. No call centers, no pressure." />
                <div className="grid gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Your name" error={errors.name} htmlFor={`${uid}-name`}>
                      <input id={`${uid}-name`} autoComplete="name" value={data.name} onChange={(e) => set("name", e.target.value)} className={inputClass(errors.name)} aria-invalid={!!errors.name} />
                    </Field>
                    <Field label="Email" error={errors.email} htmlFor={`${uid}-email`}>
                      <input id={`${uid}-email`} type="email" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} className={inputClass(errors.email)} aria-invalid={!!errors.email} />
                    </Field>
                  </div>
                  <Field label="Phone" error={errors.phone} htmlFor={`${uid}-phone`} hint="Optional unless you'd like a call.">
                    <div className="flex gap-2">
                      <label htmlFor={`${uid}-cc`} className="sr-only">
                        Country code
                      </label>
                      <select id={`${uid}-cc`} value={data.countryCode} onChange={(e) => set("countryCode", e.target.value)} className={cn(inputClass(), "w-36 shrink-0")} autoComplete="tel-country-code">
                        {countryCodes.map(([code, name]) => (
                          <option key={code + name} value={code}>
                            {code} {name}
                          </option>
                        ))}
                      </select>
                      <input id={`${uid}-phone`} type="tel" autoComplete="tel-national" value={data.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass(errors.phone)} aria-invalid={!!errors.phone} />
                    </div>
                  </Field>
                  <ChoiceGroup legend="Preferred contact methods" error={errors.contactMethods}>
                    {contactMethods.map((m) => (
                      <Pill key={m} type="checkbox" checked={data.contactMethods.includes(m)} onChange={() => toggle("contactMethods", m)}>
                        {m}
                      </Pill>
                    ))}
                  </ChoiceGroup>
                  <Field label="Anything else?" htmlFor={`${uid}-notes`} hint="Special occasions, must-sees, mobility needs, places you've loved before.">
                    <textarea id={`${uid}-notes`} rows={4} value={data.notes} onChange={(e) => set("notes", e.target.value)} className={inputClass()} />
                  </Field>
                  <p className="text-xs text-stone">
                    By sending this you agree to our{" "}
                    <Link href="/legal/privacy" className="underline underline-offset-2">
                      privacy policy
                    </Link>
                    . We&rsquo;ll only use your details to plan your journey.
                  </p>
                  {status === "error" && <ErrorText>Sorry, that didn&rsquo;t send. Please try again or email us.</ErrorText>}
                </div>
              </fieldset>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-charcoal/15 pt-6">
          {step > 0 ? (
            <button type="button" onClick={back} className={buttonClass("secondary")}>
              Back
            </button>
          ) : (
            <span className="text-xs text-stone">Progress saves automatically.</span>
          )}
          <button type="submit" disabled={status === "submitting"} className={buttonClass("primary")}>
            {step < steps.length - 1 ? "Continue" : status === "submitting" ? "Sending…" : "Send to my specialist"}
          </button>
        </div>
      </form>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */
function formatMethods(m: string[]) {
  const l = m.map((x) => (x === "Telephone" ? "phone" : x));
  return l.length > 1 ? `${l.slice(0, -1).join(", ")} or ${l[l.length - 1]}` : l[0] ?? "email";
}

const inputClass = (error?: string) =>
  cn(
    "min-h-12 w-full rounded-none border bg-ivory px-4 py-3 text-base outline-none transition-colors focus:border-indigo",
    error ? "border-spice" : "border-charcoal/25",
  );

function StepHeading({ step, title, text, ref }: { step: number; title: string; text: string; ref: React.Ref<HTMLHeadingElement> }) {
  const parts = title.split(/(\*[^*]+\*)/g);
  return (
    <legend className="mb-8 w-full">
      <span className="eyebrow block text-stone">Step {step} of 5</span>
      <h2 ref={ref} tabIndex={-1} className="mt-3 font-display text-display-md outline-none">
        {parts.map((p, i) => (p.startsWith("*") ? <em key={i} className="display-em">{p.slice(1, -1)}</em> : p))}
      </h2>
      <span className="mt-3 block text-charcoal/75">{text}</span>
    </legend>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <p data-planner-error tabIndex={-1} role="alert" className="mt-2 text-sm text-spice outline-none">
      {children}
    </p>
  );
}

function Field({ label, error, hint, htmlFor, children }: { label: string; error?: string; hint?: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-stone">{hint}</p>}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ChoiceGroup({ legend, error, hint, children }: { legend: string; error?: string; hint?: string; children: React.ReactNode }) {
  const id = useId();
  return (
    <div role="group" aria-labelledby={id}>
      <p id={id} className="mb-3 text-sm font-medium">
        {legend}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
      {hint && !error && <p className="mt-2 text-xs text-stone">{hint}</p>}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function Pill({ type, name, checked, onChange, children }: { type: "radio" | "checkbox"; name?: string; checked: boolean; onChange: () => void; children: React.ReactNode }) {
  return (
    <label className="cursor-pointer rounded-full border border-charcoal/25 px-4 py-2.5 text-sm transition-colors duration-300 hover:border-charcoal has-[:checked]:border-indigo has-[:checked]:bg-indigo has-[:checked]:text-ivory has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-marigold">
      <input type={type} name={name} checked={checked} onChange={onChange} className="sr-only" />
      {children}
    </label>
  );
}

function ImageChoice({ image, label, checked, onChange }: { image: ImageKey; label: string; checked: boolean; onChange: () => void }) {
  const img = images[image];
  return (
    <label className="group relative block aspect-[4/3] cursor-pointer overflow-hidden has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-marigold">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <Image src={img.src} alt="" fill sizes="(min-width: 768px) 15rem, 45vw" className="object-cover transition-transform duration-1000 ease-musafir group-hover:scale-105" />
      <span className={cn("absolute inset-0 transition-colors duration-500", checked ? "bg-indigo/70" : "bg-gradient-to-t from-indigo-deep/75 to-transparent")} />
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-ivory">
        <span className="font-display text-[1.05rem] leading-tight">{label}</span>
        <span aria-hidden className={cn("flex size-6 shrink-0 items-center justify-center rounded-full border border-ivory transition-colors", checked && "bg-marigold border-marigold text-charcoal")}>
          {checked && (
            <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 6.5l2.5 2.5L10 3.5" />
            </svg>
          )}
        </span>
      </span>
    </label>
  );
}

function Stepper({ label, value, min, max, onChange, error }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void; error?: string }) {
  const id = useId();
  return (
    <div>
      <p id={id} className="mb-2 text-sm font-medium">
        {label}
      </p>
      <div role="group" aria-labelledby={id} className="flex items-center gap-4">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`} className="flex size-11 items-center justify-center rounded-full border border-charcoal/25 disabled:opacity-30">
          −
        </button>
        <output aria-live="polite" className="w-8 text-center font-display text-2xl">
          {value}
        </output>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} disabled={value >= max} aria-label={`More ${label.toLowerCase()}`} className="flex size-11 items-center justify-center rounded-full border border-charcoal/25 disabled:opacity-30">
          +
        </button>
      </div>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
