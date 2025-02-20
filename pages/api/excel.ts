import { NextApiRequest, NextApiResponse } from 'next';
import { getAuthenticatedClient } from '../../utils/sharepoint';

interface RequestData {
  customerName: string;
  phoneNumber: string;
  address: string;
  additionalSymptoms: string;
  expectedDate: string;
}

// 파일 경로 검증 추가
const validatePath = (path: string) => {
  if (path.match(/[<>?[\]:|*]/)) {
    throw new Error('파일 경로에 허용되지 않는 문자가 포함되어 있습니다');
  }
  if (path.length > 218) {
    throw new Error('파일 경로가 너무 깁니다');
  }
  return path;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body as RequestData;
    const client = await getAuthenticatedClient();
    
    const sitePath = process.env.SHAREPOINT_SITE_PATH;
    const filePath = validatePath(process.env.EXCEL_FILE_PATH || '');

    // 파일 접근 테스트
    const fileInfo = await client
      .api(`${sitePath}/drive/root:/${filePath}`)
      .get();
    console.log('File exists:', fileInfo);
    
    // 파일 쓰기 권한 테스트
    const testSession = await client
      .api(`${sitePath}/drive/root:/${filePath}:/workbook/createSession`)
      .post({
        persistChanges: true
      });
    console.log('Write permission confirmed:', testSession);

    await client.api(`${sitePath}/drive/root:/${filePath}:/workbook/tables/Table1/rows/add`)
      .post({
        values: [[
          data.customerName,
          data.phoneNumber,
          data.address,
          data.additionalSymptoms,
          data.expectedDate,
          new Date().toISOString()
        ]]
      });

    res.status(200).json({ message: 'Data submitted successfully' });
  } catch (error) {
    console.error('Error in Excel API:', error);
    res.status(500).json({ error: 'Failed to submit data' });
  }
} 