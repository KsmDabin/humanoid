"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [expectedDate, setExpectedDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Service Request System</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/service" className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
            Service Center
          </Link>
          <Link href="/humanoid" className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600">
            Humanoid Products
          </Link>
          <Link href="/healthcare" className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600">
            Healthcare Solutions
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Service Request Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Customer Name:</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Address:</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Symptoms:</label>
            <select
              value={selectedSymptom}
              onChange={(e) => setSelectedSymptom(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a symptom</option>
              <option value="not_working">Not Working</option>
              <option value="slow_performance">Slow Performance</option>
              <option value="error_message">Error Message</option>
              <option value="physical_damage">Physical Damage</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Expected Date:</label>
            <input
              type="date"
              value={expectedDate}
              onChange={(e) => setExpectedDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}