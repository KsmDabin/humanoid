export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body;
    // 여기에 데이터 처리 로직 추가 (데이터베이스 저장 등)
    
    return res.status(200).json({ message: '요청이 성공적으로 처리되었습니다.' });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
} 