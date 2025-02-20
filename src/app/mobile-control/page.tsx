"use client";
import React from 'react';

export default function MobileControlPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mobile Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Remote Control Features</h2>
          <p className="text-gray-700 mb-4">
            Control your devices remotely through our mobile application.
            Access all features and monitor performance from anywhere.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time monitoring</li>
            <li>Remote operation</li>
            <li>Status updates</li>
            <li>Performance analytics</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Mobile App Features</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-2">📱</span>
              <span>Easy-to-use interface</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔐</span>
              <span>Secure connection</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              <span>Quick response time</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📊</span>
              <span>Detailed analytics</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 