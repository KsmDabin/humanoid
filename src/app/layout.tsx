'use client';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Request System',
  description: 'DABINKO Service Request System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
