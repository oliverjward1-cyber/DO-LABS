import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.meta.url),
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    type: "website",
    title: site.meta.title,
    description: site.meta.description,
    url: site.meta.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#e2e2df",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
