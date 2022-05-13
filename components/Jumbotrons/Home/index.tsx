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
            <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} md={8} sx={{ textAlign: 'justify' }}>
                    <Typography variant="h4" align='center'>
                        <span style={{ color: colors.red, fontWeight: 600 }}>About</span> Me
                    </Typography>
                    <br/>
                    <Typography>
                        I am currently doing my B.Tech at <span style={{ color: colors.orange, fontWeight: 600 }}>Indian Institute of Technology, Dharwad</span>. I love to code and <span style={{ color: colors.orange, fontWeight: 600 }}>develop new, polished and scalable products</span> which can be used in real-time. 
                        <br/>
                        <br/>
                        I am proficient in classics like <span style={{ color: colors.orange, fontWeight: 600 }}>C, C++, Javascript and Python</span>.
                        <br/>
                        <br/>
                        My love to coding and making new things brought me into <span style={{ color: colors.orange, fontWeight: 600 }}>Competitive Programming</span> and <span style={{ color: colors.orange, fontWeight: 600 }}>Full Stack Development</span>.
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
