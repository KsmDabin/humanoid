import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 요청 데이터 로깅
    console.log('Service request received:', data);

    return NextResponse.json({ 
      success: true,
      message: 'Service request received'
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}