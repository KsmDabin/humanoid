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

export interface ExcelServiceType {
  addRequest: (data: Omit<ServiceRequest, 'id' | 'createdAt'>) => ServiceRequest;
  getAllRequests: () => ServiceRequest[];
  getRequestById: (id: string) => ServiceRequest | undefined;
}

export interface AuthServiceType {
  getCurrentUser: () => User | null;
  isAuthenticated: () => boolean;
} 