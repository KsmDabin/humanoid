"use client";
import Layout from '@/components/Layout';

export default function MobileControlPage() {
  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Control with Mobile</h1>
          
          <div className="space-y-8 text-gray-800">
            <section className="space-y-4">
              <p className="text-lg leading-relaxed">
                Our humanoid robots can be easily controlled through your mobile device, offering intuitive and convenient operation. The mobile control system provides:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Real-time robot control through smartphone app</li>
                <li>User-friendly interface for all skill levels</li>
                <li>Remote monitoring and operation capabilities</li>
                <li>Secure connection and data transmission</li>
                <li>Customizable control settings</li>
                <li>Multi-platform support (iOS and Android)</li>
              </ul>

              <p className="text-lg leading-relaxed mt-6">
                The mobile control feature allows users to:
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Control robot movements and actions</li>
                <li>Monitor robot status and performance</li>
                <li>Schedule and automate tasks</li>
                <li>Receive real-time notifications</li>
                <li>Access usage history and analytics</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
} 