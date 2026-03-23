import MovieItem from '@/components/MovieItem';
import SearchLayout from '@/components/layouts/SearchLayout';
import { fetchMovies } from '@/lib/movie';

export default function Search({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Search.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};

export const getServerSideProps = async (context) => {
  const { q } = context.query; // 쿼리 스트링 꺼내기 (q)
  const movies = await fetchMovies({ q }); // 검색어로 API 호출

  return {
    props: {
      movies,
    },
  };
};
