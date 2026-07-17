import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Always log to console for development verification and backup tracking
    console.log("New Contact Submission Received for Spark Tech Web Solution:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // Check if Gmail credentials are provided in environment variables
    const gmailUser = process.env.GMAIL_USER || "sparktech1404@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (gmailPass) {
      // Create Nodemailer Transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      // Send formatted HTML email to Owner
      await transporter.sendMail({
        from: `"Spark Tech Web Solution" <${gmailUser}>`,
        to: "sparktech1404@gmail.com",
        replyTo: email,
        subject: `🚀 New Project Inquiry from ${name} - ${service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #f8fafc; border-radius: 12px;">
            <div style="border-bottom: 2px solid #06B6D4; padding-bottom: 15px; margin-bottom: 20px;">
              <h2 style="color: #06B6D4; margin: 0;">Spark Tech Web Solution</h2>
              <p style="color: #94a3b8; margin: 5px 0 0;">New Client Inquiry Notification</p>
            </div>

            <div style="background-color: #1e293b; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px;"><strong>Client Name:</strong> <span style="color: #38bdf8;">${name}</span></p>
              <p style="margin: 0 0 10px;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
              <p style="margin: 0 0 10px;"><strong>Phone Number:</strong> ${phone || "Not provided"}</p>
              <p style="margin: 0;"><strong>Required Service:</strong> <span style="background-color: rgba(6, 182, 212, 0.2); color: #22d3ee; padding: 2px 8px; border-radius: 4px;">${service}</span></p>
            </div>

            <div style="background-color: #1e293b; padding: 20px; border-radius: 8px;">
              <h4 style="color: #e2e8f0; margin: 0 0 10px;">Project Details / Message:</h4>
              <p style="color: #cbd5e1; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>

            <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #334155; font-size: 12px; color: #64748b; text-align: center;">
              <p>Sent from Spark Tech Web Solution Contact Portal • Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      });
      console.log(`Live email successfully dispatched to sparktech1404@gmail.com!`);
    } else {
      console.log(
        "Note: Live email sending skipped because GMAIL_APP_PASSWORD is not set in .env.local yet. Add your 16-digit Google App Password to enable instant email delivery."
      );
    }

    // Simulate network delay for smooth UI feedback when in local development without Gmail pass
    if (!gmailPass) {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting Spark Tech Web Solution! Our engineering team will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred. Please try again or call +91 7060675133." },
      { status: 500 }
    );
  }
}
