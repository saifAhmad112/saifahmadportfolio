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

export const metadata: Metadata = {
  title: "Saif Ahmad Siddique | Full Stack Web Developer & Next.js Engineer",
  description:
    "Full Stack Web Developer with 3+ years experience building scalable Next.js web applications, AI dashboards, and modern UI systems with React, Tailwind CSS, Shadcn UI, and MongoDB.",
  keywords: [
    "Saif Ahmad Siddique",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js",
    "Tailwind CSS",
    "Shadcn UI",
    "Aceternity UI",
    "TanStack Query",
    "MongoDB",
    "Portfolio",
    "REST APIs",
    "NextAuth"
  ],
  authors: [{ name: "Saif Ahmad Siddique" }],
  openGraph: {
    title: "Saif Ahmad Siddique | Full Stack Web Developer",
    description:
      "3+ Years building modern, responsive, and scalable web applications using React.js, Next.js, Tailwind CSS, Node.js, and MongoDB.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="bg-zinc-950 text-zinc-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
