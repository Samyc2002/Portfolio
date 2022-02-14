import React from 'react';
import Image from 'next/image';

import Tech from './Tech';
import Tools from './Tools';
import styles from './styles.module.css';

const About = () => {
  return (
    <>
      <div className={styles.aboutRoot1}>
        <br />
        <br />
        <h1 className={styles.title1}>About Me</h1>
        <br />
        <div className={styles.aboutContent}>
          <Image
            className={styles.profileImage}
            src="/Me_edited.jpg"
            width={400}
            height={400}
            alt="profile pic"
          />
          <div className={styles.padding} />
          <span className={styles.aboutAbout}>
            I am currently doing my B.Tech at{' '}
            <span className={styles.highlight}>
              Indian Institute of Technology, Dharwad
            </span>
            . I love to code and{' '}
            <span className={styles.highlight}>
              develop new, polished and scalable products
            </span>{' '}
            which can be used in real-time.
            <br />I am proficient in classics like{' '}
            <span className={styles.highlight}>
              C, C++, Javascript
            </span> and <span className={styles.highlight}>Python</span>
            <br />
            My passion for coding and making new things brought me into{' '}
            <span className={styles.highlight}>
              Competitive Programming
            </span>{' '}
            and <span className={styles.highlight}>Full Stack Development</span>
            .
          </span>
        </div>
        <br />
        <br />
        <h1 className={styles.title2}>Technologies Known to Me</h1>
        <br />
        <br />
        <Tech/>
        <br />
        <br />
        <h1 className={styles.title3}>Tools I am Proficient In</h1>
        <br/><br/>
        <Tools/>
        <br/><br/>
      </div>
    </>
  );
};

export default About;
