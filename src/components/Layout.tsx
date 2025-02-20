"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black py-1.5 w-full fixed top-0 z-50">
        <nav className="container mx-auto px-4 flex items-center">
          <Image 
            src="/dabinko-logo.png" 
            alt="DABINKO" 
            width={32} 
            height={32} 
            priority
          />
          <div className="ml-auto space-x-6">
            <Link href="/about" className="text-white">About</Link>
            <Link href="/humanoid" className="text-white">Humanoid</Link>
            <Link href="/healthcare" className="text-white">Healthcare</Link>
            <Link href="/smart-watch" className="text-white">Control with Smart Watch</Link>
            <Link href="/ai-pg" className="text-white">AI P/G</Link>
            <Link href="/as" className="text-white">A/S</Link>
            <Link href="/en" className="text-white">English</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow pt-12">
        {children}
      </main>
    </div>
  );
};

export default Layout; 