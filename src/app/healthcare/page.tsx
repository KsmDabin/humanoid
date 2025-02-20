"use client";
import React from 'react';

export default function HealthcarePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Healthcare Solutions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 의료 모니터링 시스템 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Medical Monitoring</h2>
          <p className="text-gray-700 mb-4">
            Advanced patient monitoring systems with real-time data analysis and alerts.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Vital Signs Monitoring</li>
            <li>Remote Patient Tracking</li>
            <li>Emergency Alert System</li>
            <li>Data Analytics Dashboard</li>
          </ul>
        </div>

        {/* 진단 시스템 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Diagnostic Systems</h2>
          <p className="text-gray-700 mb-4">
            State-of-the-art diagnostic tools powered by AI and machine learning.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>AI-Powered Diagnostics</li>
            <li>Medical Imaging Analysis</li>
            <li>Lab Results Integration</li>
            <li>Predictive Analytics</li>
          </ul>
        </div>

        {/* 재활 솔루션 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Rehabilitation Solutions</h2>
          <p className="text-gray-700 mb-4">
            Comprehensive rehabilitation systems for optimal patient recovery.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Physical Therapy Tracking</li>
            <li>Progress Monitoring</li>
            <li>Exercise Guidelines</li>
            <li>Recovery Analytics</li>
          </ul>
        </div>

        {/* 텔레메디신 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Telemedicine</h2>
          <p className="text-gray-700 mb-4">
            Remote healthcare services with secure video consultations.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Video Consultations</li>
            <li>Secure Messaging</li>
            <li>Digital Prescriptions</li>
            <li>Patient Portal</li>
          </ul>
        </div>

        {/* 의료 데이터 관리 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Healthcare Data Management</h2>
          <p className="text-gray-700 mb-4">
            Secure and efficient medical data management solutions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Electronic Health Records</li>
            <li>Data Security</li>
            <li>Analytics Tools</li>
            <li>Compliance Management</li>
          </ul>
        </div>

        {/* 응급 대응 시스템 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Emergency Response</h2>
          <p className="text-gray-700 mb-4">
            Rapid emergency response systems with real-time coordination.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Emergency Alerts</li>
            <li>Resource Management</li>
            <li>Response Coordination</li>
            <li>Real-time Tracking</li>
          </ul>
        </div>
      </div>

      {/* 문의하기 섹션 */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
        <p className="text-gray-700 mb-6">
          Contact our healthcare solutions team for detailed information and demonstrations.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Contact Healthcare Team
        </button>
      </div>
    </div>
  );
}
