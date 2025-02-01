import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const filePath = path.join('D:', 'Cursor', 'humanoid', 'Service Request Form.xlsx');

    // Excel 파일 읽기
    let workbook;
    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
    } else {
      workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([]), 'Sheet1');
    }

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // 마지막 행 번호 찾기
    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1:F1');
    const lastRow = range.e.r + 2;  // 새로운 데이터를 위한 다음 행

    // 새로운 데이터 추가
    XLSX.utils.sheet_add_aoa(worksheet, [[
      '',  // A열은 비워둠
      data.customerName,  // B열
      data.phoneNumber,   // C열
      data.address,       // D열
      data.additionalSymptoms, // E열
      data.expectedVisitDate   // F열
    ]], { origin: lastRow });

    // 파일 저장
    XLSX.writeFile(workbook, filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving to Excel:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save data' }, 
      { status: 500 }
    );
  }
} 