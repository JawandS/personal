import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import GlobalBackground from "@/components/GlobalBackground";
import GlobalNav from "@/components/GlobalNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jawand Singh",
  description: "Personal website of Jawand Singh - Software Engineer",
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
        style={{ backgroundColor: "var(--purple-deep)" }}
      >
        <TransitionProvider gridSize={12} pixelColor="#1E1033" animationDuration={0.5}>
          <GlobalBackground />
          <GlobalNav />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
