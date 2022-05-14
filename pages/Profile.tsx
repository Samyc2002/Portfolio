import React from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import { Masonry  } from '@mui/lab';

import Organizations from '../components/Organizations';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import Education from '../components/Education';
import POR from '../components/POR';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile - Samy.exe</title>
        <meta name="description" content="Samriddha's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br/>
      <br/>
      <br/>
      <Grid container spacing={3} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Grid item xs={12}>
          <Education/>
        </Grid>
        <Grid item xs={12}>
          <POR/>
        </Grid>
        <Grid item xs={12}>
          <Achievements/>
        </Grid>
        <Grid item xs={12}>
          <Organizations/>
        </Grid>
        <Grid item xs={12}>
          <Experience/>
        </Grid>
      </Grid>
      <Masonry columns={2} spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Education/>
        <POR/>
        <Achievements/>
        <Organizations/>
        <Experience/>
      </Masonry>
      <br/>
      <br/>
    </>
  )
}

export default Profile;