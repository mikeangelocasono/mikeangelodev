import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mike Angelo R. Casono | AI-Assisted Full Stack System Developer",
  description:
    "I build intelligent, custom systems that solve real business problems. From management systems to POS solutions, I create software that helps businesses operate more efficiently. Available for freelance projects and collaborations.",
  keywords: [
    "Full Stack Developer",
    "System Developer",
    "AI-Assisted Development",
    "Web Developer",
    "Philippines",
    "Freelance Developer",
    "POS System",
    "Management System",
    "Custom Software",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Mike Angelo R. Casono" }],
  creator: "Mike Angelo R. Casono",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mikeangelocasono.com",
    siteName: "Mike Angelo R. Casono Portfolio",
    title: "Mike Angelo R. Casono | AI-Assisted Full Stack System Developer",
    description:
      "I build intelligent, custom systems that solve real business problems. Available for freelance projects and collaborations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mike Angelo R. Casono - AI-Assisted Full Stack System Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Angelo R. Casono | AI-Assisted Full Stack System Developer",
    description:
      "I build intelligent, custom systems that solve real business problems.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
