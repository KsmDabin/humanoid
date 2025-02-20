"use client";
import React, { useState, FormEvent } from 'react';
import Layout from '../components/Layout';
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [customerName, setCustomerName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [selectedSymptom, setSelectedSymptom] = useState<string>('');
  const [expectedDate, setExpectedDate] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/excel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName,
          phoneNumber,
          address,
          additionalSymptoms: selectedSymptom,
          expectedDate
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      alert('Service request submitted successfully!');
      
      // Reset form
      setCustomerName('');
      setPhoneNumber('');
      setAddress('');
      setSelectedSymptom('');
      setExpectedDate('');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit service request. Please try again.');
    }
  };

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
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-black text-white py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="relative w-[150px] h-[60px]">
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

            <h1 className="text-2xl font-bold mb-6">Service Request Form</h1>
            <form onSubmit={handleSubmit} className="max-w-md space-y-4">
              <div>
                <label htmlFor="customerName" className="block mb-1">Customer Name:</label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block mb-1">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label htmlFor="address" className="block mb-1">Address:</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label htmlFor="symptoms" className="block mb-1">Symptoms:</label>
                <select
                  id="symptoms"
                  value={selectedSymptom}
                  onChange={(e) => setSelectedSymptom(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select a symptom</option>
                  <option value="symptom1">Symptom 1</option>
                  <option value="symptom2">Symptom 2</option>
                  <option value="symptom3">Symptom 3</option>
                </select>
              </div>

              <div>
                <label htmlFor="expectedDate" className="block mb-1">Expected Date:</label>
                <input
                  type="date"
                  id="expectedDate"
                  value={expectedDate}
                  onChange={(e) => setExpectedDate(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Submit Request
              </button>
            </form>
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
    </Layout>
  );
}