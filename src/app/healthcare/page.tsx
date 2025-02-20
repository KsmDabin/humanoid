"use client";
import React from 'react';
import Layout from '../../components/Layout';

export default function HealthcarePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Healthcare Solutions</h1>
        <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">Healthcare and Elderly Care</h1>
            
            <div className="space-y-8 text-gray-800">
              <section className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Humanoid robots are making significant strides in healthcare, particularly in elderly care. They serve as companions and caregivers, offering emotional support and assistance with daily tasks. For instance, robots like Grace can recognize emotions, show empathy, and understand over 100 languages, making them ideal for providing personalized care to the elderly.
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Monitor vital signs and provide medication reminders</li>
                  <li>Assist with mobility and self-care tasks</li>
                  <li>Offer companionship to reduce feelings of loneliness</li>
                  <li>Facilitate communication between patients and healthcare providers</li>
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
