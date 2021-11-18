import React from 'react';
import {
  SiGnu,
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiAtom,
  SiVim,
  SiGnuemacs,
  SiFigma,
  SiNetlify
} from "react-icons/si";

import { Card } from '../../globals';
import styles from './styles.module.css';

const Tools = () => {
  return (
    <div className={styles.aboutRoot2}>
      <div className={styles.aboutRoot21}>
        <Card caption="GNU/Linux">
          <span className={styles.children}>
            <SiLinux/>
          </span>
        </Card>
      </div>
      <div className={styles.aboutRoot22}>
        <Card caption="VS Code">
          <span className={styles.children}>
            <SiVisualstudiocode/>
          </span>
        </Card>
      </div>
      <div className={styles.aboutRoot23}>
        <Card caption="Atom">
          <span className={styles.children}>
            <SiAtom/>
          </span>
        </Card>
      </div>
      <div className={styles.aboutRoot24}>
        <Card caption="Vim">
          <span className={styles.children}>
            <SiVim/>
          </span>
        </Card>
      </div>
      <div className={styles.aboutRoot25}>
        <Card caption="Emacs">
          <span className={styles.children}>
            <SiGnuemacs/>
          </span>
        </Card>
      </div>
      <div className={styles.aboutRoot26}>
        <Card caption="Figma">
          <span className={styles.children}>
            <SiFigma/>
          </span>
        </Card>
      </div>
      <div className={styles.aboutRoot27}>
        <Card caption="Postman">
          <span className={styles.children}>
            <SiPostman/>
          </span>
        </Card>
      </div>
      <div className={styles.aboutRoot28}>
        <Card caption="Heroku">
          <span className={styles.children}>
            <SiHeroku/>
          </span>
        </Card>
      </div>
      <div className={styles.aboutRoot29}>
        <Card caption="Netlify">
          <span className={styles.children}>
            <SiNetlify/>
          </span>
        </Card>
      </div>
    </div>
  )
}

export default Tools;
