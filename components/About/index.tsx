import React from 'react';
import Image from 'next/image';
import { CgCPlusPlus } from 'react-icons/cg';
import { RiReactjsFill } from 'react-icons/ri';
import {
  DiNodejsSmall,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from 'react-icons/di';
import { SiNextdotjs, SiFirebase } from 'react-icons/si';

import { Card } from '../../globals';
import Separator from '../Separator';
import styles from './styles.module.css';

const About = () => {
  return (
    <>
      <div className={styles.aboutRoot1}>
        <br />
        <br />
        <h1 className={styles.title1}>Who Am I ?</h1>
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
            My love to coding and making new things brought me into{' '}
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
        <div className={styles.aboutRoot2}>
          <div className={styles.aboutRoot21}>
            <Card caption="C++" animate>
              <span className={styles.children}>
                <CgCPlusPlus />
              </span>
            </Card>
          </div>
          <div className={styles.aboutRoot22}>
            <Card caption="Javascript" animate>
              <span className={styles.children}>
                <DiNodejsSmall />
              </span>
            </Card>
          </div>
          <div className={styles.aboutRoot23}>
            <Card caption="Node" animate>
              <span className={styles.children}>
                <DiNodejs />
              </span>
            </Card>
          </div>
          <div className={styles.aboutRoot24}>
            <Card caption="React" animate>
              <span className={styles.children}>
                <RiReactjsFill />
              </span>
            </Card>
          </div>
          <div className={styles.aboutRoot25}>
            <Card caption="Next" animate>
              <span className={styles.children}>
                <SiNextdotjs />
              </span>
            </Card>
          </div>
          <div className={styles.aboutRoot26}>
            <Card caption="MongoDB" animate>
              <span className={styles.children}>
                <DiMongodb />
              </span>
            </Card>
          </div>
          <div className={styles.aboutRoot27}>
            <Card caption="Python" animate>
              <span className={styles.children}>
                <DiPython />
              </span>
            </Card>
          </div>
          <div className={styles.aboutRoot28}>
            <Card caption="Git" animate>
              <span className={styles.children}>
                <DiGit />
              </span>
            </Card>
          </div>
          <div className={styles.aboutRoot29}>
            <Card caption="Firebase" animate>
              <span className={styles.children}>
                <SiFirebase />
              </span>
            </Card>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default About;
