import { NextResponse } from 'next/server';

// Excel 서비스 사용하지 않음
export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 데이터 로깅만 수행
    console.log('Received service request:', data);

    // 성공 응답 반환
    return NextResponse.json({ 
      success: true,
      message: 'Service request received successfully'
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}