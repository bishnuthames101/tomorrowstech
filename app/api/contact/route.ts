import { NextRequest, NextResponse } from 'next/server';
import { ContactForm } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validate required fields
    const { name, email, phone, serviceInterest, message } = body;

    if (!name || !email || !phone || !serviceInterest || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the form submission (in production, you'd send this to your email service)
    console.log('📧 New Contact Form Submission:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service Interest: ${serviceInterest}`);
    console.log(`Message: ${message}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // TODO: In production, integrate with email service
    // Examples:
    // - SendGrid: await sendEmail(body)
    // - Resend: await resend.emails.send(...)
    // - Nodemailer: await transporter.sendMail(...)
    // - Mailgun: await mailgun.messages.create(...)

    // For now, we'll simulate success
    // In a real application, you would:
    // 1. Send an email to your business email
    // 2. Send a confirmation email to the customer
    // 3. Store the submission in a database
    // 4. Trigger notifications (Slack, Discord, etc.)

    // Example SendGrid implementation (commented out):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await sgMail.send({
      to: 'hello@tomorrowstech.com',
      from: 'noreply@tomorrowstech.com',
      subject: `New Contact Form: ${serviceInterest}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${serviceInterest}

        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interest:</strong> ${serviceInterest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
