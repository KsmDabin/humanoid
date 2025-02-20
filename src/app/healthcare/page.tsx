"use client";
import React from 'react';

export default function HealthcarePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Healthcare Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Medical Technology</h2>
          <p className="text-gray-700 mb-4">
            Advanced healthcare solutions for modern medical facilities.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Patient Monitoring</li>
            <li>Medical Diagnostics</li>
            <li>Rehabilitation Systems</li>
            <li>Healthcare Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
