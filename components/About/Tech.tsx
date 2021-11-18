import React from 'react';
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
import styles from './styles.module.css';

const Tech = () => {
  return (
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
  )
}

export default Tech;
