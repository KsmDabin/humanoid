import { NextResponse } from 'next/server';
import { ExcelService } from '../../../lib/excel-service';

// 요청 데이터 타입 정의
interface RequestData {
  customerName: string;
  phoneNumber: string;
  address: string;
  selectedSymptom: string;
  expectedDate: string;
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as RequestData;
    
    const newRequest = ExcelService.addRequest({
      customerName: data.customerName,
      phoneNumber: data.phoneNumber,
      address: data.address,
      symptoms: data.selectedSymptom,
      expectedDate: data.expectedDate
    });

    return NextResponse.json({ 
      success: true, 
      data: newRequest 
    });

  } catch (err) {
    console.error('Error processing request:', err);
    
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to process request'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const requests = ExcelService.getRequests();
    return NextResponse.json({ 
      success: true, 
      data: requests 
    });
  } catch (err) {
    console.error('Error fetching requests:', err);
    
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to fetch requests'
      },
      { status: 500 }
    );
  }
}