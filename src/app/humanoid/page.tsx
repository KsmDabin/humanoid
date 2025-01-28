import Image from "next/image";
import Link from "next/link";

export default function HumanoidPage() {
  const humanoidImages = [
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
    "/humanoids/humanoid12.jpeg",
  ];

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
            {humanoidImages.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Humanoid ${index + 1}`}
                  fill
                  style={{
                    objectFit: 'cover'
                  }}
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
