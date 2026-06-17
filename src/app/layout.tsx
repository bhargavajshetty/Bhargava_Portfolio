import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhargava J Shetty | Software Engineer | AI & Data Science Enthusiast",
  description: "Personal portfolio of Bhargava J Shetty. Software Engineer, AI & Data Science Enthusiast. Specializing in Software Engineering, Deep Learning, NLP, and Intelligent Systems.",
  keywords: [
    "Bhargava J Shetty",
    "Software Engineer",
    "AI & Data Science",
    "Full Stack Developer",
    "Machine Learning Portfolio",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Bhargava J Shetty" }],
  openGraph: {
    title: "Bhargava J Shetty | Software Engineer | AI & Data Science Enthusiast",
    description: "Building intelligent systems through AI, Data, and Software Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-dark-bg text-slate-100 min-h-screen font-outfit antialiased selection:bg-electric-blue/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
