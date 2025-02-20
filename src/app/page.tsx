"use client";
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    symptoms: '',
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
          symptoms: '',
          expectedDate: ''
        });
      } else {
        throw new Error('Failed to submit request');
      }
    } catch (error) {
      alert('Error submitting request. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Service Request System</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Service Request Form</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Customer Name:</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone Number:</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-input"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Symptoms:</label>
            <select
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              className="form-input"
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
              name="expectedDate"
              value={formData.expectedDate}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}