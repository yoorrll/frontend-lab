import MovieDetail from '@/components/MovieDetail';
import { fetchMovies, fetchOneMovie } from '@/lib/movie.server';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Page({ movie }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div className="container">로딩 중...</div>;
  }

  if (!movie)
    return <div className="container">영화 정보를 불러오는 중...</div>;

  return (
    <>
      <Head>
        <title>{movie.title} | Next Cinema</title>
        <meta name="description" content={movie.overview} />
      </Head>
      <main className="container">
        <MovieDetail {...movie} />
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  const movies = await fetchMovies();

  const movieIds = movies.slice(0, 10).map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return {
    paths: movieIds,
    //fallback: false -> 만들지 않은 페이지는 404로 처리 - 보통 바뀌지 않는 곳에 사용
    // fallback: 'blocking' -> 만들지 않은 페이지는 SSR로 처리 - 보통 자주 바뀌는 곳에 사용
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id: movieId } = context.params; // URL 파라미터 꺼내기

  console.log('Id', movieId);

  const movie = await fetchOneMovie(Number(movieId));

  if (!movie) {
    return {
      notFound: true, // 404 페이지로 이동
    };
  }

  return {
    props: { movie },
    revalidate: 10,
  };
};
