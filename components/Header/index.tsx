import React from 'react';
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

import HomeSVG from '../HomeSVG';
import styles from './styles.module.css';

const Header = () => {
  return (
    <div className={styles.headerRoot}>
      <div>
        <HomeSVG/>
        <br/>
        <h3 className={styles.welcome}>Hey there!</h3>
        <h5 className={styles.about}>I am <span style={{ color: '#46D9FF' }}>Samriddha Chattopadhyay</span> <br/> and welcome to my portfolio website.</h5>
        <br/>
        <div className={styles.socialButtons}>
          <div className={styles.button}>
            <a href="https://github.com/Samyc2002/" className={styles.iconButton}>
              <RiGithubFill/>
            </a>
          </div>
          <div className={styles.button}>
            <a href="https://www.linkedin.com/in/samriddha-chattopadhyay-b13555200/" className={styles.iconButton}>
              <RiLinkedinBoxFill/>
            </a>
          </div>
          <div className={styles.button}>
            <a href="https://www.instagram.com/samriddhachattopadhyay/" className={styles.iconButton}>
              <RiInstagramFill/>
            </a>
          </div>
          <div className={styles.button}>
            <a href="https://twitter.com/samy_0202/" className={styles.iconButton}>
              <RiTwitterFill/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
