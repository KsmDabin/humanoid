import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
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

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/humanoid" className="hover:text-gray-300 transition-colors">
              Humanoid
            </Link>
            <Link href="/healthcare" className="hover:text-gray-300 transition-colors">
              Healthcare
            </Link>
            <Link href="/mobile-control" className="hover:text-gray-300 transition-colors">
              Control with Mobile
            </Link>
            <Link href="/ai-programming" className="hover:text-gray-300 transition-colors">
              AI P/G
            </Link>
            <Link href="/service" className="hover:text-gray-300 transition-colors">
              A/S
            </Link>
            <Link href="/en" className="hover:text-gray-300 transition-colors">
              English
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Innovative Humanoid Solutions</h1>
            <p className="text-xl text-gray-700">DABINKO&apos;s Cutting-edge Humanoid Technology</p>
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
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 DABINKO. All rights reserved.</p>
          <div className="mt-4">
            <p>Contact: dabinko@kita.net</p>
            <p>Address: Innovation Center, Technology Park, Seoul, South Korea</p>
          </div>
        </div>
      </footer>
    </div>
  );
}