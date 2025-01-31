"use client";
import Layout from '@/components/Layout';

export default function SmartWatchPage() {
  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Control with Smart Watch</h1>
          
          <div className="space-y-8 text-gray-800">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Feasibility of Using a Smartwatch</h2>
              <p className="text-lg leading-relaxed">
                Smartwatches are increasingly being used as intuitive interfaces for robot control due to their portability, accessibility, and ability to integrate multiple sensors (e.g., accelerometers, gyroscopes, and microphones). These devices can serve as versatile controllers for humanoid robots by leveraging motion tracking, speech recognition, and wireless communication technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Key Features of Smartwatch-Based Control</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Motion Tracking: Smartwatches can estimate human arm movements and postures using built-in motion sensors. This data can be used to control the robot&apos;s limbs or guide its actions through gestures.</li>
                <li>Speech Recognition: Voice commands can be processed locally on the smartwatch or sent to cloud-based services for interpretation.</li>
                <li>Display Interface: The smartwatch screen can show the robot&apos;s status, battery levels, or other critical information, providing real-time feedback to the user.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Communication Methods</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1) Bluetooth</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Range: Typically effective within 10-30 meters.</li>
                    <li>Use Case: Ideal for short-range communication when the user is near the robot.</li>
                    <li>Limitations: Not suitable for long-distance control due to its limited range.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">2) Wi-Fi</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Range: Up to 100 meters indoors and several hundred meters outdoors (depending on network strength).</li>
                    <li>Use Case: Enables medium-range communication between the smartwatch and the robot via a shared Wi-Fi network.</li>
                    <li>Advantages: Supports high data transfer rates, allowing for real-time video streaming or complex commands.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3) Cellular Networks (4G/5G)</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Range: Virtually unlimited as long as both devices are connected to cellular networks.</li>
                    <li>Use Case: Suitable for controlling robots over long distances.</li>
                    <li>Advantages: Provides reliable connectivity for remote teleoperation.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Practical Implementations</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1) Gesture-Based Control</h3>
                  <p>Smartwatches equipped with motion sensors can detect arm movements and translate them into commands for the robot (e.g., moving its arms or walking in specific directions).</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2) Voice Command Integration</h3>
                  <p>Speech recognition systems on smartwatches can process voice commands locally or relay them to cloud-based APIs like Google Speech API for execution by the robot.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3) Hybrid Control Systems</h3>
                  <p>Combining motion tracking with speech recognition allows users to issue complex commands intuitively (e.g., pointing at an object while saying &quot;pick this up&quot;).</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Conclusion</h2>
              <p className="text-lg leading-relaxed">
                Using a smartwatch as a control interface for humanoid robots is not only feasible but also highly practical with current technologies. By employing wireless communication methods such as Wi-Fi, cellular networks, or IoT protocols, users can maintain control over their robots even when physically separated by large distances or obstructed environments. This approach offers an intuitive and portable solution for managing humanoid robots in various applications.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
} 