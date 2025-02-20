"use client";
import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black py-1.5 w-full fixed top-0 z-50">
        <nav className="container mx-auto px-4 flex items-center">
          <img src="/dabinko-logo.png" alt="DABINKO" className="h-8" />
          <div className="ml-auto space-x-6">
            <a href="/about" className="text-white">About</a>
            <a href="/humanoid" className="text-white">Humanoid</a>
            <a href="/healthcare" className="text-white">Healthcare</a>
            <a href="/smart-watch" className="text-white">Control with Smart Watch</a>
            <a href="/ai-pg" className="text-white">AI P/G</a>
            <a href="/as" className="text-white">A/S</a>
            <a href="/en" className="text-white">English</a>
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