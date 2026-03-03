import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const { id } = router.query;
  return <h1>Movie Detail: {id}</h1>;
}
