const BASE_URL = process.env.API_URL; // NEXT_PUBLIC이 붙어 있지 않음

// 💡 이 파일은 서버에서만 동작해야 함을 명시
if (!BASE_URL) {
  throw new Error('API_URL is not set. (server-only env var)');
}

// 전체 영화 조회 및 검색
// 💡 요청: fetchMovies({ q: "avengers" })
export async function fetchMovies({ q } = {}) {
  try {
    const url = new URL(`${BASE_URL}/api/movies${q ? '/search' : ''}`);

    if (q) {
      url.searchParams.set('q', q);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Fetch failed');
    }

    const { movies } = await response.json();
    return movies;
  } catch (error) {
    console.error('fetchMovies Error:', error);
    return [];
  }
}

// 현재 상영 중인 영화 조회
export async function fetchNowPlayingMovies() {
  try {
    const url = new URL(`${BASE_URL}/api/movies/now-playing`);
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Fetch failed');
    }

    const { movies } = await response.json();
    return movies;
  } catch (error) {
    console.error('fetchNowPlayingMovies Error:', error);
    return [];
  }
}

// 단일 영화 상세 조회
export async function fetchOneMovie(id) {
  try {
    const url = new URL(`${BASE_URL}/api/movies/${id}`);
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Fetch failed');
    }

    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error('fetchOneMovie Error:', error);
    return null;
  }
}
