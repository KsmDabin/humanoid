import { getGraphClient } from './graph-client';

interface ServiceRequest {
  customerName: string;
  phoneNumber: string;
  address: string;
  additionalSymptoms: string;
  expectedVisitDate: string;
  selectedSymptom: string;
}

export async function appendToExcel(data: ServiceRequest): Promise<boolean> {
  try {
    // 실제 Excel 처리 로직은 나중에 구현
    console.log('Service request data:', data);
    return true;
  } catch (error) {
    console.error('Excel processing error:', error);
    throw error;
  }
} 