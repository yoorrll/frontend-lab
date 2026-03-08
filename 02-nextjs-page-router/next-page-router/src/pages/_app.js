import '@/styles/reset.css.js';
import '@/styles/globals.css.js';
import GlobalLayout from '@/components/layouts/GlobalLayout/GlobalLayout';

export default function App({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
