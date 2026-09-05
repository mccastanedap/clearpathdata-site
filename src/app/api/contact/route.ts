import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: `Clearpath Data <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: email,
      subject: `New message from ${name} — Clearpath Data`,
      html: `
        <div style="font-family:sans-serif;max-width:600px">
          <h2 style="color:#112b50">New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background:#f4f6f9;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: err?.message ?? err }, { status: 500 });
  }
}
