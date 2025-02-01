"use client";
import Layout from '@/components/Layout';

export default function AIProgrammingPage() {
  return (
    <Layout>
      <main className="flex-grow bg-gradient-to-b from-green-100 to-green-400 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">AI Programming</h1>
            
            <div className="space-y-6 text-gray-800">
              <p className="text-lg">
                Humanoid robots can move naturally in response to human commands and instructions through a complex interplay of hardware and software systems. This organic interaction between machine and program involves several key components:
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">1. Motion Planning and Control</h2>
                <p>
                  Humanoid robots use advanced motion planning algorithms to generate smooth, human-like movements. These algorithms typically involve:
                </p>
                <ul className="ml-6 space-y-2">
                  <li>1) Inverse kinematics: Calculating joint angles needed to achieve desired end-effector positions.</li>
                  <li>2) Trajectory optimization: Generating optimal paths that consider constraints like joint limits and obstacle avoidance.</li>
                  <li>3) Dynamic balance control: Maintaining stability during movement using techniques like Zero Moment Point (ZMP) control.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">2. Natural Language Processing (NLP)</h2>
                <p>To understand human commands, humanoids employ NLP techniques:</p>
                <ul className="ml-6 space-y-2">
                  <li>1) Speech recognition: Converting spoken words to text.</li>
                  <li>2) Natural language understanding: Extracting meaning and intent from the text.</li>
                  <li>3) Dialogue management: Maintaining context in conversations.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">3. Computer Vision</h2>
                <p>Visual perception is crucial for natural interaction:</p>
                <ul className="ml-6 space-y-2">
                  <li>1) Object recognition: Identifying objects and people in the environment.</li>
                  <li>2) Gesture recognition: Interpreting human body language and gestures.</li>
                  <li>3) Facial expression analysis: Understanding human emotions.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">4. Machine Learning and Adaptation</h2>
                <p>Humanoids use machine learning to improve their performance over time:</p>
                <ul className="ml-6 space-y-2">
                  <li>1) Reinforcement learning: Optimizing actions based on rewards and penalties.</li>
                  <li>2) Imitation learning: Learning new skills by observing human demonstrations.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">5. Real-time Integration</h2>
                <p>The organic interaction between hardware and software relies on:</p>
                <ul className="ml-6 space-y-2">
                  <li>1) Sensor fusion: Combining data from multiple sensors (e.g., cameras, force sensors, IMUs) for a comprehensive understanding of the environment.</li>
                  <li>2) Real-time operating systems: Ensuring timely processing of sensor data and execution of control commands[40].</li>
                  <li>3) Distributed computing: Coordinating multiple processors for different tasks (e.g., vision, motion control, NLP)[28].</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold">6. Example System Architecture</h2>
                <p>A typical humanoid robot system might be structured as follows:</p>
                <ul className="ml-6 space-y-2">
                  <li>1) Perception layer: Processes sensor data to understand the environment and human commands.</li>
                  <li>2) Cognitive layer: Interprets perceptual information, makes decisions, and plans actions.</li>
                  <li>3) Control layer: Translates high-level plans into specific joint movements and motor commands.</li>
                  <li>4) Actuation layer: Executes commands through motors and actuators[28][40].</li>
                </ul>
                <p className="mt-4">
                  These layers communicate continuously, allowing the robot to react quickly to changes in its environment or new commands.
                </p>
              </section>

              <p className="text-lg mt-8">
                By integrating these components, humanoid robots can achieve natural, human-like movements in response to human instructions. The key is the seamless coordination between hardware (sensors and actuators) and software (perception, decision-making, and control algorithms), creating an organic system that can adapt and respond in real-time to complex, dynamic environments.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
