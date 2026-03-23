import * as styles from '@/styles/home.css.js';
import SearchLayout from '@/components/layouts/SearchLayout';
import MovieItem from '@/components/MovieItem';
import movies from '@/mock/movies.json';
import { useEffect } from 'react';

// 3. Props로 서버 데이터 받음(movies, data)
export default function Home({ data }) {
  // 5. Client Side Execution (Browser)
  useEffect(() => {
    console.log('Client Side Execution:', window.location.href);
  }, []);

  // 2, 4. Server & Client 모두 실행 (Hydration)
  console.log('data in home component', data.movies.length);

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

export const getServerSideProps = async (context) => {
  // 1. Server Side Execution (Server Only)
  console.log('Server Side Execution:', context.req.url);
  const result = await fetch(`${process.env.API_URL}/api/movies`);
  const data = await result.json();

  return {
    props: {
      data: data,
    },
  };
};
