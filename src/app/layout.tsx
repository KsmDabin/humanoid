'use client';
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

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
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="bg-gray-800 text-white">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
                  DABINKO
                </Link>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="hover:text-gray-300">About</Link>
                  <Link href="/humanoid" className="hover:text-gray-300">Humanoid</Link>
                  <Link href="/healthcare" className="hover:text-gray-300">Healthcare</Link>
                  <Link href="/smart-watch" className="hover:text-gray-300">Smart Watch</Link>
                  <Link href="/ai-pg" className="hover:text-gray-300">AI P/G</Link>
                  <Link href="/service" className="hover:text-gray-300">Service</Link>
                  <Link href="/en" className="hover:text-gray-300">English</Link>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 text-center">
              © 2025 Service Request System. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
