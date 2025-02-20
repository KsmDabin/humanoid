"use client";
import React from 'react';
import Image from 'next/image';

export default function HumanoidPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Humanoid Robots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image 
            src="/images/humanoid-robot.jpg" 
            alt="Humanoid Robot"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced Robotics Technology</h2>
          <p className="text-gray-700 mb-4">
            Our humanoid robots represent the cutting edge of robotics technology,
            combining advanced AI with precise mechanical engineering.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}
