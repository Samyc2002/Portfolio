import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samy.exe</title>
        <meta name="description" content="Samriddha's Portfolio" />
        <link rel="icon" href="/Logo_Dark.png" />
      </Head>
      <br/>
      <br/>
      <br/>
      <Header/>
    </div>
  )
}

export default Home
