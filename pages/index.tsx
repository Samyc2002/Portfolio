import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import HomeJumbotron from '../components/Jumbotrons/Home';
import ContactMe from '../components/ContactMe';
import styles from '../styles/Home.module.css';
import Loading from '../components/Loading';
import Header from '../components/Header';

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      var state = JSON.parse(localStorage.getItem('state') as string);
      if (!state) {
        state = {
          'Home': 1,
          'About': 0,
          'Projects': 0,
          'Profile': 0
        };
      } else {
        state['Home']++;
      }
      localStorage.setItem('state', JSON.stringify(state));  
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading? (
          <Loading/>
      ):(
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
      )}
    </>
  )
}

export default Home
