import '@/styles/globals.css.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/test');
  }, [router]);

  const handleNavigateToTest = () => {
    router.push('/test');
  };
  return (
    <>
      <header>
        <Link href="/">Home</Link>
        &nbsp;
        <Link href="/search/?q=김효효" prefetch={false}>
          Search
        </Link>
        &nbsp;
        <Link href="/movie/1">Movie</Link>
        &nbsp;
      </header>
      <div>
        <button onClick={handleNavigateToTest}>Go to Test</button>
      </div>
      <Component {...pageProps} />
    </>
  );
}
