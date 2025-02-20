"use client";
import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About DABINKO</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
          <p className="text-gray-700 mb-4">
            DABINKO is a leading technology company specializing in robotics, 
            healthcare solutions, and artificial intelligence.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Established in 2020</li>
            <li>Global presence</li>
            <li>Innovation leader</li>
            <li>Customer-focused solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 