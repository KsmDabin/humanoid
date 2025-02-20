import { NextResponse } from 'next/server';

// 메모리에 데이터 저장
const serviceRequests: any[] = [];

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 새 서비스 요청 생성
    const newRequest = {
      id: Date.now().toString(),
      customerName: data.customerName,
      phoneNumber: data.phoneNumber,
      address: data.address,
      symptoms: data.selectedSymptom,
      expectedDate: data.expectedDate,
      createdAt: new Date()
    };

    // 메모리에 저장
    serviceRequests.push(newRequest);

    // 성공 응답 반환
    return NextResponse.json({ 
      success: true, 
      data: newRequest,
      message: 'Service request submitted successfully'
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process service request' 
      },
      { status: 500 }
    );
  }
}

// GET 요청 처리 (옵션)
export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      data: serviceRequests 
    });
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch service requests' 
      },
      { status: 500 }
    );
  }
}