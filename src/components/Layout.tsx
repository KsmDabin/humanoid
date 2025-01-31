"use client";
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo - 현재 크기(148px x 60px)에서 7% 증가 */}
          <Link href="/" className="flex items-center">
            <img
              src="/dabinko-logo.jpg"
              alt="DABINKO Logo"
              style={{
                width: '158px',    // 148px에서 7% 증가
                height: '64px',    // 60px에서 7% 증가
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="/humanoid" className="hover:text-gray-300 transition-colors">Humanoid</Link>
            <Link href="/healthcare" className="hover:text-gray-300 transition-colors">Healthcare</Link>
            <Link href="/smart-watch" className="hover:text-gray-300 transition-colors">Control with Smart Watch</Link>
            <Link href="/ai-programming" className="hover:text-gray-300 transition-colors">AI P/G</Link>
            <Link href="/service" className="hover:text-gray-300 transition-colors">A/S</Link>
            <Link href="/en" className="hover:text-gray-300 transition-colors">English</Link>
          </nav>
        </div>
      </header>

      {/* Fixed Contact Text Links - 연락처 정보 업데이트 */}
      <div className="fixed right-1 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/821087764677"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white rounded px-2 py-1.5 hover:opacity-90 transition-opacity shadow-md text-sm"
        >
          <span className="text-[#25D366] font-semibold">WhatsApp</span>
        </a>

        {/* WeChat - QR 코드 표시 */}
        <div className="relative group">
          <a
            href="#"
            className="flex items-center bg-white rounded px-2 py-1.5 hover:opacity-90 transition-opacity shadow-md text-sm"
          >
            <span className="text-[#07C160] font-semibold">WeChat</span>
          </a>
          {/* QR 코드 이미지 - hover 시 표시 */}
          <div className="hidden group-hover:block absolute right-full top-0 mr-2 bg-white p-2 rounded shadow-lg">
            <img src="/wechat-qr.jpg" alt="WeChat QR Code" className="w-32 h-32" />
          </div>
        </div>

        {/* Telegram */}
        <a
          href="https://t.me/821087764677"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white rounded px-2 py-1.5 hover:opacity-90 transition-opacity shadow-md text-sm"
        >
          <span className="text-[#0088cc] font-semibold">Telegram</span>
        </a>

        {/* Email */}
        <a
          href="mailto:dabinko@kita.net"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-white rounded px-2 py-1.5 hover:opacity-90 transition-opacity shadow-md text-sm"
        >
          <span className="text-[#EA4335] font-semibold">E-mail</span>
        </a>
      </div>

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