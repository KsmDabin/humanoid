"use client";
import Layout from '@/components/Layout';
import Image from "next/image";

export default function HomePage() {
  // 휴머노이드 이미지 배열
  const humanoidImages = [
    "/humanoid1.jpg",
    "/humanoid2.jpg",
    "/humanoid3.jpg",
    "/humanoid4.jpg",
    "/humanoid5.jpg",
    "/humanoid6.jpg",
    "/humanoid7.jpg",
    "/humanoid8.jpg",
    "/humanoid9.jpg",
    "/humanoid10.jpg",
  ];

  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4">
          <header className="flex justify-center mb-12">
            <div className="relative w-[200px] h-[80px]">
              <Image
                src="/dabinko-logo.svg"
                alt="DABINKO Logo"
                fill
                style={{
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </header>

          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Innovative Humanoid Solutions</h1>
            <p className="text-xl text-gray-700">DABINKO&apos;s Cutting-edge Humanoid Technology</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Humanoid Gallery</h2>
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
          </section>

          <div className="space-y-8">
            <section className="bg-white/80 rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Physical Specifications</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Height: 170 cm</li>
                    <li>Weight: 75 kg</li>
                    <li>Operating Temperature: 0°C to 40°C</li>
                    <li>Battery Life: 8 hours</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">System Requirements</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Power: 220V AC</li>
                    <li>Network: Wi-Fi 6</li>
                    <li>Operating System: DABINKO OS 2.0</li>
                    <li>Storage: 1TB SSD</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}