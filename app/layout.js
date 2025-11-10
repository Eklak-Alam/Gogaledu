import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GogalEdu Academy - Data Science & Analytics Courses | Job-Oriented Training",
  description: "Join GogalEdu Academy for industry-focused data science, data analytics, and business intelligence courses. Get certified training with 100% placement assistance in Greater Noida.",
  keywords: "data science course, data analytics training, business intelligence, machine learning, data engineering, cloud computing, GogalEdu, Greater Noida, placement assistance",
  authors: [{ name: "GogalEdu Academy" }],
  creator: "GogalEdu Academy",
  publisher: "GogalEdu Academy",
  robots: "index, follow",
  openGraph: {
    title: "GogalEdu Academy - Data Science & Analytics Courses",
    description: "Industry-focused data science and analytics courses with job placement assistance in Greater Noida",
    url: "https://gogaledu.vercel.app",
    siteName: "GogalEdu Academy",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "GogalEdu Academy - Data Science & Analytics Training",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GogalEdu Academy - Data Science & Analytics Courses",
    description: "Industry-focused data science and analytics courses with job placement assistance",
    images: ["/logo.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#059669",
  category: "education",
  verification: {
    google: "your-google-verification-code", // Add when you have Google Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="canonical" href="https://gogaledu.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Greater Noida" />
        <meta name="geo.position" content="28.4744;77.504" />
        <meta name="ICBM" content="28.4744, 77.504" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}