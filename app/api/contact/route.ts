import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, company, subject, message } =
      await req.json();

    // Validate input
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;
    const companyEmail = "contact@rallitechnologies.online";

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "send.smtp.com",
      port: 587,
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USERNAME, // Your SMTP.com username
        pass: process.env.SMTP_PASSWORD, // Your SMTP.com password
      },
    });

    // --------- 1️⃣ Send email to company ----------
    const companyMailOptions = {
      from: `"Unswayed Contact" <${companyEmail}>`,
      to: companyEmail,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
📩 New message from ${fullName}

Name: ${fullName}
Email: ${email}
Company: ${company || "N/A"}
Subject: ${subject}

Message:
${message}
      `,
    };

    await transporter.sendMail(companyMailOptions);
    console.log("✅ Contact email sent to Ralli successfully");

    // --------- 2️⃣ Send confirmation email to user ----------
    const userMailOptions = {
      from: `"Unswayed Support" <${companyEmail}>`,
      to: email,
      subject: "We’ve received your message — Unswayed",
      text: `
Hi ${firstName},

Thank you for reaching out to Unswayed. We’ve received your message and our team will get back to you shortly.

Here’s a copy of your submission:
-----------------------------
Subject: ${subject}
Message: ${message}
-----------------------------

Best regards,
The RALLi Team
      `,
    };

    await transporter.sendMail(userMailOptions);
    console.log("✅ Confirmation email sent to user successfully");

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send emails", details: error.message },
      { status: 500 }
    );
  }
}
