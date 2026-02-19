import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tomorrow\'s Tech',
  description: 'Learn how Tomorrow\'s Tech collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="container-custom py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary-400" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text ">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="card">
              <p className="text-black leading-relaxed">
                At Tomorrow&apos;s Tech, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website or use our services.
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy
                policy, please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">Information We Collect</h2>
              </div>
              <div className="card space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-400">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-black ml-4">
                    <li>Fill out a contact form</li>
                    <li>Request a quote or consultation</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Engage with our services</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    This information may include your name, email address, phone number, company name,
                    and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-400">Automatically Collected Information</h3>
                  <p className="text-black leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your
                    device, including information about your web browser, IP address, time zone, and some of
                    the cookies installed on your device. We may also collect information about your browsing
                    actions and patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">How We Use Your Information</h2>
              </div>
              <div className="card">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect in the following ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you marketing and promotional communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To analyze usage trends and optimize user experience</li>
                  <li>To protect against fraudulent or illegal activity</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">Data Security</h2>
              </div>
              <div className="card">
                    <p className="text-black leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                  However, please note that no method of transmission over the internet or electronic storage
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Sharing Your Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">Sharing Your Information</h2>
              </div>
              <div className="card">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a business transfer, merger, or acquisition</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We do not sell or rent your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">Your Rights</h2>
              </div>
              <div className="card">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate or incomplete information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to or restrict processing of your information</li>
                  <li>The right to withdraw consent at any time</li>
                  <li>The right to data portability</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-black leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold
                certain information. You can instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent. However, if you do not accept cookies, you may not be able to use
                some portions of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
              <p className="text-black leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices or content of these external sites. We encourage you to review the privacy policies
                of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
              <p className="text-black leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect
                personal information from children. If you believe we have collected information from a child,
                please contact us immediately.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-black leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. You are
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact */}
            <div className="card bg-gradient-to-br from-primary-600/10 to-accent-600/10 border-primary-500/20">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-black leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-black">
                <p>Email: info@tomorrowstech.com.np</p>
                <p>Phone: +977 9810323270</p>
                <p>Address: Balkumari-Kharibot, Lalitpur, Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
