'use client';
import React, { useState } from 'react';

const symptoms = [
  "Symptom 1",
  "Symptom 2",
  "Symptom 3",
  // ... 기타 증상들
];

export default function Home() {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [expectedDate, setExpectedDate] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      
      // 폼 초기화
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

  return (
    <main className="min-h-screen p-8">
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
            {symptoms.map((symptom) => (
              <option key={symptom} value={symptom}>
                {symptom}
              </option>
            ))}
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
    </main>
  );
} 