import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const { q } = router.query;
  return <div>Search page: {q}</div>;
}
