import { Client } from "@microsoft/microsoft-graph-client";
import { getToken } from "./auth";

export async function getAuthenticatedClient() {
  const token = await getToken();
  
  return Client.init({
    authProvider: (done) => {
      done(null, token);
    },
    defaultVersion: 'v1.0'
  });
}

// Excel 파일 접근 권한 확인 함수 추가
export async function checkFileAccess() {
  const client = await getAuthenticatedClient();
  const sitePath = process.env.SHAREPOINT_SITE_PATH;
  const filePath = process.env.EXCEL_FILE_PATH;
  
  if (!sitePath || !filePath) {
    throw new Error('SharePoint paths not configured');
  }

  try {
    const file = await client.api(`${sitePath}/drive/root:/${filePath}`).get();
    return file;
  } catch (error) {
    console.error('File access error:', error);
    throw error;
  }
} 