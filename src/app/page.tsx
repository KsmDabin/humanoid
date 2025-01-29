"use client";
import Layout from '@/components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Innovative Humanoid Solutions</h1>
          <h2 className="text-2xl mb-6 text-center">DABINKO&apos;s Cutting-edge Humanoid Technology</h2>
          
          {/* User Manual Section */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold mb-4">User Manual</h3>
              <h4 className="font-semibold mb-2">Basic Operation</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Press and hold the power button for 3 seconds.</li>
                <li>Say &quot;Hey DABINKO&quot; to activate voice commands.</li>
                <li>Issue your desired command or function.</li>
              </ol>
            </section>
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