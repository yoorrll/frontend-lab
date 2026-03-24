export default async function MoviePage({ params }) {
  const { id } = await params;
  return <div>영화 페이지: {id}</div>;
}
