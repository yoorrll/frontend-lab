import * as styles from '@/styles/home.css.js';
import SearchLayout from '@/components/layouts/SearchLayout';
import MovieItem from '@/components/MovieItem';
import { useEffect } from 'react';
import * as serverAPI from '@/lib/movie.server';

// 3. Props로 서버 데이터 받음(movies, data)
export default function Home({ nowPlaying, allMovies, data }) {
  // 5. Client Side Execution (Browser)
  useEffect(() => {
    // 브라우저에서만 실행됨
    console.log('Client Side Execution:', window.location.href);
  }, []);

  // 2, 4. Server & Client 모두 실행 (Hydration)
  console.log('Server & Client Execution:', data);

  return (
    <div className={styles.container}>
      <section>
        <h3>지금 상영중인 영화</h3>
        <div className={styles.list}>
          {nowPlaying.map((movie) => (
            <MovieItem key={`recommended-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        <div className={styles.list}>
          {allMovies.map((movie) => (
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

export const getStaticProps = async () => {
  console.log('Build Time Execution: Home Page Created');

  try {
    const [nowPlaying, allMovies] = await Promise.all([
      serverAPI.fetchNowPlayingMovies(),
      serverAPI.fetchMovies(),
    ]);

    const nowPlayingIds = nowPlaying.map((movie) => movie.id);
    const filteredMovies = allMovies.filter(
      (movie) => !nowPlayingIds.includes(movie.id),
    );

    const data = 'Next Cinema SSR Mode';

    return {
      props: {
        nowPlaying: nowPlaying.slice(0, 6),
        allMovies: filteredMovies,
        data,
      },
      // revalidate: 10,
    };
  } catch (error) {
    console.error('API Fetch Error:', error);
    return {
      props: {
        nowPlaying: [],
        allMovies: [],
        error: 'BACKEND_UNAVAILABLE',
      },
    };
  }
};
