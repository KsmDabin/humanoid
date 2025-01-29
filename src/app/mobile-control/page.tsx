"use client";
import Layout from '@/components/Layout';

export default function MobileControlPage() {
  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Control with Mobile</h1>
          
          <div className="space-y-8 text-gray-800">
            <p className="text-lg leading-relaxed">
              To control a humanoid robot using a smartphone, follow these steps:
            </p>

            <ol className="space-y-6 list-decimal pl-6">
              <li className="text-lg">
                <span className="font-semibold">Choose the Right Components:</span> Use a microcontroller (like Arduino) and a Bluetooth module (such as HC-05) to establish communication between the smartphone and the robot.
              </li>

              <li className="text-lg">
                <span className="font-semibold">Install a Control App:</span> Download a mobile app like Dabble, which allows you to send commands from your phone to the robot. This app can be found on both Android and iOS platforms.
              </li>

              <li className="text-lg">
                <span className="font-semibold">Connect the Bluetooth Module:</span> Integrate the Bluetooth module into your robot&apos;s circuitry. Ensure that it is properly connected to the microcontroller, which will interpret the commands received from the smartphone.
              </li>

              <li className="text-lg">
                <span className="font-semibold">Pair Your Devices:</span> Turn on Bluetooth on your smartphone and pair it with the robot&apos;s Bluetooth module. You may need to enter a password (commonly &quot;1234&quot; or &quot;0000&quot;) for pairing.
              </li>

              <li className="text-lg">
                <span className="font-semibold">Program the Robot:</span> Write code using platforms like PictoBlox or Arduino IDE to define how the robot should respond to different commands sent from the app, such as moving forward, backward, turning, or performing specific actions.
              </li>

              <li className="text-lg">
                <span className="font-semibold">Control the Robot:</span> Once everything is set up, use the app&apos;s interface to control the robot&apos;s movements in real-time by pressing buttons or using sliders available in the app.
              </li>
            </ol>

            <p className="text-lg leading-relaxed mt-6">
              This setup allows for versatile control of humanoid robots, enabling users to command them easily from their smartphones.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
} 