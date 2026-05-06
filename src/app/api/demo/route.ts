import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company, industry, message } = await req.json();

  if (!name || !email || !company) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  try {
    // Notify Ben
    await resend.emails.send({
      from: "Kelvex Demo <onboarding@resend.dev>",
      to: ["ben@thelinders.com"],
      subject: `Demo request — ${company} (${industry || "unknown industry"})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0f172a; margin-bottom: 4px;">New demo request</h2>
          <p style="color: #64748b; margin-top: 0; margin-bottom: 24px; font-size: 14px;">
            Someone wants to see Kelvex.
          </p>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
                <a href="mailto:${email}" style="color: #0d9488;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">Industry</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${industry || "—"}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0f172a;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
            ` : ""}
          </table>

          <div style="margin-top: 24px;">
            <a href="mailto:${email}?subject=Your Kelvex demo request"
               style="display: inline-block; background: #0d9488; color: white; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600;">
              Reply to ${name.split(" ")[0]}
            </a>
          </div>
        </div>
      `,
    });

    // Confirm to prospect
    await resend.emails.send({
      from: "Ben at Kelvex <onboarding@resend.dev>",
      to: [email],
      subject: "Got your demo request — talk soon",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #0f172a;">Hi ${name.split(" ")[0]},</h2>
          <p style="color: #334155; line-height: 1.6;">
            Thanks for reaching out. I'll send over a calendar link within one business day so
            we can walk through Kelvex with a real dataset from your industry.
          </p>
          <p style="color: #334155; line-height: 1.6;">
            If you have anything specific you want to cover — compliance requirements, a particular
            integration, or an existing setup you want to replace — just reply here and I'll make
            sure we cover it.
          </p>
          <p style="color: #334155; line-height: 1.6;">Talk soon,<br/><strong>Ben</strong><br/>Founder, Kelvex</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="color: #94a3b8; font-size: 12px;">
            Kelvex — Cold chain monitoring for every industry.<br/>
            <a href="https://kelvex.io" style="color: #0d9488;">kelvex.io</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
