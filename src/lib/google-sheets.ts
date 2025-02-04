import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// Google Sheets API 인증 설정
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

const sheets = google.sheets({ version: 'v4', auth });

export async function appendToSheet(values: any[]) {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F', // 데이터를 추가할 범위
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
} 