import { NextResponse } from 'next/server';
import { appendToExcel } from '@/lib/excel-service';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);

    try {
      await appendToExcel(data);
      
      return NextResponse.json({ 
        success: true,
        message: 'Service request saved successfully'
      });
    } catch (error) {
      console.error('Failed to save to Excel:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to save request' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid request data' },
      { status: 400 }
    );
  }
}