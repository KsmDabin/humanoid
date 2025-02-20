"use client";
import React, { useState, FormEvent } from 'react';
import Layout from '../components/Layout';

export default function Home() {
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Service Request System</h1>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Service Request Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
                Customer Name:
              </label>
              <input
                type="text"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address:
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                Symptoms:
              </label>
              <select
                id="symptoms"
                value={selectedSymptom}
                onChange={(e) => setSelectedSymptom(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a symptom</option>
                <option value="symptom1">Symptom 1</option>
                <option value="symptom2">Symptom 2</option>
                <option value="symptom3">Symptom 3</option>
              </select>
            </div>

            <div>
              <label htmlFor="expectedDate" className="block text-sm font-medium text-gray-700 mb-2">
                Expected Date:
              </label>
              <input
                type="date"
                id="expectedDate"
                value={expectedDate}
                onChange={(e) => setExpectedDate(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}