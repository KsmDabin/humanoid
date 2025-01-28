import Image from "next/image";
import Link from "next/link";

export default function HumanoidPage() {
  const images = [
    { id: 1, path: '/humanoids/humanoid1.jpeg' },
    { id: 2, path: '/humanoids/humanoid2.jpeg' },
    { id: 3, path: '/humanoids/humanoid3.jpeg' },
    { id: 4, path: '/humanoids/humanoid4.jpeg' },
    { id: 5, path: '/humanoids/humanoid5.jpeg' },
    { id: 6, path: '/humanoids/humanoid6.jpeg' },
    { id: 7, path: '/humanoids/humanoid7.jpeg' },
    { id: 8, path: '/humanoids/humanoid8.jpeg' },
    { id: 9, path: '/humanoids/humanoid9.jpeg' },
    { id: 10, path: '/humanoids/humanoid10.jpeg' },
    { id: 11, path: '/humanoids/humanoid11.jpeg' },
    { id: 12, path: '/humanoids/humanoid12.jpeg' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-[200px] h-[80px] flex items-center">
            <img
              src="/dabinko-logo.jpg"
              alt="DABINKO Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {/* ... 기존 네비게이션 유지 ... */}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Humanoid Gallery</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={img.path}
                  alt={`Humanoid ${img.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        {/* ... footer 내용 ... */}
      </footer>
    </div>
  );
}
