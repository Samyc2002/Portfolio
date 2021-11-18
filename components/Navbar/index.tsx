import React, { useState, useEffect } from 'react';
import { RiGitBranchLine, RiStarLine } from 'react-icons/ri';
import { IoIosHome, IoIosContact, IoIosDocument, IoIosAppstore, IoIosBook } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';
import { Button } from '../../globals';

const Navbar = () => {

  const isTabletorMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const isTabletorMobileSmall = useMediaQuery({ query: '(max-width: 780px)' });

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
      {isTabletorMobileSmall?(
          <div className={styles.logo}>
            <div className={styles.smallLogo}>
              <Image src="/Logo_Light.png" width={55} height={55} alt="logo" />
              <div className={styles.padding} />
              <h3 className={styles.logoText}>Samy.exe</h3>
            </div>
            <div className={styles.button}>
              <Link href="https://github.com/Samyc2002/Portfolio" passHref>
                <span className={styles.navbarIconButton}>
                  <RiGitBranchLine />
                  <RiStarLine />
                </span>
              </Link>
            </div>
          </div>
      ):(
        <div className={styles.logo}>
          <Image src="/Logo_Light.png" width={55} height={55} alt="logo" />
          <div className={styles.padding} />
          <h3 className={styles.logoText}>Samy.exe</h3>
        </div>
      )}
      <div className={styles.content}>
        {isTabletorMobile?(isTabletorMobileSmall?(
          <>
            <Button type="text" className={styles.button}>
              <Link href="/">
                <div className={styles.iconButton}>
                  <IoIosHome/>
                </div>
              </Link>
            </Button>
            <div className={styles.padding} />
            <Button type="text" className={styles.button}>
              <Link href="#about">
                <div className={styles.iconButton}>
                  <IoIosContact/>
                </div>
              </Link>
            </Button>
            <div className={styles.padding} />
            <Button type="text" className={styles.button}>
              <Link href="/projects">
                <div className={styles.iconButton}>
                  <IoIosAppstore/>
                </div>
              </Link>
            </Button>
            <div className={styles.padding} />
            <Button type="text" className={styles.button}>
              <Link href="/resume">
                <div className={styles.iconButton}>
                  <IoIosDocument/>
                </div>
              </Link>
            </Button>
            <div className={styles.padding} />
            <Button type="text" className={styles.button}>
              <Link href="#">
                <div className={styles.iconButton}>
                  <IoIosBook/>
                </div>
              </Link>
            </Button>
          </>
        ):(
          <>
            <Button type="text" className={styles.button}>
              <Link href="/">
                <div className={styles.iconButton}>
                  <IoIosHome/>
                </div>
              </Link>
            </Button>
            <div className={styles.padding} />
            <Button type="text" className={styles.button}>
              <Link href="#about">
                <div className={styles.iconButton}>
                  <IoIosContact/>
                </div>
              </Link>
            </Button>
            <div className={styles.padding} />
            <Button type="text" className={styles.button}>
              <Link href="/projects">
                <div className={styles.iconButton}>
                  <IoIosAppstore/>
                </div>
              </Link>
            </Button>
            <div className={styles.padding} />
            <Button type="text" className={styles.button}>
              <Link href="/resume">
                <div className={styles.iconButton}>
                  <IoIosDocument/>
                </div>
              </Link>
            </Button>
            <div className={styles.padding} />
            <Button type="text" className={styles.button}>
              <Link href="#">
                <div className={styles.iconButton}>
                  <IoIosBook/>
                </div>
              </Link>
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
          </>
        )):(
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
