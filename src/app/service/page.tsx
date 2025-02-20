"use client";
import React, { useState } from 'react';

export default function Service() {
  const [selectedService, setSelectedService] = useState('technical');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <p className="text-gray-600">Service page content...</p>
    </div>
  );
}
