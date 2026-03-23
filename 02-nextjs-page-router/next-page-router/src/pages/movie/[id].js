import MovieDetail from '@/components/MovieDetail';
import { fetchOneMovie } from '@/lib/movie';

export default function Page({ movie }) {
  if (!movie) return <div>로딩 실패</div>;

  return (
    <div className="container">
      <MovieDetail {...movie} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.params; // URL 파라미터 꺼내기

  // 💡 입력값 검증: 숫자가 아니면 404 처리 (보안 및 에러 방지)
  const movieId = Number(id);
  if (!Number.isInteger(movieId) || movieId <= 0) {
    return {
      notFound: true,
    };
  }

  const movie = await fetchOneMovie(movieId);

  if (!movie) {
    return {
      notFound: true, // 404 페이지로 이동
    };
  }

  return {
    props: { movie },
  };
};
