import { Client } from "@microsoft/microsoft-graph-client";
import { getAccessToken } from "./auth-service";

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
    const accessToken = await getAccessToken();
    console.log('Got access token'); // 디버깅 로그
    
    const client = Client.init({
      authProvider: (done: (error: any, token?: string) => void) => {
        done(null, accessToken);
      },
    });

    console.log('Attempting to append data:', data); // 디버깅 로그

    // SharePoint 사이트 경로 사용
    const driveItem = await client.api(`/me/drive/items/${process.env.EXCEL_FILE_ID}`).get();
    console.log('Drive item:', driveItem); // 디버깅 로그

    const endpoint = `/me/drive/items/${process.env.EXCEL_FILE_ID}/workbook/tables/Table1/rows`;
    
    const response = await client.api(endpoint).post({
      values: [[
        data.customerName || '',
        data.phoneNumber || '',
        data.address || '',
        data.additionalSymptoms || '',
        data.expectedVisitDate || '',
        data.selectedSymptom || '',
        new Date().toISOString()
      ]]
    });

    console.log('Excel append response:', response); // 디버깅 로그
    return true;
  } catch (error: unknown) {
    console.error('Excel append error:', error);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    throw error;
  }
} 