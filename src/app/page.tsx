"use client";
import { useState, FormEvent } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    symptoms: '',
    expectedDate: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Service Request System</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Service Request Form</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="customerName" className="block mb-2">Customer Name:</label>
            <input
              type="text"
              id="customerName"
              value={formData.customerName}
              onChange={(e) => setFormData({...formData, customerName: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-2">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block mb-2">Address:</label>
            <textarea
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full p-2 border rounded"
              rows={3}
              required
            />
          </div>

          <div>
            <label htmlFor="symptoms" className="block mb-2">Symptoms:</label>
            <select
              id="symptoms"
              value={formData.symptoms}
              onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a symptom</option>
              <option value="not_working">Not Working</option>
              <option value="slow">Slow Performance</option>
              <option value="error">Error Message</option>
              <option value="damage">Physical Damage</option>
            </select>
          </div>

          <div>
            <label htmlFor="expectedDate" className="block mb-2">Expected Date:</label>
            <input
              type="date"
              id="expectedDate"
              value={formData.expectedDate}
              onChange={(e) => setFormData({...formData, expectedDate: e.target.value})}
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