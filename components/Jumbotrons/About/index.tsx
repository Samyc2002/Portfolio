import React from 'react';
import { Send as SendIcon } from '@mui/icons-material';
import { Avatar, Box, Grid, List, ListItemIcon, ListItem, ListItemText, Typography } from '@mui/material';

import AboutSVG from '../../AboutSVG';
import { colors } from '../../../styles/colors';

const AboutComp = () => {
    return (
        <Box>
            <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} md={6} sx={{ textAlign: 'justify' }}>
                    <Typography variant="h4" align='center'>
                        All <strong style={{ color: colors.red }}>About</strong> Me
                    </Typography>
                    <br/>
                    <Typography>
                        Hi, there! I am <strong style={{ color: colors.orange }}>Samriddha Chattopadhyay</strong> from <strong style={{ color: colors.orange }}>Kolkata, India</strong>.
                        <br/>
                        I am currently in the 3rd year of my BTech at IIT Dharwad. Here, I have not only acquired experience on the technical domain, but also on management side. Apart from coding, some other activities that I love to do!
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <SendIcon/>
                                </ListItemIcon>
                                <ListItemText disableTypography primary="Management related work (like hosting an event)" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SendIcon/>
                                </ListItemIcon>
                                <ListItemText disableTypography primary="Writting Tech Blogs" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SendIcon/>
                                </ListItemIcon>
                                <ListItemText disableTypography primary="Travelling" />
                            </ListItem>
                        </List>
                    </Typography>
                </Grid>
                <Grid item md={2}/>
                <Grid item md={4} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
                    <AboutSVG/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutComp;
