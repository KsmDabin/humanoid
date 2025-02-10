'use client';
import { useState } from 'react';

interface FormData {
  customerName: string;
  phoneNumber: string;
  address: string;
  additionalSymptoms: string;
  expectedDate: string;
}

export default function Home() {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [expectedDate, setExpectedDate] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      const formData: FormData = {
        customerName,
        phoneNumber,
        address,
        additionalSymptoms: selectedSymptom,
        expectedDate
      };
      
      const response = await fetch('/api/excel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      alert('Service request submitted successfully!');
      
      // Reset form
      setCustomerName('');
      setPhoneNumber('');
      setAddress('');
      setSelectedSymptom('');
      setExpectedDate('');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit service request. Please try again.');
    }
  };

  return (
    // ... 기존 JSX 코드 유지
  );
} 