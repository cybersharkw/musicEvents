import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Progress } from "@/components/ui/progress";
import { Suspense } from "react";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiveMusic",
  description: "Music Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* fallback and loadingscreen */}
        <Suspense fallback={<Progress />}>
        <div className="flex flex-col items-center">
        <Header />
       <div className="flex border border-border sm:rounded-3xl sm:w-[80%] p-4 m-4 h-screen">
        {children}
        </div>
        </div>
        </Suspense>
      </body>
    </html>
  );
}
