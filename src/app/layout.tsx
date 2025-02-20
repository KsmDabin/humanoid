'use client';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold hover:text-gray-300 mb-4 md:mb-0"
              >
                DABINKO
              </Link>
              <div className="flex flex-wrap justify-center gap-4">
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
        <main>
          {children}
        </main>
        <footer className="bg-gray-100 mt-8">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-600">
              © 2025 Service Request System. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
