"use client";
import React, { useState } from 'react';

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState('technical');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Service Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <div className="space-y-4">
            <button
              className={`w-full text-left p-3 rounded ${
                selectedService === 'technical' ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedService('technical')}
            >
              Technical Support
            </button>
            <button
              className={`w-full text-left p-3 rounded ${
                selectedService === 'maintenance' ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedService('maintenance')}
            >
              Maintenance Service
            </button>
            <button
              className={`w-full text-left p-3 rounded ${
                selectedService === 'repair' ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedService('repair')}
            >
              Repair Service
            </button>
            <button
              className={`w-full text-left p-3 rounded ${
                selectedService === 'parts' ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedService('parts')}
            >
              Parts Replacement
            </button>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <span>Service Hotline: 1234-5678</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <span>Email: service@dabinko.com</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🕒</span>
              <span>Hours: Mon-Fri 9:00-18:00</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              <span>Location: Service Center Address</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
