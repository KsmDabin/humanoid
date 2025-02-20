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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Service Request System</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="customerName" className="block mb-2">Customer Name:</label>
            <input
              type="text"
              id="customerName"
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}