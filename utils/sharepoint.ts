import { Client } from "@microsoft/microsoft-graph-client";
import { TokenCredentialAuthenticationProvider } from "@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials";
import { ClientSecretCredential } from "@azure/identity";

// Microsoft Graph 클라이언트 타입 정의
type GraphClient = Client & {
  api(path: string): any;
};

// 파일 정보 인터페이스
interface SharePointFileInfo {
  id: string;
  name: string;
  webUrl: string;
  size?: number;
  createdDateTime?: string;
  lastModifiedDateTime?: string;
}

interface SharePointSite {
  id: string;
  name: string;
  webUrl: string;
  permissions?: any;
}

/**
 * Graph 클라이언트를 인증하고 반환하는 함수
 */
export async function getAuthenticatedClient(): Promise<Client> {
  if (!process.env.SHAREPOINT_TENANT_ID || 
      !process.env.SHAREPOINT_CLIENT_ID || 
      !process.env.SHAREPOINT_CLIENT_SECRET) {
    throw new Error('SharePoint credentials are not configured');
  }

  const credential = new ClientSecretCredential(
    process.env.SHAREPOINT_TENANT_ID,
    process.env.SHAREPOINT_CLIENT_ID,
    process.env.SHAREPOINT_CLIENT_SECRET
  );

  const authProvider = new TokenCredentialAuthenticationProvider(credential, {
    scopes: ['https://graph.microsoft.com/.default']
  });

  return Client.initWithMiddleware({
    authProvider,
    defaultVersion: 'v1.0'
  });
}

/**
 * SharePoint 파일 접근을 확인하는 함수
 */
export async function checkFileAccess(): Promise<SharePointFileInfo> {
  const client = await getAuthenticatedClient();
  const sitePath = process.env.SHAREPOINT_SITE_PATH;
  const filePath = process.env.EXCEL_FILE_PATH;
  
  if (!sitePath || !filePath) {
    throw new Error('SharePoint paths not configured');
  }

  try {
    const file = await client
      .api(`${sitePath}/drive/root:/${filePath}`)
      .get();
    return file as SharePointFileInfo;
  } catch (error) {
    console.error('File access error:', error);
    throw error;
  }
}

/**
 * Excel 파일에 데이터를 추가하는 함수
 */
export async function addExcelRow(rowData: string[]): Promise<void> {
  const client = await getAuthenticatedClient();
  const sitePath = process.env.SHAREPOINT_SITE_PATH;
  const filePath = process.env.EXCEL_FILE_PATH;

  if (!sitePath || !filePath) {
    throw new Error('SharePoint paths not configured');
  }

  try {
    await client
      .api(`${sitePath}/drive/root:/${filePath}:/workbook/tables/Table1/rows/add`)
      .post({
        values: [rowData]
      });
  } catch (error) {
    console.error('Error adding Excel row:', error);
    throw error;
  }
}

// SharePoint 권한 확인 함수 추가
export async function checkPermissions(): Promise<SharePointSite> {
  const client = await getAuthenticatedClient();
  const sitePath = process.env.SHAREPOINT_SITE_PATH;
  
  if (!sitePath) {
    throw new Error('SharePoint site path is not configured');
  }

  try {
    const site = await client.api(sitePath).get();
    return site as SharePointSite;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`SharePoint 권한 오류: ${errorMessage}`);
  }
}

export async function validatePath(path: string): Promise<string> {
  if (!path) {
    throw new Error('Path is required');
  }

  if (path.match(/[<>?[\]:|*]/)) {
    throw new Error('파일 경로에 허용되지 않는 문자가 포함되어 있습니다');
  }

  if (path.length > 218) {
    throw new Error('파일 경로가 너무 깁니다');
  }

  return path;
}