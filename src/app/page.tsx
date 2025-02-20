"use client";
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Innovative Humanoid Solutions</h1>
          <h2 className="text-2xl mb-6 text-center">DABINKO&apos;s Cutting-edge Humanoid Technology</h2>
          
          <div className="space-y-8">
            {/* User Manual 섹션 제거 */}
          </div>
        </div>
      </main>
    </Layout>
  );
}