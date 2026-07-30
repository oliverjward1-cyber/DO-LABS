import type { Metadata, Viewport } from "next";
import { Baloo_2, DM_Sans } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Baloo_2({
  variable: "--font-display-face",
  weight: "800",
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
  themeColor: "#f7f4ea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${dmSans.variable} antialiased`}>
      <body>
        {/* Without JS the reveal observer never runs — force the resting state. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;translate:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
