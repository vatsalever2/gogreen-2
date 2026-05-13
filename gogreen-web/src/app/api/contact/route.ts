import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, scope, state, phone, company, message } = body;

  if (!name?.trim() || !email?.trim() || !scope || !state) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL ?? "contact@gogreensolutions.co";

  if (apiKey) {
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone    ? `Phone: ${phone}`           : null,
      company  ? `Company: ${company}`       : null,
      `Scope: ${scope}`,
      `State: ${state}`,
      message  ? `\nMessage:\n${message}`    : null,
    ].filter(Boolean).join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GoGreen Website <onboarding@resend.dev>",
        to: toEmail,
        reply_to: email,
        subject: `New inquiry from ${name} — ${scope}`,
        text: lines,
      }),
    });

    if (!res.ok) {
      console.error("Resend error:", await res.text());
      return NextResponse.json({ error: "Failed to send inquiry" }, { status: 500 });
    }
  } else {
    // No email provider configured — log locally (set RESEND_API_KEY in production)
    console.log("[contact form]", { name, email, phone, company, scope, state, message });
  }

  return NextResponse.json({ success: true });
}
