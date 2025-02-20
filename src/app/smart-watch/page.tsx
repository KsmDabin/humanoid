"use client";
import React from 'react';

export default function SmartWatchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Smart Watch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Smart Watch Features</h2>
          <p className="text-gray-700 mb-4">
            Next-generation smart watch technology for modern lifestyle.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Health Monitoring</li>
            <li>Fitness Tracking</li>
            <li>Smart Notifications</li>
            <li>GPS Navigation</li>
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Compatible Devices</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-2">⌚</span>
              <span>Apple Watch</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">⌚</span>
              <span>Samsung Galaxy Watch</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">⌚</span>
              <span>Garmin Smartwatch</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">⌚</span>
              <span>Other Wear OS devices</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 