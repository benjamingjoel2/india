import { NextResponse } from "next/server";

/** Contact form. TODO: email the specialist team and log the lead in the CRM. */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body?.email ?? "")) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }
  console.log("[contact]", { ...body, at: new Date().toISOString() });
  return NextResponse.json({ ok: true });
}
