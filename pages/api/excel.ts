import { NextApiRequest, NextApiResponse } from 'next';
import { getAuthenticatedClient } from '../../utils/sharepoint';

interface RequestData {
  customerName: string;
  phoneNumber: string;
  address: string;
  additionalSymptoms: string;
  expectedDate: string;
}

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
    const filePath = process.env.EXCEL_FILE_PATH;

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