import React from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { colors } from '../../../styles/colors';

const HomeJumbotron = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '2rem',
                backgroundColor: '#fafafa20',
                backdropFilter:"blur(20px)",
                borderRadius: '1rem',
            }}
        >
            <Typography variant="h4">
                <strong style={{ color: colors.red }}>About</strong> Me
            </Typography>
            <br/>
            <Grid container>
                <Grid item xs={12} md={8} sx={{ textAlign: 'justify' }}>
                    <Typography>
                        I am currently doing my B.Tech at <strong style={{ color: colors.orange }}>Indian Institute of Technology, Dharwad</strong>. I love to code and <strong style={{ color: colors.orange }}>develop new, polished and scalable products</strong> which can be used in real-time. 
                        <br/>
                        <br/>
                        I am proficient in classics like <strong style={{ color: colors.orange }}>C, C++, Javascript and Python</strong>.
                        <br/>
                        <br/>
                        My love to coding and making new things brought me into <strong style={{ color: colors.orange }}>Competitive Programming</strong> and <strong style={{ color: colors.orange }}>Full Stack Development</strong>.
                    </Typography>
                </Grid>
                <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar alt="Samriddha Chattopadhyay" src="/Me.png" sx={{ width: 200, height: 200 }}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomeJumbotron;
