'use client';
import React from 'react';
import { Inter } from 'next/font/google'
import Link from 'next/link';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-black text-white py-4 fixed w-full top-0 z-50">
          <nav className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold hover:text-gray-300">
                DABINKO
              </Link>
              <div className="flex space-x-6">
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/humanoid" className="hover:text-gray-300">Humanoid</Link>
                <Link href="/healthcare" className="hover:text-gray-300">Healthcare</Link>
                <Link href="/smart-watch" className="hover:text-gray-300">Smart Watch</Link>
                <Link href="/ai-pg" className="hover:text-gray-300">AI P/G</Link>
                <Link href="/as" className="hover:text-gray-300">A/S</Link>
                <Link href="/en" className="hover:text-gray-300">English</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-100 py-4">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2025 Service Request System. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
