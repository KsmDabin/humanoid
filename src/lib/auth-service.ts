import { ClientSecretCredential } from "@azure/identity";
import { User } from './types';

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

export const AuthService = {
  // 현재 사용자 정보 가져오기
  getCurrentUser: (): User | null => {
    return null;
  },

  // 로그인 상태 확인
  isAuthenticated: (): boolean => {
    return false;
  }
}; 