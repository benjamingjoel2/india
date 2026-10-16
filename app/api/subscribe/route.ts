import { NextResponse } from "next/server";

/**
 * Newsletter and "The India Journey Guide" signups.
 * TODO: add to the email platform (Mailchimp/ConvertKit/Klaviyo) and trigger
 * the guide delivery email for source "india-journey-guide".
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required" }, { status: 422 });
  }
  console.log("[subscribe]", { email, source: body?.source ?? "unknown", at: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}
