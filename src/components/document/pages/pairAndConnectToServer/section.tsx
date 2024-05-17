import Heading from '../../heading/heading';
import OrderedList from '../../orderedList/orderedList';
import Image from 'next/image';
import * as data from '@/data/documents/pairAndConnectToServer/orderedItems';
import styles from '../common.module.css';

const PairAndConnectToServerSection = () => {
  return (
    <section className={styles.test}>
      <Heading>Pair and Connect to a Server</Heading>
      <OrderedList items={data.orderedItems} />
      <Image
        className={styles.documentimg}
        src={'/images/pairAndConnectToServer/pairing_server.png'}
        width={1200}
        height={800}
        alt="pairing_server"
        priority
      />
      <OrderedList start={5} items={data.orderedItems2} />
      <Image
        className={styles.documentimg}
        src={'/images/pairAndConnectToServer/servers_channel.png'}
        width={633}
        height={836}
        alt="servers_channel"
        priority
      />
      <OrderedList start={6} items={data.orderedItems3} />
    </section>
  );
};

export default PairAndConnectToServerSection;
