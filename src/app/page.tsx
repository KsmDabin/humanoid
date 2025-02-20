"use client";
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    selectedSymptom: '',
    expectedDate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Service request submitted successfully!');
        setFormData({
          customerName: '',
          phoneNumber: '',
          address: '',
          selectedSymptom: '',
          expectedDate: ''
        });
      } else {
        alert('Failed to submit service request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting service request');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Service Request System</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Service Request Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="customerName" className="block text-gray-700 mb-2">Customer Name:</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 mb-2">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="selectedSymptom" className="block text-gray-700 mb-2">Symptoms:</label>
            <select
              id="selectedSymptom"
              name="selectedSymptom"
              value={formData.selectedSymptom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a symptom</option>
              <option value="not-working">Not Working</option>
              <option value="poor-performance">Poor Performance</option>
              <option value="noise">Unusual Noise</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="expectedDate" className="block text-gray-700 mb-2">Expected Date:</label>
            <input
              type="date"
              id="expectedDate"
              name="expectedDate"
              value={formData.expectedDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}