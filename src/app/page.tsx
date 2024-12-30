import Image from "next/image";

export default function Home() {
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
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-400">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Logo */}
        <header className="flex justify-center mb-12">
          <div className="relative w-[200px] h-[80px]">
            <Image
              src="/dabinko-logo.svg"  // 또는 .png
              alt="DABINKO Logo"
              fill
              style={{
                objectFit: 'contain'
              }}
              priority
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Innovative Humanoid Solutions</h1>
        <p className="text-xl text-gray-700">DABINKO&apos;s Cutting-edge Humanoid Technology</p>
      </section>

      <section className="bg-white/80 rounded-xl p-8 mb-16">
        <p className="text-gray-700">
          Say &quot;Hey DABINKO&quot; to activate voice commands.
        </p>
      </section>

        {/* Humanoid Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Humanoid Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {humanoidImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <Image
  src="/dabinko-logo.svg"  // 파일 확장자만 변경
  alt="DABINKO Logo"
  width={200}
  height={80}
  priority
/>
              </div>
            ))}
          </div>
        </section>

        {/* User Manual Section */}
        <section className="bg-white/80 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">User Manual</h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Basic Operation</h3>
              <p className="text-gray-700">
                1. Press and hold the power button for 3 seconds.<br/>
                2. Say &quot;Hey DABINKO&quot; to activate voice commands.<br/>
                3. Issue your desired command or function.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <p className="text-gray-700">
                • Advanced Voice Recognition<br/>
                • Motion Control System<br/>
                • AI-powered Interaction<br/>
                • Real-time Response Technology<br/>
                • Environmental Adaptation
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
              <p className="text-gray-700">
                • Regular System Updates<br/>
                • Monthly Hardware Inspection<br/>
                • Battery Maintenance<br/>
                • Sensor Calibration<br/>
                • Troubleshooting Guide
              </p>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
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

        {/* Footer */}
        <footer className="text-center text-gray-700">
          <p>© 2024 DABINKO. All rights reserved.</p>
          <div className="mt-4">
            <p>Contact: info@dabinko.com</p>
            <p>Address: Innovation Center, Technology Park, Seoul, South Korea</p>
          </div>
        </footer>
      </div>
    </div>
  );
}