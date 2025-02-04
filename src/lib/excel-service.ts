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
        data.additionalSymptoms || '',
        data.expectedVisitDate || '',
        data.selectedSymptom || '',
        new Date().toISOString()
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