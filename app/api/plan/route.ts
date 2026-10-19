import { NextResponse } from "next/server";

/**
 * Journey planner submissions.
 * TODO: integrate email + CRM, e.g. send a notification to the specialist team
 * (Resend/Postmark) and create a lead in the CRM (HubSpot/Pipedrive/Zoho),
 * with spam protection (Turnstile/hCaptcha) and rate limiting.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Name and a valid email are required" }, { status: 422 });
  }

  const enquiry = { ...payload, receivedAt: new Date().toISOString(), reference: `MUS-${Date.now().toString(36).toUpperCase()}` };
  console.log("[plan-my-journey] New enquiry", JSON.stringify(enquiry, null, 2));

  return NextResponse.json({ ok: true, reference: enquiry.reference });
}
