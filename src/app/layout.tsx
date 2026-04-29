import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Kelvex — Cold Chain Monitoring for Every Industry",
  description:
    "Real-time temperature and humidity monitoring for food & beverage, pharma, biotech, logistics, and agriculture. Enterprise-grade cold chain intelligence, accessible to any business.",
  keywords: "cold chain monitoring, temperature monitoring, IoT sensors, pharma compliance, food safety, HACCP",
  openGraph: {
    title: "Kelvex — Cold Chain Monitoring",
    description: "Real-time temperature monitoring for food, pharma, biotech, and logistics.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-[family-name:var(--font-geist)] antialiased">{children}</body>
    </html>
  );
}
