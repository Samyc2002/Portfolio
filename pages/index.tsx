import type { NextPage } from 'next';
import Image from 'next/image';

import { Header, Separator, Footer, About } from '../components';
import styles from '../styles/Home.module.css';

const loader = ({ src, width, quality }: any) => {
  return `https://source.unsplash.com/${width}x${
    (1080 * width) / 1920
  }/?nature,water`;
};

const Home: NextPage = () => {
  return (
    <div>
      <Image
        loader={loader}
        src={'me.png'}
        alt="background"
        layout="fill"
        sizes="50vw"
        priority={true}
      />
      <Header />
      <div className={styles.headerPadding} />
      <Separator/>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
