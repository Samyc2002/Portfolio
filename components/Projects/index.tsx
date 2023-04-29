import React from 'react';
import { Box } from '@mui/system';
import { Masonry } from '@mui/lab';
import { Grid, Typography } from '@mui/material';

import {
  GrowSimplee,
  CodersGarage,
  CodeforcesLeaderboard,
  VideoCalls,
  ReactIDE
} from '../ProjectCards/ProjectCards';
import { colors } from '../../styles/colors';

const ProjectComponent = () => {
  return (
    <>
      <Typography gutterBottom variant="h4" align="center">
        My Recent{' '}
        <span style={{ color: colors.red, fontWeight: 600 }}>
          Tech Projects
        </span>
      </Typography>
      <Typography align="center">
        Some of the recent projects I&apos;ve worked on.
      </Typography>
      <br />
      <br />
      <br />
      <Masonry
        columns={2}
        spacing={4}
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: 'transparent'
          }}
        />
        <GrowSimplee />
        <CodersGarage />
        <CodeforcesLeaderboard />
        <VideoCalls />
        <ReactIDE />
      </Masonry>
      <Grid container spacing={4} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Grid item xs={12}>
          <GrowSimplee />
        </Grid>
        <Grid item xs={12}>
          <CodersGarage />
        </Grid>
        <Grid item xs={12}>
          <CodeforcesLeaderboard />
        </Grid>
        <Grid item xs={12}>
          <VideoCalls />
        </Grid>
        <Grid item xs={12}>
          <ReactIDE />
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectComponent;
