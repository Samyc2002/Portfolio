import React from 'react';
import Image from 'next/image';
import { RiGitBranchLine, RiStarLine } from 'react-icons/ri';

import styles from './styles.module.css';
import Button from '../../globals/Button';

const Navbar = () => {
  return (
    <div className={styles.navbarRoot}>
      <div className={styles.logo}>
        <Image src="/Logo_Light.png" width={55} height={55}/>
        <div className={styles.padding}/>
        <h3 className={styles.logoText}>Samy.exe</h3>
      </div>
      <div className={styles.content}>
        <Button type="text" className={styles.button}><a href="/">Home</a></Button>
        <div className={styles.padding}/>
        <Button type="text" className={styles.button}><a href="#about">About</a></Button>
        <div className={styles.padding}/>
        <Button type="text" className={styles.button}><a href="/projects">Projects</a></Button>
        <div className={styles.padding}/>
        <Button type="text" className={styles.button}><a href="/resume">Resume</a></Button>
        <div className={styles.padding}/>
        <Button type="text" className={styles.button}><a href="#">Blog</a></Button>
        <div className={styles.padding}/>
        <div className={styles.button}>
          <a href="https://github.com/Samyc2002/Portfolio" className={styles.navbarIconButton}>
            <RiGitBranchLine/>
            <RiStarLine/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
