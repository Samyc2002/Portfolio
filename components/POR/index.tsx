import React from 'react';
import { Adjust as AdjustIcon } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';

import { colors } from '../../styles/colors';

import { Div, LinkedDiv } from '../Div';

const Education = () => {
    return (
        <Box
            sx={{
                padding: '2rem',
                textAlign: 'center',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <Typography variant="h4">
                <span style={{ color: colors.red, fontWeight: 600 }}>Position of Responsibilities</span>
            </Typography>
            <br/>
            <br/>
            <Div>
                Coding Club Secretary, IIT Dharwad
                <br/>
                <i>May 2022 - April 2023</i>
            </Div>
            <br/>
            <List
                dense
                sx={{
                    display: 'contents'
                }}
            >
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsible for overseeing coding and development related events in the instutute" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Organizing various events related to competitive programming and software development" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Interacting with industry experts for conduction of various at the institute" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsible for overall upskill of coding expertise in the institute" />
                </ListItem>
            </List>
            <br/>
            <br/>
            <LinkedDiv href='/GCFBadge.png'>
                Google Cloud Facilitator 2022
                <br/>
                <i>April 2022 - July 2022</i>
            </LinkedDiv>
            <br/>
            <List
                dense
                sx={{
                    display: 'contents'
                }}
            >
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsible for facilitating students from all over India to get accustomed to the google cloud interface" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Interacting with students and developers from all over India and guiding for the program" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Interacting with google industry experts for training and mentorship throughout the program" />
                </ListItem>
            </List>
            <br/>
            <br/>
            <LinkedDiv href='/61ORG2022.pdf'>
                Event Management Team Lead, PARSEC 2022, IIT Dharwad
                <br/>
                <i>December 2021 - March 2022</i>
            </LinkedDiv>
            <br/>
            <List
                dense
                sx={{
                    display: 'contents'
                }}
            >
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Overseeing the fest as a whole, so that everything runs smoothly" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsible for all design related work required during the fest" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsible for decorating the campus using props and hand-made 3D designs" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Interacting with companies for sponsorship and marketing" />
                </ListItem>
            </List>
            <br/>
            <br/>
            <Div>
                ISMP Tech Team Lead, IIT Dharwad
                <br/>
                <i>August 2021 - August 2022</i>
            </Div>
            <br/>
            <List
                dense
                sx={{
                    display: 'contents'
                }}
            >
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsible for overall devemopment and management of the ISMP website" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Guiding and helping the team members to make the project a success." />
                </ListItem>
            </List>
            <br/>
            <br/>
            <Div>
                Student Mentor, IIT Dharwad
                <br/>
                <i>August 2021 - August 2022</i>
            </Div>
            <br/>
            <List
                dense
                sx={{
                    display: 'contents'
                }}
            >
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Mentoring a group of 7 freshers at our institute" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Giving a technical background and supporting the mentees in terms of academics, lifestyles as well as recommending career paths" />
                </ListItem>
            </List>
        </Box>
    )
}

export default Education;
