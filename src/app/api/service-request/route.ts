import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // MongoDB 연결
    const client = await clientPromise;
    const db = client.db('humanoid-service');
    const collection = db.collection('service-requests');

    // 타임스탬프 추가
    const serviceRequest = {
      ...data,
      createdAt: new Date(),
      status: 'pending' // 초기 상태
    };

    // MongoDB에 데이터 저장
    const result = await collection.insertOne(serviceRequest);

    return NextResponse.json({ 
      success: true,
      message: 'Service request saved successfully',
      requestId: result.insertedId
    });

  } catch (error) {
    console.error('Error saving service request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save request' }, 
      { status: 500 }
    );
  }
} 