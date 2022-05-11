import React from 'react';
import { Grid, Typography } from '@mui/material';

import Designation from '../Designation';
import HomeSVG from '../HomeSVG';

const Header = () => {
    return (
        <Grid container>
        <Grid item md={6} xs={12}>
          <Typography variant="h6">
            Hey There! Nice to meet you. I am
          </Typography>
          <br/>
          <Typography variant="h2">
            Samriddha Chattopadhyay
          </Typography>
          <br/>
          <Typography variant="h4">
            <Designation/>
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <HomeSVG/>
        </Grid>
      </Grid>
    )
}

export default Header;
