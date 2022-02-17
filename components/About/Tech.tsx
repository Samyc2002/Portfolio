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
import { Grid } from '@material-ui/core';

import { Card } from '../../globals';
import styles from './styles.module.css';

const Tech = () => {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card caption="C++" animate>
              <br/>
                <span className={styles.children}>
                  <CgCPlusPlus />
                </span>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Javascript" animate>
            <br/>
            <span className={styles.children}>
              <DiNodejsSmall />
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Node" animate>
            <br/>
            <span className={styles.children}>
              <DiNodejs />
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="React" animate>
            <br/>
            <span className={styles.children}>
              <RiReactjsFill />
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Next" animate>
            <br/>
            <span className={styles.children}>
              <SiNextdotjs />
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="MongoDB" animate>
            <br/>
            <span className={styles.children}>
              <DiMongodb />
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Python" animate>
            <br/>
            <span className={styles.children}>
              <DiPython />
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Git" animate>
            <br/>
            <span className={styles.children}>
              <DiGit />
            </span>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card caption="Firebase" animate>
            <br/>
            <span className={styles.children}>
              <SiFirebase />
            </span>
          </Card>
        </Grid>
    </Grid>
  )
}

export default Tech;
