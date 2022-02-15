import React, { useState, useEffect } from 'react';
import { RiGitBranchLine, RiStarLine } from 'react-icons/ri';
import { AppBar, Button as Btn, CssBaseline, Fab, IconButton, List, Paper, Toolbar, Typography } from '@material-ui/core';
import { IoIosHome, IoIosContact, IoIosDocument, IoIosAppstore, IoIosBook } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';
import { Button } from '../../globals';
import { useStyles } from './styles';

const Navbar = () => {

  const isTabletorMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const isTabletorMobileSmall = useMediaQuery({ query: '(max-width: 780px)' });

  const router = useRouter();

  const [top, setTop] = useState(true);

  const classes = useStyles();

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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.root}>
          {isTabletorMobile ? isTabletorMobileSmall ? (
            <div className={classes.title}>
              <div className={classes.root}>
                <div className={classes.align}>
                  <Image src="/Logo_Light.png" width={55} height={55} alt="logo" />
                  <div className={styles.padding} />
                  <Typography variant="h6" className={classes.text}>
                    Samy.exe
                  </Typography>
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
              <br/>
              <div className={classes.align}>
                <Button type="text" className={styles.button}>
                  <Link href="/">
                    <div className={styles.iconButton}>
                      <IoIosHome/>
                    </div>
                  </Link>
                </Button>
                {(router.pathname === '/')&&(<div className={styles.padding} />)}
                {(router.pathname === '/')&&(<Button type="text" className={styles.button}>
                  <Link href="#about">
                    <div className={styles.iconButton}>
                      <IoIosContact/>
                    </div>
                  </Link>
                </Button>)}
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
                {/* <div className={styles.padding} /> */}
                {/* <Button type="text" className={styles.button}>
                  <Link href="#">
                    <div className={styles.iconButton}>
                      <IoIosBook/>
                    </div>
                  </Link>
                </Button> */}
              </div>
            </div>
          ) : (
            <>
              <Image src="/Logo_Light.png" width={55} height={55} alt="logo" />
              <div className={classes.align}>
                <Button type="text" className={styles.button}>
                  <Link href="/">
                    <div className={styles.iconButton}>
                      <IoIosHome/>
                    </div>
                  </Link>
                </Button>
                {(router.pathname === '/')&&(<div className={styles.padding} />)}
                {(router.pathname === '/')&&(<Button type="text" className={styles.button}>
                  <Link href="#about">
                    <div className={styles.iconButton}>
                      <IoIosContact/>
                    </div>
                  </Link>
                </Button>)}
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
                {/* <div className={styles.padding} /> */}
                {/* <Button type="text" className={styles.button}>
                  <Link href="#">
                    <div className={styles.iconButton}>
                      <IoIosBook/>
                    </div>
                  </Link>
                </Button> */}
                <div className={styles.padding} />
                <div className={styles.button}>
                  <Link href="https://github.com/Samyc2002/Portfolio" passHref>
                    <span className={styles.navbarIconButton}>
                      <RiGitBranchLine />
                    </span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={classes.align}>
                <Image src="/Logo_Light.png" width={55} height={55} alt="logo" />
                <div className={styles.padding} />
                <Typography variant="h5" className={classes.text}>
                  Samy.exe
                </Typography>
              </div>
              <div className={classes.align}>
                <Button type="text" className={styles.button}>
                  <Link href="/">Home</Link>
                </Button>
                {(router.pathname === '/')&&(<div className={styles.padding} />)}
                {(router.pathname === '/')&&(<Button type="text" className={styles.button}>
                  <Link href="#about">About</Link>
                </Button>)}
                <div className={styles.padding} />
                <Button type="text" className={styles.button}>
                  <Link href="/projects">Projects</Link>
                </Button>
                <div className={styles.padding} />
                <Button type="text" className={styles.button}>
                  <Link href="/resume">Resume</Link>
                </Button>
                {/* <div className={styles.padding} /> */}
                {/* <Button type="text" className={styles.button}>
                  <Link href="#">Blog</Link>
                </Button> */}
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
