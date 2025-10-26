import type { Metadata } from "next";
import "./globals.css";

import { Urbanist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorFollower from "@/components/shared/CursorFollower";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist", // 👈 define a CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bayai Chatbot",
  description: "Bayai Chatbot Website",
  metadataBase: new URL("https://bayai-chatbot-website.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${urbanist.variable} font-urbanist`}>
      <Navbar />
      <body className="pt-16 overflow-x-hidden">
        <CursorFollower />
        {children}
      </body>
      <Footer />
    </html>
  );
}
