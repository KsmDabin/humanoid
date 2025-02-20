export interface ServiceRequest {
  id: string;
  customerName: string;
  phoneNumber: string;
  address: string;
  symptoms: string;
  expectedDate: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
} 