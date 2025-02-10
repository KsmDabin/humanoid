const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  
  try {
    // 폼 데이터 수집
    const formData = {
      customerName,
      phoneNumber,
      address,
      additionalSymptoms: selectedSymptom,
      expectedDate
    };
    
    console.log('Submitting form data:', formData);
    
    // API 호출
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
    
    const result = await response.json();
    console.log('Submit result:', result);
    
    // 성공 메시지 표시
    alert('Service request submitted successfully!');
    
    // 폼 초기화
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