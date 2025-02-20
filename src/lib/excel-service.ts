// 서비스 요청 타입 정의
export interface ServiceRequest {
  id: string;
  customerName: string;
  phoneNumber: string;
  address: string;
  symptoms: string;
  expectedDate: string;
  createdAt: Date;
}

// 메모리 저장소
class RequestStore {
  private static requests: ServiceRequest[] = [];

  static addRequest(data: Omit<ServiceRequest, 'id' | 'createdAt'>): ServiceRequest {
    const newRequest: ServiceRequest = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    this.requests.push(newRequest);
    return newRequest;
  }

  static getRequests(): ServiceRequest[] {
    return [...this.requests];
  }

  static getRequestById(id: string): ServiceRequest | undefined {
    return this.requests.find(request => request.id === id);
  }
}

// 외부로 노출할 서비스 인터페이스
export const ExcelService = {
  addRequest: (data: Omit<ServiceRequest, 'id' | 'createdAt'>) => {
    try {
      return RequestStore.addRequest(data);
    } catch (error) {
      console.error('Error adding request:', error);
      throw new Error('Failed to add request');
    }
  },

  getRequests: () => {
    try {
      return RequestStore.getRequests();
    } catch (error) {
      console.error('Error getting requests:', error);
      throw new Error('Failed to get requests');
    }
  },

  getRequestById: (id: string) => {
    try {
      return RequestStore.getRequestById(id);
    } catch (error) {
      console.error('Error getting request:', error);
      throw new Error('Failed to get request');
    }
  }
};

