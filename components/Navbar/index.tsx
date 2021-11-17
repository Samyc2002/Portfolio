import React, { useState, useEffect } from 'react';
import { RiGitBranchLine, RiStarLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';
import { Button } from '../../globals';

const Navbar = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY === 0) {
        setTop(true);
      } else {
        setTop(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);
  });

  return (
    <div className={top ? styles.navbarRoot : styles.navbarTop}>
      <div className={styles.logo}>
        <Image src="/Logo_Light.png" width={55} height={55} alt="logo" />
        <div className={styles.padding} />
        <h3 className={styles.logoText}>Samy.exe</h3>
      </div>
      <div className={styles.content}>
        <Button type="text" className={styles.button}>
          <Link href="/">Home</Link>
        </Button>
        <div className={styles.padding} />
        <Button type="text" className={styles.button}>
          <Link href="#about">About</Link>
        </Button>
        <div className={styles.padding} />
        <Button type="text" className={styles.button}>
          <Link href="/projects">Projects</Link>
        </Button>
        <div className={styles.padding} />
        <Button type="text" className={styles.button}>
          <Link href="/resume">Resume</Link>
        </Button>
        <div className={styles.padding} />
        <Button type="text" className={styles.button}>
          <Link href="#">Blog</Link>
        </Button>
        <div className={styles.padding} />
        <div className={styles.button}>
          <Link href="https://github.com/Samyc2002/Portfolio" passHref>
            <span className={styles.navbarIconButton}>
              <RiGitBranchLine />
              <RiStarLine />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
