"use client";
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo - 현재 크기(129px x 52px)에서 15% 증가 */}
          <Link href="/" className="flex items-center">
            <img
              src="/dabinko-logo.jpg"
              alt="DABINKO Logo"
              style={{
                width: '148px',    // 129px에서 15% 증가
                height: '60px',    // 52px에서 15% 증가
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="/humanoid" className="hover:text-gray-300 transition-colors">Humanoid</Link>
            <Link href="/healthcare" className="hover:text-gray-300 transition-colors">Healthcare</Link>
            <Link href="/mobile-control" className="hover:text-gray-300 transition-colors">Control with Mobile</Link>
            <Link href="/ai-programming" className="hover:text-gray-300 transition-colors">AI P/G</Link>
            <Link href="/service" className="hover:text-gray-300 transition-colors">A/S</Link>
            <Link href="/en" className="hover:text-gray-300 transition-colors">English</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 DABINKO. All rights reserved.</p>
          <div className="mt-4 space-y-2">
            <p>Contact: dabinko@kita.net</p>
            <p>Mobile: +82108776467</p>
            <p>SNS: WhatsApp, WeChat, Telegram</p>
            <p className="text-sm text-gray-400">
              (모바일 번호로 먼저 연락하면 이메일을 사용할 수 있습니다)
            </p>
            <p>Address: Innovation Center, Technology Park, Seoul, South Korea</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 