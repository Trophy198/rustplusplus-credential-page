import Heading from '../../heading/heading';
import OrderedList from '../../orderedList/orderedList';
import Image from 'next/image';
import * as data from '@/data/documents/pairAndConnectToServer/orderedItems';
import styles from '../common.module.css';
import { ImageUrl } from '@/types/imageUrlTypes';

const PairAndConnectToServerSection = ({ imageUrls }: { imageUrls: ImageUrl }) => {
  return (
    <section className={styles.test}>
      <Heading>Pair and Connect to a Server</Heading>
      <OrderedList items={data.getSetupSteps()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.PairingServer}
        width={1200}
        height={800}
        alt="pairing_server"
        placeholder="blur"
        priority
      />
      <OrderedList start={5} items={data.getServerAppearanceStep()} />
      <Image
        className={styles.documentimg}
        src={imageUrls.ServersChannel}
        width={633}
        height={836}
        alt="servers_channel"
        placeholder="blur"
        priority
      />
      <OrderedList start={6} items={data.getConnectStep()} />
    </section>
  );
};

export default PairAndConnectToServerSection;
