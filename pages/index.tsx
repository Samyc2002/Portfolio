import type { NextPage } from 'next';
import Head from 'next/head';

import HomeJumbotron from '../components/Jumbotrons/Home';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samy.exe</title>
        <meta name="description" content="Samriddha's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br/>
      <br/>
      <br/>
      <Header/>
      <br/>
      <br/>
      <br/>
      <HomeJumbotron/>
      <br/>
      <br/>
      <br/>
      <ContactMe/>
      <br/>
      <br/>
    </div>
  )
}

export default Home
