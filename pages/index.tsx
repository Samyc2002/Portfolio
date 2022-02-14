import type { NextPage } from 'next';
import Image from 'next/image';

import { Navbar, Header, Separator, Footer, About } from '../components';
import styles from '../styles/Home.module.css';

const loader = ({ src, width, quality }: any) => {
  return `https://source.unsplash.com/${width}x${
    (1080 * width) / 1920
  }/?nature,water`;
};

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Image
        loader={loader}
        src={'me.png'}
        alt="background"
        layout="fill"
        sizes="20vw"
        priority={true}
      />
      <Header />
      <div className={styles.headerPadding} />
      <Separator/>
      <About />
    </div>
  );
};

export default Home;
