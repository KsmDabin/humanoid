import Image from "next/image";
import Link from "next/link";

export default function HumanoidPage() {
  const images = [
    "/humanoids/humanoid1.jpeg",
    "/humanoids/humanoid2.jpeg",
    "/humanoids/humanoid3.jpeg",
    "/humanoids/humanoid4.jpeg",
    "/humanoids/humanoid5.jpeg",
    "/humanoids/humanoid6.jpeg",
    "/humanoids/humanoid7.jpeg",
    "/humanoids/humanoid8.jpeg",
    "/humanoids/humanoid9.jpeg",
    "/humanoids/humanoid10.jpeg",
    "/humanoids/humanoid11.jpeg",
    "/humanoids/humanoid12.jpeg"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="w-[200px] h-[80px] flex items-center">
            <img
              src="/dabinko-logo.jpg"
              alt="DABINKO Logo"
              width={200}
              height={80}
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </a>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="/humanoid" className="hover:text-gray-300 transition-colors">Humanoid</a>
            <a href="/healthcare" className="hover:text-gray-300 transition-colors">Healthcare</a>
            <a href="/mobile-control" className="hover:text-gray-300 transition-colors">Control with Mobile</a>
            <a href="/ai-programming" className="hover:text-gray-300 transition-colors">AI P/G</a>
            <a href="/service" className="hover:text-gray-300 transition-colors">A/S</a>
            <a href="/en" className="hover:text-gray-300 transition-colors">English</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Humanoid Gallery</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={src}
                  alt={`Humanoid ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 DABINKO. All rights reserved.</p>
          <div className="mt-4 space-y-2">
            <p>Contact: dabinko@kita.net</p>
            <p>SNS & Mobile: +82108776467</p>
            <p>
              SNS: WhatsApp, WeChat, Telegram
              <br />
              <span className="text-sm text-gray-400">
                (Please contact via mobile number first to get email access)
              </span>
            </p>
            <p>Address: Innovation Center, Technology Park, Seoul, South Korea</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
