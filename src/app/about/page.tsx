"use client";
import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center">About Humanoid Robots</h1>
          
          <div className="space-y-8 text-gray-800">
            {/* Introduction */}
            <p className="text-lg leading-relaxed">
              Humanoid robots are rapidly becoming an integral part of our daily lives, offering a wide range of applications that enhance and enrich human existence. These advanced machines, designed to mimic human form and behavior, are revolutionizing various sectors and providing innovative solutions to everyday challenges.
            </p>

            {/* Healthcare Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">1. Healthcare and Elderly Care</h2>
              <p className="leading-relaxed">
                Humanoid robots are making significant strides in healthcare, particularly in elderly care. They serve as companions and caregivers, offering emotional support and assistance with daily tasks. For instance, robots like Grace can recognize emotions, show empathy, and understand over 100 languages, making them ideal for providing personalized care to the elderly. These robots can:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Monitor vital signs and provide medication reminders</li>
                <li>Assist with mobility and self-care tasks</li>
                <li>Offer companionship to reduce feelings of loneliness</li>
                <li>Facilitate communication between patients and healthcare providers</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
} 