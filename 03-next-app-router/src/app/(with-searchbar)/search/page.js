export default async function SearchPage({ searchParams }) {
  // HTML 만들 때 무슨 값이 올지 모르기 때문에 await(기다리기)
  const { q = '' } = await searchParams;
  const keyword = typeof q === 'string' ? q : '';

  return <div>검색어: {keyword}</div>;
}
