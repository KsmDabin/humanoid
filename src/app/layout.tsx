'use client';
import React from 'react';
import { Inter } from 'next/font/google'
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
            <a href="/" className="text-xl font-bold">DABINKO</a>
            <div className="space-x-4">
              <a href="/about" className="hover:text-gray-300">About</a>
              <a href="/humanoid" className="hover:text-gray-300">Humanoid</a>
              <a href="/healthcare" className="hover:text-gray-300">Healthcare</a>
              <a href="/smart-watch" className="hover:text-gray-300">Smart Watch</a>
              <a href="/ai-pg" className="hover:text-gray-300">AI P/G</a>
              <a href="/as" className="hover:text-gray-300">A/S</a>
              <a href="/en" className="hover:text-gray-300">English</a>
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
