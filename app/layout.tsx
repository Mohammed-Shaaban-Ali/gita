import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GITA - الذهبية العالمية للسفر والسياحة",
  description: "الذهبية العالمية للسفر والسياحة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head></head>
      <body
        className={` ${rubik.variable} antialiased bg-yellow overflow-x-hidden!`}
      >
        <Suspense fallback={<Loading />}>
          <Navbar />
          {children} <Footer />
        </Suspense>
      </body>
    </html>
  );
}
