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
    return token.token;
  } catch (error) {
    console.error('Failed to get access token:', error);
    throw error;
  }
} 