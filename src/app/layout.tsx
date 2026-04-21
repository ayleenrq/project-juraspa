import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JURA SPA — Luxury Outdoor Wellness | Garden Tubs, Jacuzzi & Saunas",
  description:
    "Custom-crafted wooden garden tubs, jacuzzis, saunas, and cold plunge baths. Family-manufactured in Olkusz, Poland with Polish oak and European timber. Request your personalised quote today.",
  keywords: [
    "balie ogrodowe",
    "jacuzzi ogrodowe",
    "sauny ogrodowe",
    "morsowanie",
    "garden tub",
    "garden jacuzzi",
    "wooden outdoor spa",
    "Jura Spa",
    "Olkusz",
    "Poland",
  ].join(", "),
  openGraph: {
    title: "JURA SPA — Luxury Outdoor Wellness",
    description:
      "Custom-crafted wooden garden tubs, jacuzzis, saunas and cold plunge baths. Handmade in Poland.",
    url: "https://juraspa.pl",
    siteName: "Jura Spa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
