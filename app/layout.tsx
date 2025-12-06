import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
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
    "IT company Nepal",
    "software company Nepal",
    "tech company Nepal",
    "tech consulting",
    "Nepal tech company",

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
    "ERP systems",
    "CRM systems",
    "Dashboard development",
    "Custom software development",
    "Database development",
    "Integration services",
    "cloud solutions",
    "DevOps services",
    "IT consulting",
    "IT support",
    "IT infrastructure",
    "IT security",
    "IT maintenance",
    "IT upgrades",
    "IT migration",
    "IT training",

    // Business Solutions
    "enterprise software solutions",
    "startup technology partner",
    "digital transformation",
    "business automation",

    // Location-Specific (Nepal)
    "Web development Nepal",
    "Mobile app development Nepal",
    "Digital marketing Nepal",
    "SEO optimization Nepal",
    "E-commerce development Nepal",
    "SaaS development Nepal",
    "API development Nepal",
    "UI/UX design Nepal",
    "ERP systems Nepal",
    "CRM systems Nepal",
    "Dashboard development Nepal",
    "Custom software development Nepal",
    "Database development Nepal",
    "Integration services Nepal",
    "Cloud solutions Nepal",
    "DevOps services Nepal",
    "IT consulting Nepal",
    "IT support Nepal",
    "IT infrastructure Nepal",
    "IT security Nepal",
    "IT maintenance Nepal",
    "IT upgrades Nepal",
    "IT migration Nepal",
    "IT training Nepal",

    // Location-Specific (Cities)
    "Kathmandu software development",
    "Lalitpur software development",
    "Bhaktapur software development",
    "tech company Kathmandu",

    // Brand
    "Tomorrow's Tech",
    "tomorrows tech",
    "tomorrowstech",
    "Global software development"
  ],
  authors: [{ name: "Tomorrow's Tech" }],
  creator: "Tomorrow's Tech",
  metadataBase: new URL("https://tomorrowstech.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tomorrowstech.com.np",
    title: "Tomorrow's Tech - Building Tomorrow's Technology Today",
    description: "We specialize in cutting-edge web development, mobile applications, digital marketing, and custom websites that drive your business forward in the digital age.",
    siteName: "Tomorrow's Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tomorrow's Tech - Building Tomorrow's Technology Today",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomorrow's Tech - Building Tomorrow's Technology Today",
    description: "We specialize in cutting-edge web development, mobile applications, digital marketing, and custom websites that drive your business forward in the digital age.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [  
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Tomorrow's Tech Pvt. Ltd.",
    description: "Tomorrow's Tech is a leading IT company in Nepal providing web development, web applications, mobile app development, SEO, digital marketing, ERP systems, CRM, dashboard development, and custom software solutions.",
    url: 'https://tomorrowstech.com.np',
    logo: 'https://tomorrowstech.com.np/logo.png',
    image: "https://tomorrowstech.com.np/og-image.png",
   

    founder: {
      "@type": "Person",
      "name": "Bishnu Sah",
      "jobTitle": "Founder & CEO"
    },

    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-9810323270',
      contactType: 'customer service',
      email: 'info@tomorrowstech.com.np',
      areaServed:  [
        "Nepal",
        "Kathmandu",
        "Lalitpur",
        "Bhaktapur",
        "Global"
      ],
      availableLanguage: ['en', 'ne']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
      addressRegion: "Bagmati",
      addressLocality: "Lalitpur",
      streetAddress: "Balkumari - Kharibot",
      postalCode: "44700"
      
    },
    foundingDate: '2025',
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'Digital Marketing',
      'SEO',
      'UI/UX Design',
      'E-commerce Development',
      'Software Consulting',
      'ERP Systems',
      'CRM Systems',
      'Dashboard Development',
      'Custom Software Development',
      'Database Development',
      'API Development',
      'Integration Services',
      'Cloud Solutions',
      'DevOps Services',
      'IT Consulting',
      'IT Support',
      'IT Infrastructure',
      'IT Security',
      'IT Maintenance',
      'IT Upgrades',
      'IT Migration',
      'IT Training',
      'IT Consulting',
      'IT Support',
      'IT Infrastructure',
      'IT Security',
    ],

    industry: [
      "Information Technology",
      "Software Development",
      "Digital Marketing",
      "Web Development",
      "Mobile App Development",
      "ERP Systems",
      "CRM Systems",
      "Dashboard Development",
      "Custom Software Development",
      "Database Development",
      "API Development",
      "Integration Services",
      "Cloud Solutions",
      "DevOps Services",
      "IT Consulting",
      "IT Support",
      "IT Infrastructure",
      "IT Security",
      "IT Maintenance",
      "IT Upgrades",
      "IT Migration",
      "IT Training",
    ],

    sameAs: [
      'https://linkedin.com/company/tomorrowstech',
      'https://twitter.com/tomorrowstech',
      'https://github.com/tomorrowstech',
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
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ERP Systems',
          description: 'ERP systems for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CRM Systems',
          description: 'CRM systems for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dashboard Development',
          description: 'Dashboard development for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description: 'Custom software development for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Database Development',
          description: 'Database development for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'API Development',
          description: 'API development for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Integration Services',
          description: 'Integration services for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Solutions',
          description: 'Cloud solutions for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'DevOps Services',
          description: 'DevOps services for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Consulting',
          description: 'IT consulting for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Support',
          description: 'IT support for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Infrastructure',
          description: 'IT infrastructure for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Security',
          description: 'IT security for businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Maintenance',
          description: 'IT maintenance for businesses'
        }
      },
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Add your Google Search Console verification meta tag here */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
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
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
