import Head from 'next/head';
import type { NextPage } from 'next';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Avatar, Typography } from '@material-ui/core';
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

import Header from '../components/Header';
import { useStyles } from '../styles/Home';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>Samy.exe - Home</title>
        <meta name="description" content="Samriddha's Portfolio" />
        <link rel="icon" href="/Logo_Dark.png" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <br/>
        <Fade>
          <Typography variant="h4" className={styles.bold}>
            <span className={styles.bold}>AN <span className={styles.magenta}>INTRODUCTION</span> ABOUT ME</span>
          </Typography>
        </Fade>
        <br/>
        <div className={styles.root}>
          <Fade>
            <div className={styles.limitWidth}>
              I am currently doing my B.Tech at <span className={styles.magenta}>Indian Institute of Technology, Dharwad</span>. I love to code and develop <span className={styles.magenta}>new, polished and scalable products</span> which can be used in real-time. 
              <br/>
              I am proficient in classics like <span className={styles.magenta}>C, C++, Javascript</span> and <span className={styles.magenta}>Python</span>
              <br/>
              My love to coding and making new things brought me into <span className={styles.magenta}>Competitive Programming</span> and <span className={styles.magenta}>Full Stack Development</span>
            </div>
          </Fade>
          <div className={styles.padding}/>
          <div>
            <Zoom>
              <Avatar alt="Samy" src="/Me_edited.jpg" className={classes.large} />
            </Zoom>
          </div>
        </div>
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

export default Home;
