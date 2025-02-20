"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black py-1.5 w-full fixed top-0 z-50">
        <nav className="container mx-auto px-4 flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/dabinko-logo.png" 
              alt="DABINKO" 
              width={32} 
              height={32} 
              priority
            />
          </Link>
          <div className="ml-auto space-x-6">
            <Link 
              href="/about" 
              className={`text-white hover:text-gray-300 ${pathname === '/about' ? 'font-bold' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/humanoid" 
              className={`text-white hover:text-gray-300 ${pathname === '/humanoid' ? 'font-bold' : ''}`}
            >
              Humanoid
            </Link>
            <Link 
              href="/healthcare" 
              className={`text-white hover:text-gray-300 ${pathname === '/healthcare' ? 'font-bold' : ''}`}
            >
              Healthcare
            </Link>
            <Link 
              href="/smart-watch" 
              className={`text-white hover:text-gray-300 ${pathname === '/smart-watch' ? 'font-bold' : ''}`}
            >
              Control with Smart Watch
            </Link>
            <Link 
              href="/ai-pg" 
              className={`text-white hover:text-gray-300 ${pathname === '/ai-pg' ? 'font-bold' : ''}`}
            >
              AI P/G
            </Link>
            <Link 
              href="/as" 
              className={`text-white hover:text-gray-300 ${pathname === '/as' ? 'font-bold' : ''}`}
            >
              A/S
            </Link>
            <Link 
              href="/en" 
              className={`text-white hover:text-gray-300 ${pathname === '/en' ? 'font-bold' : ''}`}
            >
              English
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow pt-16">
        {children}
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Service Request System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 