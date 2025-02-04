"use client";
import Layout from '@/components/Layout';
import { useState } from 'react';
import './styles.css';

export default function ServicePage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    additionalSymptoms: '',
    expectedVisitDate: ''
  });

  const handleSymptomClick = (symptom: string) => {
    setSelectedSymptom(symptom);
    setShowForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form data...'); // 디버깅 로그

    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedSymptom
        }),
      });

      const data = await response.json();
      console.log('Response:', data); // 디버깅 로그

      if (response.ok) {
        alert('Service request submitted successfully!');
        setFormData({
          customerName: '',
          phoneNumber: '',
          address: '',
          additionalSymptoms: '',
          expectedVisitDate: ''
        });
        setSelectedSymptom('');
        setShowForm(false);
      } else {
        throw new Error(data.message || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit service request. Please try again.');
    }
  };

  // 증상 텍스트에 onClick 이벤트 추가를 위한 컴포넌트
  const SymptomItem = ({ text }: { text: string }) => (
    <li 
      onClick={() => handleSymptomClick(text)}
      className="cursor-pointer hover:text-blue-600 transition-colors"
    >
      {text}
    </li>
  );

  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-lg shadow-lg p-8">
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
                        <SymptomItem text="(1) Limited or irregular joint movement" />
                        <SymptomItem text="(2) Unusual noise generation" />
                        <SymptomItem text="(3) Increased vibration" />
                        <SymptomItem text="(4) Reduced accuracy" />
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
                        <SymptomItem text="(1) Inaccurate environmental perception" />
                        <SymptomItem text="(2) Unstable balance maintenance" />
                        <SymptomItem text="(3) Touch response errors" />
                        <SymptomItem text="(4) Image processing issues" />
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
                        <SymptomItem text="(1) System instability or freezing" />
                        <SymptomItem text="(2) Abnormal behavior patterns" />
                        <SymptomItem text="(3) Reduced response time" />
                        <SymptomItem text="(4) Unexpected shutdowns" />
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
                        <SymptomItem text="(1) Reduced operating time" />
                        <SymptomItem text="(2) Sudden power cutoffs" />
                        <SymptomItem text="(3) Irregular power supply" />
                        <SymptomItem text="(4) Overheating" />
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
                        <SymptomItem text="(1) Structural instability" />
                        <SymptomItem text="(2) Cracks or deformations" />
                        <SymptomItem text="(3) Abnormal vibrations" />
                        <SymptomItem text="(4) Interference between components" />
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

          {/* 입력 폼 모달 */}
          {showForm && (
            <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl w-96 z-50">
              <form onSubmit={handleSubmit} className="service-form">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">Service Request Form</h3>
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <p className="font-bold mb-2">Selected Symptom:</p>
                  <p className="text-gray-600">{selectedSymptom}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Customer Name</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Additional Symptoms</label>
                  <textarea
                    name="additionalSymptoms"
                    value={formData.additionalSymptoms}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={3}
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Expected Visit Date</label>
                  <input
                    type="date"
                    name="expectedVisitDate"
                    value={formData.expectedVisitDate}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Submit button clicked');
                    handleSubmit(e);
                  }}
                  className="submit-button"
                >
                  Submit Request
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
