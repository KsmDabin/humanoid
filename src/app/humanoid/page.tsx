"use client";
import React from 'react';

export default function HumanoidPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Humanoid Robots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Humanoid Solutions</h2>
          <p className="text-gray-700 mb-4">
            Discover our advanced humanoid robotics technology designed for various applications.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Industrial Automation</li>
            <li>Healthcare Assistance</li>
            <li>Research & Development</li>
            <li>Educational Purposes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
