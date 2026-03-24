export default async function handler(req, res) {
  // 1️⃣ 토큰 검증: 요청에 들어온 토큰이 내 서버의 비밀키와 일치하는지 확인
  // 예: /api/revalidate?token=1234&path=/movie/1
  // if (req.query.token !== process.env.ISR_TOKEN) {
  //   return res.status(401).json({ message: 'Invalid token' });
  // }

  // 2️⃣ 경로 받기: 쿼리 스트링으로 path를 받아옴 (없으면 기본값 '/')
  const path = req.query.path || '/';

  try {
    // 3️⃣ 해당 경로 리빌드(Regeneration)
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch {
    return res.status(500).send('Error revalidating');
  }
}
