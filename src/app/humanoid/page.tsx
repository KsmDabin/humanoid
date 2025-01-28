import Image from "next/image";
import Link from "next/link";

export default function HumanoidPage() {
  // 이미지 배열 수정
  const images = Array.from({ length: 12 }, (_, i) => ({
    src: `/humanoids/humanoid${i + 1}.jpeg`,
    alt: `Humanoid ${i + 1}`
  }));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        {/* ... header 내용 ... */}
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Humanoid Gallery</h1>
          
          {/* Humanoid Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={index < 4}
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
