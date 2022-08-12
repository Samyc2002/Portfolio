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
                <span style={{ color: colors.red, fontWeight: 600 }}>Achievements</span>
            </Typography>
            <br/>
            <br/>
            <LinkedDiv href='/GCFCerty.pdf'>
                Google Cloud Facilitator 2022
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
                    <ListItemText disableTypography primary="Enrolled 246 students from across India and guided them towards completion" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Completed 74 Labs and Achieved 16 skill badges" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Achieved the Google Cloud Facilitator Certification 2022" />
                </ListItem>
            </List>
            <br/>
            <br/>
            <Div>
                Inter IIT Tech Meet 2022
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
                    <ListItemText disableTypography primary="Ranked 11th among the 23 IITs that participated" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="National Level event with all IITs taking part, one team per IIT" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Was the team lead and also one of the 4 presenters from our institute" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Problem Statement Involved Web Development, Data analysis and Artificial Intelligence" />
                </ListItem>
            </List>
            <br/>
            <br/>
            <LinkedDiv href='/HC2022.pdf'>
                Google Hash Code 2022
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
                    <ListItemText disableTypography primary="Ranked in the top 4k among the 20k participants" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Global event with a total of around 20k participants" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Problem Statement Involved Data Structures and Algorithms" />
                </ListItem>
            </List>
            <br/>
            <br/>
            <LinkedDiv href='/MTABadge.png'>
                MTA Certification
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
                    <ListItemText disableTypography primary="Learned HTML, CSS and Javascript basics and implemented them to make a responsive website" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Cleared the MTA certification test and Acieved the certification" />
                </ListItem>
            </List>
        </Box>
    )
}

export default Education;
