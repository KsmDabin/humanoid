import { NextResponse } from 'next/server';

// 임시 인증 함수
export async function getAccessToken(): Promise<string> {
  try {
    // 실제 Azure AD 인증 로직은 나중에 구현
    return "temporary_token";
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
} 