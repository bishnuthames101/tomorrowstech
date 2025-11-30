import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tomorrow's Tech - Building Tomorrow's Technology Today",
    template: "%s | Tomorrow's Tech",
  },
  description: "Tomorrow's Tech - Leading web development, mobile app development, and digital marketing company in Nepal. Expert software developers specializing in Next.js, React, custom websites, SEO, and digital transformation. Building Tomorrow's Technology Today.",
  keywords: [
    // Core Services
    "web development company",
    "mobile app development",
    "digital marketing agency",
    "custom website development",
    "software development services",

    // Technologies
    "Next.js development",
    "React development",
    "TypeScript development",
    "responsive web design",
    "Progressive Web Apps",

    // Specific Services
    "SEO optimization services",
    "e-commerce development",
    "SaaS development",
    "API development",
    "UI/UX design",

    // Business Solutions
    "enterprise software solutions",
    "startup technology partner",
    "digital transformation",
    "business automation",
    "cloud solutions",

    // Location & Brand
    "web development Nepal",
    "IT company Nepal",
    "software company Nepal",
    "Tomorrow's Tech",
    "tech consulting"
  ],
  authors: [{ name: "Tomorrow's Tech" }],
  creator: "Tomorrow's Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tomorrowstech.com.np",
    title: "Tomorrow's Tech - Building Tomorrow's Technology Today",
    description: "We specialize in cutting-edge web development, mobile applications, digital marketing, and custom websites that drive your business forward in the digital age.",
    siteName: "Tomorrow's Tech - Building Tomorrow's Technology Today",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomorrow's Tech - Building Tomorrow's Technology Today",
    description: "We specialize in cutting-edge web development, mobile applications, digital marketing, and custom websites that drive your business forward in the digital age.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Tomorrow's Tech",
    description: "Leading web development, mobile app development, and digital marketing company. Building Tomorrow's Technology Today.",
    url: 'https://tomorrowstech.com.np',
    logo: 'https://tomorrowstech.com.np/logo.png',
    sameAs: [
      'https://linkedin.com/company/tomorrowstech',
      'https://twitter.com/tomorrowstech',
      'https://github.com/tomorrowstech',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-XXX-XXXXXXX',
      contactType: 'customer service',
      email: 'hello@tomorrowstech.com.np',
      areaServed: 'NP',
      availableLanguage: ['en', 'ne']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
      addressLocality: 'Kathmandu',
    },
    foundingDate: '2024',
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'Digital Marketing',
      'SEO',
      'UI/UX Design',
      'E-commerce Development',
      'Software Consulting'
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Custom web development using Next.js, React, and modern technologies'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile application development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
          description: 'SEO, social media marketing, and digital strategy services'
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
