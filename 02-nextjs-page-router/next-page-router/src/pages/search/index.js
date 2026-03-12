import SearchLayout from '@/components/layouts/SearchLayout';
import MovieItem from '@/components/MovieItem';
import movies from '@/mock/movies.json';

export default function Search() {
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
