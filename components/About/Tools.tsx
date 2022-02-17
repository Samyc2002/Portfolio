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
import { Grid } from '@material-ui/core';

import { Card } from '../../globals';
import styles from './styles.module.css';

const Tools = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="GNU/Linux">
            <br/>
            <span className={styles.children}>
              <SiLinux/>
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="VS Code">
            <br/>
            <span className={styles.children}>
              <SiVisualstudiocode/>
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Atom">
            <br/>
            <span className={styles.children}>
              <SiAtom/>
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Vim">
            <br/>
            <span className={styles.children}>
              <SiVim/>
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Emacs">
            <br/>
            <span className={styles.children}>
              <SiGnuemacs/>
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Figma">
            <br/>
            <span className={styles.children}>
              <SiFigma/>
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Postman">
            <br/>
            <span className={styles.children}>
              <SiPostman/>
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Heroku">
            <br/>
            <span className={styles.children}>
              <SiHeroku/>
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Netlify">
            <br/>
            <span className={styles.children}>
              <SiNetlify/>
            </span>
          </Card>
        </Grid>
    </Grid>
  )
}

export default Tools;
