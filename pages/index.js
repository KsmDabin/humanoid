import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    symptoms: '',
    expectedDate: ''
  });

  const symptoms = [
    "컴퓨터 수리",
    "네트워크 문제",
    "소프트웨어 설치",
    "하드웨어 업그레이드",
    "바이러스 제거",
    "데이터 복구"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API 호출 로직 추가
    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('요청이 성공적으로 제출되었습니다!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('요청 제출 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Service Request System</h1>
      <h2>Service Request Form</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Customer Name:</label>
          <input
            type="text"
            value={formData.customerName}
            onChange={(e) => setFormData({...formData, customerName: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Address:</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Symptoms:</label>
          <select
            value={formData.symptoms}
            onChange={(e) => setFormData({...formData, symptoms: e.target.value})}
            required
          >
            <option value="">Select a symptom</option>
            {symptoms.map((symptom, index) => (
              <option key={index} value={symptom}>{symptom}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Expected Date:</label>
          <input
            type="date"
            value={formData.expectedDate}
            onChange={(e) => setFormData({...formData, expectedDate: e.target.value})}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Request
        </button>
      </form>

      <footer className={styles.footer}>
        © 2025 Service Request System. All rights reserved.
      </footer>
    </div>
  );
} 