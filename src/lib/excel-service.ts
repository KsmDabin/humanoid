import { ServiceRequest } from './types';

// 메모리에 데이터 저장
const requests: ServiceRequest[] = [];

export const ExcelService = {
  // 새 요청 추가
  addRequest: (data: Omit<ServiceRequest, 'id' | 'createdAt'>) => {
    const newRequest: ServiceRequest = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    requests.push(newRequest);
    return newRequest;
  },

  // 모든 요청 조회
  getAllRequests: () => {
    return [...requests];
  },

  // ID로 요청 조회
  getRequestById: (id: string) => {
    return requests.find(request => request.id === id);
  }
};

