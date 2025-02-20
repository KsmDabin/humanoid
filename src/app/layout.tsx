'use client';
import './globals.css';
import { Metadata } from 'next';
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
          <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  DABINKO
                </Link>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/" className="nav-link">Home</Link>
                  <Link href="/about" className="nav-link">About</Link>
                  <Link href="/humanoid" className="nav-link">Humanoid</Link>
                  <Link href="/healthcare" className="nav-link">Healthcare</Link>
                  <Link href="/smart-watch" className="nav-link">Smart Watch</Link>
                  <Link href="/ai-pg" className="nav-link">AI P/G</Link>
                  <Link href="/service" className="nav-link">Service</Link>
                  <Link href="/en" className="nav-link">English</Link>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="bg-gray-100 mt-auto">
            <div className="container mx-auto px-4 py-6">
              <p className="text-center text-gray-600">
                © 2025 Service Request System. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
