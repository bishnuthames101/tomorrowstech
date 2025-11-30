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
    default: "Tomorrow's Tech - Building Tomorrow's Digital Solutions Today",
    template: "%s | Tomorrow's Tech",
  },
  description: "We specialize in cutting-edge web development, mobile applications, digital marketing, and custom websites that drive your business forward in the digital age.",
  keywords: [
    "web development",
    "mobile apps",
    "digital marketing",
    "custom websites",
    "Next.js",
    "React",
    "SEO optimization",
    "Tomorrow's Tech"
  ],
  authors: [{ name: "Tomorrow's Tech" }],
  creator: "Tomorrow's Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tomorrowstech.com",
    title: "Tomorrow's Tech - Building Tomorrow's Digital Solutions Today",
    description: "We specialize in cutting-edge web development, mobile applications, digital marketing, and custom websites.",
    siteName: "Tomorrow's Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomorrow's Tech - Building Tomorrow's Digital Solutions Today",
    description: "We specialize in cutting-edge web development, mobile applications, digital marketing, and custom websites.",
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
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
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
