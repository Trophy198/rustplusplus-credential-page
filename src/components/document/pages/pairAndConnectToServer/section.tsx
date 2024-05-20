import Heading from '../../heading/heading';
import OrderedList from '../../orderedList/orderedList';
import Image from 'next/image';
import * as data from '@/data/documents/pairAndConnectToServer/orderedItems';
import styles from '../common.module.css';
import { ImageUrl } from '@/types/imageUrlTypes';

const PairAndConnectToServerSection = ({ imageUrls }: { imageUrls: ImageUrl }) => {
  return (
    <section className={styles.container}>
      <Heading>Pair and Connect to a Server</Heading>
      <OrderedList items={data.getSetupSteps()} />
      <Image src={imageUrls.PairingServer} alt="pairing-server" placeholder="blur" />
      <OrderedList start={5} items={data.getServerAppearanceStep()} />
      <Image src={imageUrls.ServersChannel} alt="servers-channel" placeholder="blur" />
      <OrderedList start={6} items={data.getConnectStep()} />
    </section>
  );
};

export default PairAndConnectToServerSection;
