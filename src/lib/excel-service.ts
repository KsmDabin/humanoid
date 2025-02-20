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

export async function appendToExcel(data: ServiceRequest): Promise<boolean> {
  try {
    const accessToken = await getToken();
    console.log('Got access token'); // 디버깅 로그
    
    const client = Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      },
    });

    // SharePoint 사이트 경로 사용
    const endpoint = `/sites/dabinko.sharepoint.com:/personal/wongookim_dabinko_onmicrosoft_com:/drive/items/${process.env.EXCEL_FILE_ID}/workbook/tables/Table1/rows/add`;
    
    console.log('Using endpoint:', endpoint); // 디버깅 로그
    console.log('Sending data:', data); // 디버깅 로그

    const response = await client.api(endpoint).post({
      values: [[
        data.customerName || '',
        data.phoneNumber || '',
        data.address || '',
        data.symptoms || '',
        data.expectedDate || '',
        data.createdAt.toISOString()
      ]]
    });

    console.log('Excel append response:', response); // 디버깅 로그
    return true;
  } catch (error) {
    console.error('Excel append error:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
    throw error;
  }
} 