import React from 'react';
import Head from 'next/head';

import AboutComp from '../components/Jumbotrons/About';
import styles from '../styles/Home.module.css';
import Loading from '../components/Loading';
import Work from '../components/Work';

const About = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      var state = JSON.parse(localStorage.getItem('state') as string);
      if (!state) {
        state = {
          'Home': 0,
          'About': 1,
          'Projects': 0,
          'Profile': 0
        };
      } else {
        state['About']++;
      }
      localStorage.setItem('state', JSON.stringify(state));
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading?(
        <Loading/>
      ):(
        <div className={styles.container}>
          <Head>
            <title>About - Samy.exe</title>
            <meta name="description" content="Samriddha's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <br/>
          <br/>
          <br/>
          <AboutComp/>
          <br/>
          <br/>
          <br/>
          <Work/>
          <br/>
          <br/>
        </div>
      )}
    </>
  )
}

export default About;