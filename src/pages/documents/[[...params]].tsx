import { useRouter } from 'next/router';
import Sidebar from '@/components/sidebar/sidebar';
import styles from './params.module.css';

const Page = () => {
  const router = useRouter();
  const query = router.query;
  return (
    <div className={styles.container}>
      <Sidebar />
      <p>Post: {query.params}</p>
    </div>
  );
};

export default Page;
