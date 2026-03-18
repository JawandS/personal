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

// Preload nav images so they're fetched immediately on page load
const navImages = [
  "/nature.webp",
  "/majormatch.webp",
  "/laptop.webp",
  "/server.webp",
  "/letters.webp",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {navImages.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "var(--blue-deep)" }}
      >
        <TransitionProvider gridSize={12} pixelColor="#0A1628" animationDuration={0.5}>
          <GlobalBackground />
          <GlobalNav />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
