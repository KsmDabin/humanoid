export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body;
    
    // 디버깅을 위한 로그 추가
    console.log('Received data:', data);
    
    const client = await getAuthenticatedClient();
    
    // SharePoint 사이트와 파일 경로 확인
    const sitePath = process.env.SHAREPOINT_SITE_PATH;
    const filePath = process.env.EXCEL_FILE_PATH;
    
    console.log('Site Path:', sitePath);
    console.log('File Path:', filePath);
    
    // Excel 파일 업데이트
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