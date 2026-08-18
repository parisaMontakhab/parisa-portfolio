import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://parisa-portfolio-nu.vercel.app";

const title = "Parisa Montakhabi | Full-Stack Developer";
const description =
  "Junior Full-Stack Developer based in Italy with professional frontend experience in React, Next.js and TypeScript, and hands-on full-stack development with Node.js, Express and MongoDB.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Parisa Montakhabi",
    "Junior Full-Stack Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "Italy",
  ],
  authors: [{ name: "Parisa Montakhabi", url: siteUrl }],
  creator: "Parisa Montakhabi",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Parisa Montakhabi",
    title,
    description,
    images: [
      {
        url: "/images/parisa-profile.jpg",
        alt: "Parisa Montakhabi, Junior Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/parisa-profile.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
