'use client';
import React from 'react';

export default function AIPGPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Programming</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">AI Solutions</h2>
          <p className="text-gray-700 mb-4">
            Cutting-edge AI programming solutions for modern businesses.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 