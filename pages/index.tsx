import Head from 'next/head';
import type { NextPage } from 'next'
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samy.exe - Home</title>
        <meta name="description" content="Samriddha's Portfolio" />
        <link rel="icon" href="/Logo_Dark.png" />
      </Head>

      <main className={styles.main}>
        
      </main>

      {/* <footer className={styles.footer}>
        <>
          Designed and developed by Samrddha Chattopadhyay
        </>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <>
          &copy;Copyright 2022
        </>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <>
          <a href="https://github.com/Samyc2002/" className={styles.iconButton}><RiGithubFill /></a>
          <a href="https://www.linkedin.com/in/samriddha-chattopadhyay-b13555200/" className={styles.iconButton}><RiLinkedinBoxFill /></a>
          <a href="https://www.instagram.com/samriddhachattopadhyay/" className={styles.iconButton}><RiInstagramFill /></a>
          <a href="https://twitter.com/samy_0202/" className={styles.iconButton}><RiTwitterFill /></a>
        </>
      </footer> */}
    </div>
  )
}

export default Home
