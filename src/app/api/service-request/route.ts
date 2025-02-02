import { NextResponse } from 'next/server';
import { appendToExcel } from '@/lib/excel-service';
import { getAccessToken } from '@/lib/auth-service';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 액세스 토큰 획득
    const accessToken = await getAccessToken();
    
    // Excel 파일에 데이터 추가
    await appendToExcel(data, accessToken);

    return NextResponse.json({ 
      success: true,
      message: 'Service request saved to Excel file'
    });

  } catch (error) {
    console.error('Error saving to Excel:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save request' }, 
      { status: 500 }
    );
  }
}