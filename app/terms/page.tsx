import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle, XCircle, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Tomorrow\'s Tech',
  description: 'Read the terms and conditions for using Tomorrow\'s Tech services.',
};

export default function TermsPage() {
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
            <Scale className="w-16 h-16 mx-auto mb-6 text-primary-400" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Terms of Service
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
                Welcome to Tomorrow&apos;s Tech. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of our website
                and services. By accessing or using our services, you agree to be bound by these Terms. If
                you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">Acceptance of Terms</h2>
              </div>
              <div className="card">
                <p className="text-black leading-relaxed">
                  By accessing and using Tomorrow&apos;s Tech services, you accept and agree to be bound by these
                  Terms of Service and our Privacy Policy. If you are entering into these Terms on behalf of
                  a company or other legal entity, you represent that you have the authority to bind such
                  entity to these Terms.
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">Our Services</h2>
              </div>
              <div className="card space-y-4">
                <p className="text-black leading-relaxed">
                  Tomorrow&apos;s Tech provides various digital services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black ml-4">
                  <li>Web development and design</li>
                  <li>Mobile application development</li>
                  <li>Digital marketing services</li>
                  <li>Website hosting and maintenance</li>
                  <li>Consulting and technical support</li>
                </ul>
                <p className="text-black leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any
                  time without prior notice.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">User Responsibilities</h2>
              </div>
              <div className="card space-y-4">
                <p className="text-black leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">Prohibited Activities</h2>
              </div>
              <div className="card">
                <p className="text-black leading-relaxed mb-4">
                  You may not use our services to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Transmit malware, viruses, or harmful code</li>
                  <li>Engage in fraudulent activities</li>
                  <li>Harass, abuse, or harm others</li>
                  <li>Collect or harvest user information without consent</li>
                  <li>Impersonate others or misrepresent your affiliation</li>
                  <li>Interfere with security features of our services</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary-400" />
                <h2 className="text-3xl font-bold">Intellectual Property</h2>
              </div>
              <div className="card space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-400">Our Content</h3>
                  <p className="text-black leading-relaxed">
                    All content, features, and functionality on our website, including but not limited to
                    text, graphics, logos, icons, images, audio clips, digital downloads, and software, are
                    the exclusive property of Tomorrow&apos;s Tech and are protected by copyright, trademark,
                    and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary-400">Client Content</h3>
                  <p className="text-black leading-relaxed">
                    For services provided, the intellectual property rights of deliverables will be governed
                    by the specific agreement between you and Tomorrow&apos;s Tech. Unless otherwise specified in
                    writing, you retain ownership of your content provided to us, while granting us a license
                    to use it for the purpose of providing our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
              <div className="space-y-3 text-black leading-relaxed">
                <p>
                  Payment terms for services will be outlined in individual project agreements or proposals.
                  Unless otherwise specified:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All fees are quoted in USD</li>
                  <li>Payment is due upon receipt of invoice unless other terms are agreed upon</li>
                  <li>Late payments may incur additional fees</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All fees are non-refundable unless otherwise stated in writing</li>
                </ul>
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Warranties and Disclaimers</h2>
              <div className="space-y-3 text-black leading-relaxed">
                <p>
                  Our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties, either express
                  or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Our services will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results obtained from using our services will be accurate or reliable</li>
                  <li>Any errors in our services will be corrected</li>
                </ul>
                <p className="mt-3">
                  We disclaim all warranties, including but not limited to warranties of merchantability,
                  fitness for a particular purpose, and non-infringement.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-black leading-relaxed">
                To the maximum extent permitted by law, Tomorrow&apos;s Tech shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including but not limited to loss of
                profits, data, use, goodwill, or other intangible losses, resulting from your use or inability
                to use our services.
              </p>
            </div>

            {/* Indemnification */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
              <p className="text-black leading-relaxed">
                You agree to indemnify, defend, and hold harmless Tomorrow&apos;s Tech and its officers, directors,
                employees, and agents from and against any claims, liabilities, damages, losses, and expenses,
                including reasonable attorneys&apos; fees, arising out of or in any way connected with your access
                to or use of our services or your violation of these Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-black leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or
                liability, for any reason, including if you breach these Terms. Upon termination, your right
                to use our services will immediately cease. All provisions of these Terms which by their nature
                should survive termination shall survive, including ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>
            </div>

            {/* Governing Law */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-black leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
                in which Tomorrow&apos;s Tech operates, without regard to its conflict of law provisions. Any legal
                action or proceeding arising under these Terms will be brought exclusively in the courts located
                in that jurisdiction.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-black leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. If a
                revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion. By
                continuing to access or use our services after those revisions become effective, you agree to
                be bound by the revised terms.
              </p>
            </div>

            {/* Severability */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Severability</h2>
              <p className="text-black leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be
                changed and interpreted to accomplish the objectives of such provision to the greatest extent
                possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* Contact */}
            <div className="card bg-gradient-to-br from-primary-600/10 to-accent-600/10 border-primary-500/20">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-black leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-black">
                <p>Email: legal@tomorrowstech.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, Innovation City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
