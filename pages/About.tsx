import React from 'react';
import Head from 'next/head';

import AboutComp from '../components/Jumbotrons/About';
import Work from '../components/Work';
import styles from '../styles/Home.module.css';

const About = () => {
  return (
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
  )
}

export default About;