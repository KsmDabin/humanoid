'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Humanoid', href: '/humanoid' },
    { name: 'Healthcare', href: '/healthcare' },
    { name: 'Smart Watch', href: '/smart-watch' },
    { name: 'AI P/G', href: '/ai-pg' },
    { name: 'Service', href: '/service' },
    { name: 'English', href: '/en' },
  ];

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
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-gray-300 px-3 py-2 rounded-md ${
                      pathname === item.href ? 'bg-gray-700' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
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
