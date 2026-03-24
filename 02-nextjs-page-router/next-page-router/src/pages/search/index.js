import MovieItem from '@/components/MovieItem';
import SearchLayout from '@/components/layouts/SearchLayout';
import { fetchSearchMovies } from '@/lib/movie.client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    // 1️⃣ 라우터가 준비되지 않았거나 검색어가 없으면 중단
    if (!router.isReady || !q) return;

    // 2️⃣ AbortController: 이전 요청 취소로 경쟁 상태(Race Condition) 해결
    const controller = new AbortController();

    setIsLoading(true);

    const fetchSearchResult = async () => {
      try {
        // 3️⃣ Client-Side Fetcher 호출 (controller.signal 전달)
        const movieData = await fetchSearchMovies(q, controller.signal);
        setMovies(movieData);
        // 중요: AbortError는 에러가 아닌 '취소'이므로 무시해야 함
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.log(error);
      } finally {
        // 3️⃣ 유효한(취소되지 않은) 요청인 경우에만 로딩 종료
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchSearchResult();

    return () => {
      controller.abort();
    };
  }, [router.isReady, q]);

  return (
    <>
      <Head>
        <title>Next Cinema | 검색</title>
        <meta name="description" content="영화 검색 결과 페이지" />
      </Head>
      <main>
        {/* 4️⃣ 로딩 상태 표시 (UX) */}
        {isLoading ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>Loading...</div>
        ) : (
          movies.map((movie) => <MovieItem key={movie.id} {...movie} />)
        )}

        {/* 검색 결과가 없을 때의 UI */}
        {!isLoading && movies.length === 0 && q && (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            검색 결과가 없습니다.
          </div>
        )}
      </main>
    </>
  );
}

Search.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};
