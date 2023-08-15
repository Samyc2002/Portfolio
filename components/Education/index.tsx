import React from "react";
import { Adjust as AdjustIcon } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";

import { colors } from "../../styles/colors";

import { Div } from "../Div";

const Education = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        textAlign: "center",
        display: "grid",
        placeItems: "center"
      }}
    >
      <Typography variant="h4">
        <span style={{ color: colors.orange, fontWeight: 600 }}>Education</span>
      </Typography>
      <br />
      <br />
      <Div>
        Indian Institute of Technology, Dharwad
        <br />
        <i>2020 - Present</i>
      </Div>
      <br />
      <List
        dense
        sx={{
          display: "contents"
        }}
      >
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="CGPA: 8.05 (Till 6th Semester)"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary="Prominent Courses: Number Theory || Computer Programming || Pattern Recognision and Machiene Learning || Artificial Intelligence"
          />
        </ListItem>
      </List>
      <br />
      <br />
      <Div>
        12th Board (Bholananda National Vidyalaya)
        <br />
        <i>2018-2020</i>
      </Div>
      <br />
      <List
        dense
        sx={{
          display: "contents"
        }}
      >
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText disableTypography primary="Percentage: 92%" />
        </ListItem>
      </List>
      <br />
      <br />
      <Div>
        10th Board (Army Public School Barrackpore)
        <br />
        <i>2018-2020</i>
      </Div>
      <br />
      <List
        dense
        sx={{
          display: "contents"
        }}
      >
        <ListItem>
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText disableTypography primary="Percentage: 92%" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Education;
