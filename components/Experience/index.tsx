import React from 'react';
import { Adjust as AdjustIcon } from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography
} from '@mui/material';

import { colors } from '../../styles/colors';

import { Div, LinkedDiv } from '../Div';

const Experience = () => {
  return (
    <Box
      sx={{
        padding: '2rem',
        textAlign: 'center',
        display: 'grid',
        placeItems: 'center'
      }}
    >
      <Typography variant="h4">
        <span style={{ color: colors.red, fontWeight: 600 }}>
          Work Experience
        </span>
      </Typography>
      <br />
      <br />
      <Div>Internship at Shram</Div>
      <br />
      <List
        dense
        sx={{
          display: 'contents'
        }}
      >
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Developed Algorithms that let users manage their tasks efficiently."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Built the setup guide which let users authenticate themselves in a secure way and made them accustomed to the app, hence increasing userbase."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Developed Transition algorithms which lets users self asess themselves and prepare themselves during month end, for the next month."
          />
        </ListItem>
      </List>
      <br />
      <br />
      <LinkedDiv href="/Daphnis.pdf">
        Full Stack Web Developer Internship at Daphnis Labs
        <br />
        <i>November 2021 - May 2022</i>
      </LinkedDiv>
      <br />
      <List
        dense
        sx={{
          display: 'contents'
        }}
      >
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Implemented billing functionality using Next.js frontend and Express.js backend for authentication based on billing plans"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Implemented customer IP tracking and screen action tracking using rrweb and IP tracking APIs for getting customer analytics for a better understanding of in-demand pages, hence, helping in better marketing"
          />
        </ListItem>
      </List>
      <br />
      <br />
      <LinkedDiv href="/Youniv.pdf">
        Full Stack Web Developer Internship at Youniv
        <br />
        <i>September 2021 - October 2021</i>
      </LinkedDiv>
      <br />
      <List
        dense
        sx={{
          display: 'contents'
        }}
      >
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Implemented passwordless authentication using automatically generated tokens with Next.js and jwt, to provide a secure way for the clients to authenticate themselves"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Integrated Firebase backend APIs with Next.js frontend to make the app production ready"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Worked on refactoring the Next.js codebase to make the code clean and scalable"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Experience;
