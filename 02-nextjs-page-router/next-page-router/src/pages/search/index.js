import { SearchLayout } from '@/components/layouts/SearchLayout';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();

  const { q } = router.query;
  return <div>Search page: {q}</div>;
}

Search.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};
