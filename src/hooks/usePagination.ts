import { useRouter } from 'next/router';
import buildPaginationMap from '@/utils/buildPaginationMap';

const paginationMap = buildPaginationMap();

const usePagination = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return paginationMap[currentPath] || { previousHref: null, previousLabel: null, nextHref: null, nextLabel: null };
};

export default usePagination;
