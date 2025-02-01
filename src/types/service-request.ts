export interface ServiceRequest {
  customerName: string;
  phoneNumber: string;
  address: string;
  additionalSymptoms: string;
  expectedVisitDate: string;
  selectedSymptom: string;
  createdAt?: Date;
  status?: 'pending' | 'in-progress' | 'completed';
} 