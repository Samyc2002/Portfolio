import type { NextPage } from 'next';
import Image from 'next/image';

import { Header, Navbar, Separator, Footer } from '../components';
import styles from '../styles/Home.module.css';

const loader = ({ src, width, quality }: any) => {
    return `https://source.unsplash.com/${width}x${1080*width/1920}/?nature,water`;
}

const Home: NextPage = () => {
  return (
    <div>
      <Image loader={loader} src={"me.png"} alt="background" layout="fill" sizes="50vw" priority={true}/>
      <Navbar/>
      <Header/>
      <div className={styles.headerPadding}/>
      <Separator/>
      <Footer/>
    </div>
  )
}

export default Home
