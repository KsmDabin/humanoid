import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Humanoid Service",
  description: "Humanoid Service Request System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-content-type-options" content="nosniff" />
        <meta httpEquiv="x-frame-options" content="DENY" />
        <meta httpEquiv="x-xss-protection" content="1; mode=block" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
