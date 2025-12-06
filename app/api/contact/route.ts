import { NextRequest, NextResponse } from 'next/server';
import { ContactForm } from '@/types';
import { supabase } from '@/lib/supabase';

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

    // Get client IP and user agent for tracking
    const ipAddress = request.headers.get('x-forwarded-for') ||
                      request.headers.get('x-real-ip') ||
                      'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Save to Supabase database
    const { data, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          phone,
          service_interest: serviceInterest,
          message,
          ip_address: ipAddress,
          user_agent: userAgent,
        },
      ])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save contact submission');
    }

    // Log the form submission for debugging
    console.log('📧 New Contact Form Submission saved to database:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`ID: ${data?.[0]?.id}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service Interest: ${serviceInterest}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // TODO: Optional - Send email notifications
    // Examples:
    // - SendGrid: await sendEmail(body)
    // - Resend: await resend.emails.send(...)
    // - Nodemailer: await transporter.sendMail(...)

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
        submissionId: data?.[0]?.id,
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
