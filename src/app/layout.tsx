import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KreatorHive LLP | The Future of Influencer Marketing",
  description: "Data-Driven Influencer Marketing, Built for Scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased selection:bg-[#E8D5F5] selection:text-[#7B2D9E]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
