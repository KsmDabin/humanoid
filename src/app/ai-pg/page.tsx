'use client';
import React from 'react';
import Image from 'next/image';

export default function AIProgrammingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Programming</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image 
            src="/images/ai-programming.jpg" 
            alt="AI Programming"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced AI Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our AI programming solutions combine cutting-edge technology with practical applications,
            enabling smart automation and intelligent decision-making processes.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Machine Learning Integration</li>
            <li>Neural Network Development</li>
            <li>AI-Powered Automation</li>
            <li>Custom AI Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 