import React from 'react';
import { Grid, Typography } from '@mui/material';

import { colors } from '../../styles/colors';
import styles from './styles.module.css';
import Designation from '../Designation';
import HomeSVG from '../HomeSVG';

const Header = () => {
  return (
    <Grid container sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
      <Grid item md={6} xs={12}>
        <Typography variant="h6">
          Hey There! Nice to meet you. I am
        </Typography>
        <br/>
        <Typography variant="h2">
          <span className={styles.name}>Samriddha Chattopadhyay</span>
        </Typography>
        <br/>
        <Typography variant="h4">
          I live in a world of <strong style={{ color: colors.lightPurple }}><Designation/></strong>
        </Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <HomeSVG/>
      </Grid>
    </Grid>
  )
}

export default Header;
