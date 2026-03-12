import * as styles from '@/styles/home.css.js';
import SearchLayout from '@/components/layouts/SearchLayout';
import MovieItem from '@/components/MovieItem';
import movies from '@/mock/movies.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 상영중인 영화</h3>
        <div className={styles.list}>
          {movies.map((movie) => (
            <MovieItem key={`recommended-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        <div className={styles.list}>
          {movies.map((movie) => (
            <MovieItem key={`all-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};

// export const getServerSideProps = async ({ req }) => {
//   console.log('context', req.url);
//   const result = await fetch(`${process.env.API_URL}/api/movies`);
//   const data = await result.json();
//   console.log(data);
//   return {
//     props: {
//       data: data,
//     },
//   };
// };
