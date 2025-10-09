import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, company, subject, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: "send.smtp.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.SMTP_USER!, // Your SMTP.com username
        pass: process.env.SMTP_PASS!, // Your SMTP.com password
      },
    });

    await transporter.sendMail({
      from: email,
      to: "contact@rallitechnologies.online",
      subject: `[Contact Form] ${subject}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company: ${company || "N/A"}
        Subject: ${subject}
        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
