import React from 'react';
import { Adjust as AdjustIcon } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';

import { colors } from '../../styles/colors';

import { Div } from '../Div';

const Organizations = () => {
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
                <span style={{ color: colors.orange, fontWeight: 600 }}>Organizations</span>
            </Typography>
            <br/>
            <br/>
            <Div>
                OSS | Core Team Member
                <br/>
                <i>May 2022 - Present</i>
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
                    <ListItemText disableTypography primary="Promoted to Core Team Member of the Open Student Society Organization on Github as on May 2022" />
                </ListItem>
            </List>
            <br/>
            <br/>
            <Div>
                Coding Club | Secretary
                <br/>
                <i>May 2022 - Present</i>
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
                    <ListItemText disableTypography primary="Promoted to Secretary of The Coding Club at IIT Dharwad as on May 2022" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Member and Contributer of The Coding Club at IIT Dharwad" />
                </ListItem>
            </List>
            <br/>
            <br/>
            <Div>
                Artificial Intelligence Club | Member
                <br/>
                <i>November 2020 - Present</i>
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
                    <ListItemText disableTypography primary="Member and Contributer of The Artificial Intelligence Club at IIT Dharwad" />
                </ListItem>
            </List>
        </Box>
    )
}

export default Organizations;
