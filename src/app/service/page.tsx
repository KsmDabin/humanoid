"use client";
import Layout from '@/components/Layout';

export default function ServicePage() {
  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">After Service</h1>
            
            <div className="space-y-6 text-gray-800">
              <p className="text-lg">
                Humanoid robots are complex mechanical systems that can experience failures in various parts. Here&apos;s a detailed explanation of the areas prone to malfunction, associated component names, causes of failure, and symptoms.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Joint Areas</h2>
                  <div className="ml-6 space-y-4">
                    <div>
                      <p className="font-semibold">1) Component Names:</p>
                      <p className="ml-4">Motors, actuators, gearboxes</p>
                    </div>
                    <div>
                      <p className="font-semibold">2) Causes of Failure:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Wear due to excessive use</li>
                        <li>(2) Improper lubrication</li>
                        <li>(3) Damage from overload</li>
                        <li>(4) Control system errors</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">3) Symptoms:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Limited or irregular joint movement</li>
                        <li>(2) Unusual noise generation</li>
                        <li>(3) Increased vibration</li>
                        <li>(4) Reduced accuracy</li>
                      </ul>
                    </div>
                    <p className="mt-4">
                      Joints play a crucial role in the humanoid&apos;s movements, particularly distributed in elbows, wrists, hips, knees, and ankles. Failures in these areas can severely impact the robot&apos;s overall functionality.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Sensor Systems</h2>
                  <div className="ml-6 space-y-4">
                    <div>
                      <p className="font-semibold">1) Component Names:</p>
                      <p className="ml-4">Cameras, accelerometers, gyroscopes, touch sensors</p>
                    </div>
                    <div>
                      <p className="font-semibold">2) Causes of Failure:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Environmental factors (moisture, dust, etc.)</li>
                        <li>(2) Physical impact</li>
                        <li>(3) Electrical interference</li>
                        <li>(4) Software errors</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">3) Symptoms:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Inaccurate environmental perception</li>
                        <li>(2) Unstable balance maintenance</li>
                        <li>(3) Touch response errors</li>
                        <li>(4) Image processing issues</li>
                      </ul>
                    </div>
                    <p className="mt-4">
                      Sensors are essential for the robot to detect its surroundings and understand its position and state. Sensor system failures directly affect the robot&apos;s safe operation and efficient task performance.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Control Systems</h2>
                  <div className="ml-6 space-y-4">
                    <div>
                      <p className="font-semibold">1) Component Names:</p>
                      <p className="ml-4">Central Processing Unit (CPU), memory, power management system</p>
                    </div>
                    <div>
                      <p className="font-semibold">2) Causes of Failure:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Overheating</li>
                        <li>(2) Power instability</li>
                        <li>(3) Software bugs</li>
                        <li>(4) Hardware defects</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">3) Symptoms:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) System instability or freezing</li>
                        <li>(2) Abnormal behavior patterns</li>
                        <li>(3) Reduced response time</li>
                        <li>(4) Unexpected shutdowns</li>
                      </ul>
                    </div>
                    <p className="mt-4">
                      The control system acts as the robot&apos;s &quot;brain&quot;, coordinating all movements and actions. Failure in this system can lead to dysfunction of the entire robot.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Power Systems</h2>
                  <div className="ml-6 space-y-4">
                    <div>
                      <p className="font-semibold">1) Component Names:</p>
                      <p className="ml-4">Batteries, power supply units, electrical wiring</p>
                    </div>
                    <div>
                      <p className="font-semibold">2) Causes of Failure:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Battery life degradation</li>
                        <li>(2) Overcharging or over-discharging</li>
                        <li>(3) Electrical circuit short</li>
                        <li>(4) Poor contact</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">3) Symptoms:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Reduced operating time</li>
                        <li>(2) Sudden power cutoffs</li>
                        <li>(3) Irregular power supply</li>
                        <li>(4) Overheating</li>
                      </ul>
                    </div>
                    <p className="mt-4">
                      The stability of the power system is crucial for the robot&apos;s continuous operation. Battery life, in particular, can limit the humanoid robot&apos;s ability to perform tasks continuously.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Mechanical Structure</h2>
                  <div className="ml-6 space-y-4">
                    <div>
                      <p className="font-semibold">1) Component Names:</p>
                      <p className="ml-4">Frame, external casing, joint connectors</p>
                    </div>
                    <div>
                      <p className="font-semibold">2) Causes of Failure:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Material fatigue</li>
                        <li>(2) Impact damage</li>
                        <li>(3) Improper maintenance</li>
                        <li>(4) Design flaws</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">3) Symptoms:</p>
                      <ul className="ml-4 list-none">
                        <li>(1) Structural instability</li>
                        <li>(2) Cracks or deformations</li>
                        <li>(3) Abnormal vibrations</li>
                        <li>(4) Interference between components</li>
                      </ul>
                    </div>
                    <p className="mt-4">
                      The mechanical structure determines the overall stability and durability of the robot. Structural issues can threaten the safe operation of the robot.
                    </p>
                  </div>
                </section>
              </div>

              <p className="text-lg mt-8">
                Failures in humanoid robots can result in various consequences, from simple malfunctions to serious safety issues. Therefore, regular maintenance, proper use, and implementation of safety systems are essential. Additionally, when designing robots, it&apos;s important to consider dynamic loads in component design, which can improve the robot&apos;s stability and durability.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
