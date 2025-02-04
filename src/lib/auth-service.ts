import { ClientSecretCredential } from "@azure/identity";

// 임시 인증 함수
export async function getAccessToken(): Promise<string> {
  try {
    const credential = new ClientSecretCredential(
      process.env.AZURE_TENANT_ID!,
      process.env.AZURE_CLIENT_ID!,
      process.env.AZURE_CLIENT_SECRET!
    );

    const token = await credential.getToken("https://graph.microsoft.com/.default");
    console.log('Token obtained successfully'); // 디버깅 로그
    return token.token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
} 