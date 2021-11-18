import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { MdOutlineChat } from 'react-icons/md';

import { Button } from '../../globals';
import styles from './styles.module.css';

const Contact = () => {

  const isTabletorMobile = useMediaQuery({ query: '(min-width: 480px)' });

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
    <div className={styles.contactRoot}>
      <Button type="primary" rounded>
        <Link href="mailto:200020040@iitdh.ac.in">
          <div className={styles.contactContent}>
            <span className={styles.iconButtonWide}>
              <MdOutlineChat/>
            </span>
            {(!top && isTabletorMobile) && (
              <div className={styles.button}>
                Contact Me
              </div>
            )}
          </div>
        </Link>
      </Button>
    </div>
  )
}

export default Contact;
