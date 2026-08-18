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

const title = "Parisa Montakhabisani | Full-Stack Developer";
const description =
  "Junior Full-Stack Developer based in Italy with professional frontend experience in React, Next.js and TypeScript, and hands-on full-stack development with Node.js, Express and MongoDB.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Parisa Montakhabisani — Full-Stack Developer portfolio",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Parisa Montakhabisani",
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
  authors: [{ name: "Parisa Montakhabisani", url: siteUrl }],
  creator: "Parisa Montakhabisani",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Parisa Montakhabisani",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Parisa Montakhabisani",
              url: "https://parisa-portfolio-nu.vercel.app/",
              image:
                "https://parisa-portfolio-nu.vercel.app/images/parisa-profile.jpg",
              jobTitle: "Junior Full-Stack Developer",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Chemanca",
                  url: "https://chemanca.it",
                },
                {
                  "@type": "Organization",
                  name: "Italeader",
                  url: "https://italeader.com",
                },
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "TanStack React Query",
                "Tailwind CSS",
                "Bootstrap",
              ],
              sameAs: [
                "https://github.com/parisaMontakhab",
                "https://www.linkedin.com/in/parisamontakhabisani/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
