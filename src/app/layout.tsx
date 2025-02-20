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
        <nav className="bg-black text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">DABINKO</Link>
            <div className="space-x-4">
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
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Service Request System. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
