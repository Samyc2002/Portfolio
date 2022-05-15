import React from 'react';
import Head from 'next/head';

import ErrorComponent from '../components/404';
import styles from '../styles/Home.module.css';

const Error = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Samy.exe</title>
        <meta name="description" content="Samriddha's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br/>
      <br/>
      <br/>
      <ErrorComponent/>
      <br/>
      <br/>
    </div>
  )
}

export default Error;