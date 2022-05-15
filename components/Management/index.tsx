import React from 'react';
import { Box } from '@mui/system';
import { Masonry } from '@mui/lab';
import { Grid, Typography } from '@mui/material';

import { PARSEC2022, SOI2022, SOI2021, Logorithmic } from '../ProjectCards/ManagementCards';
import { colors } from '../../styles/colors';

const Management = () => {
    return (
        <>
            <Typography gutterBottom variant="h4" align="center">
                My <span style={{ color: colors.orange, fontWeight: 600 }}>Management</span> Related Work
            </Typography>
            <Typography align="center">
                Some of the events that I&apos;ve hosted or have been part of the Organizing team
            </Typography>
            <br/>
            <br/>
            <br/>
            <Masonry columns={2} spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box
                 sx={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'transparent'
                 }}
                />
                <PARSEC2022/>
                <SOI2022/>
                <SOI2021/>
                <Logorithmic/>
            </Masonry>
            <Grid container spacing={4} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Grid item xs={12}>
                    <PARSEC2022/>
                </Grid>
                <Grid item xs={12}>
                    <SOI2022/>
                </Grid>
                <Grid item xs={12}>
                    <SOI2021/>
                </Grid>
                <Grid item xs={12}>
                    <Logorithmic/>
                </Grid>
            </Grid>
        </>
    )
}

export default Management;
