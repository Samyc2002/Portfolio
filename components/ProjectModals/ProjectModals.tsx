import React from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { Close as CloseIcon, Adjust as AdjustIcon } from '@mui/icons-material';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';

import { Div } from '../Div';

interface Iprops {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const CustomDiv = styled('div')(({ theme }) => ({
  backgroundColor: `#120044a8`,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  backdropFilter: "blur(20px)",
  width: 'fit-content',
  borderRadius: '0.75rem',
  cursor: 'default'
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const CodersGarageModal = ({ show, setShow }: Iprops) => {
  const router = useRouter();

  return (
    <>
      <BootstrapDialog
        onClose={() => setShow(false)}
        open={show}
        maxWidth="md"
        // PaperComponent={CustomDiv}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setShow(false)}>
          <Typography variant="h4" gutterBottom>
            Coder&apos;s Garage
          </Typography>
          <Typography variant="h6" gutterBottom>
            React.js | Node.js | Express.js | UI-Design | OAuth | OAuth2 | TypeScript | MongoDB | Socket.io
          </Typography>
          <Button size="small" variant='contained' onClick={() => router.push('https://coders-garage.netlify.app')}>
              Visit Project
          </Button>
          &nbsp;&nbsp;
          <Button size="small" onClick={() => router.push('https://github.com/Samyc2002/Coders-Garage')}>
              Source Code
          </Button>
        </BootstrapDialogTitle>
        <DialogContent>
          <Div>
            A coding website Coders Garage which has a Home page where questions are available, an IDE that can be used by anyone and has a user friendly interview platform. It has a soothing and minimal UI.
          </Div>
          <br/>
          <Typography gutterBottom>
            Created this app from its inception and screen designing in figma to its development and publishing, worked on this app during my college years and learned Full Stack MERN Development along with react mostly by building this app.
          </Typography>
          <br/>
          <Typography gutterBottom>
            <strong>Features:</strong>
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
                    <ListItemText disableTypography primary="Login via Gmail with or without a password" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="User data provided with privacy settings to manage visibility of the same provided to others using the application" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Home Page with questions which can be solved and submitted for a judgement" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="IDE Page for on the go code compilation" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Interview Page for real-time interview process. Share your IDE, video and audio for a better interaction duting the interview" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Competitive programming platform integration with built in Calendars and Heatmaps for better progress tracking" />
                </ListItem>
            </List>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

const CodeforcesLeaderboardModal = ({ show, setShow }: Iprops) => {
  const router = useRouter();

  return (
    <>
      <BootstrapDialog
        onClose={() => setShow(false)}
        open={show}
        maxWidth={false}
        // PaperComponent={CustomDiv}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setShow(false)}>
          <Typography variant="h4" gutterBottom>
            Codeforces Leaderboard
          </Typography>
          <Typography variant="h6" gutterBottom>
            React.js | Node.js | Express.js | OAuth2 | TypeScript | MongoDB
          </Typography>
          <Button size="small" variant='contained' onClick={() => router.push('https://cf-leaderboard.netlify.app')}>
              Visit Project
          </Button>
          &nbsp;&nbsp;
          <Button size="small" onClick={() => router.push('https://github.com/oss2019/CodeForces-Leaderboard')}>
              Source Code
          </Button>
        </BootstrapDialogTitle>
        <DialogContent>
          <Div>
            The Codeforces Leaderboard is the official leaderboard for the Coding Club at IIT Dharwad. The Leaderboard is being used by the Club for maintaining a list of the club members and also to access their progress at various intervals and events.
          </Div>
          <br/>
          <Typography gutterBottom>
            <strong>My Contribution:</strong>
            <br/>
            As the Team Lead, my work included modularization and distribution of tasks to the 6 team members as well as overseeing the entire lifecycle of the website. In development, I worked mainly on:
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
                  <ListItemText disableTypography primary="UI/UX Design" />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <AdjustIcon/>
                  </ListItemIcon>
                  <ListItemText disableTypography primary="Worked with css-modules" />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <AdjustIcon/>
                  </ListItemIcon>
                  <ListItemText disableTypography primary="making the UI responsive" />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <AdjustIcon/>
                  </ListItemIcon>
                  <ListItemText disableTypography primary="Google Sign-in and Authentication" />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <AdjustIcon/>
                  </ListItemIcon>
                  <ListItemText disableTypography primary="Crud operations for event objects" />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <AdjustIcon/>
                  </ListItemIcon>
                  <ListItemText disableTypography primary="Structuring the models of data" />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <AdjustIcon/>
                  </ListItemIcon>
                  <ListItemText disableTypography primary="Server side controller business logic" />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <AdjustIcon/>
                  </ListItemIcon>
                  <ListItemText disableTypography primary="Server side error handling" />
              </ListItem>
            </List>
          </Typography>
          <br/>
          <Typography gutterBottom>
            <strong>Features:</strong>
            <br/>
            The website is responsible for maintaining the data of all the events occuring as a part of the Coding Club at IIT Dharwad. Its features included:
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
                    <ListItemText disableTypography primary="Login via Gmail and codeforces handle without a password" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Leaderboard with the user data and their respectinve ratings and ranks" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Page for Viewing past contests and their respective ranks" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsive UI" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="CRUD operations for the events for logged in users" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Automated Support emails with user queries" />
                </ListItem>
            </List>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

const VideoCallsModal = ({ show, setShow }: Iprops) => {
  const router = useRouter();

  return (
    <>
      <BootstrapDialog
        onClose={() => setShow(false)}
        open={show}
        maxWidth="md"
        // PaperComponent={CustomDiv}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setShow(false)}>
          <Typography variant="h4" gutterBottom>
            Video Calls
          </Typography>
          <Typography variant="h6" gutterBottom>
            React.js | Node.js | Express.js | JavaScript | Socket.io
          </Typography>
          <Button size="small" variant='contained' onClick={() => router.push('https://video-chat-exp.netlify.app')}>
              Visit Project
          </Button>
          &nbsp;&nbsp;
          <Button size="small" onClick={() => router.push('https://github.com/Samyc2002/Video-Calls')}>
              Source Code
          </Button>
        </BootstrapDialogTitle>
        <DialogContent>
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <Div>
              A video calling app made for one-to one video call.
            </Div>
          </Box>
          <br/>
          <Typography gutterBottom>
            Built this app using React and Socket.io , worked on this app during my college years and learned how to work with real-time socket connections mostly by building this app.
          </Typography>
          <br/>
          <Typography gutterBottom>
            <strong>Features:</strong>
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
                    <ListItemText disableTypography primary="Clean and simple UI" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Edit your Name on the go in real-time" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Use custom tokens to connect to users instead of auto-generated urls" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="No call tracking or recording to respect the privacy of users on both side of the call" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Use without any kind of authentication or using OAuth" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsive UI" />
                </ListItem>
            </List>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

const ReactIDEModal = ({ show, setShow }: Iprops) => {
  const router = useRouter();

  return (
    <>
      <BootstrapDialog
        onClose={() => setShow(false)}
        open={show}
        maxWidth="md"
        // PaperComponent={CustomDiv}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setShow(false)}>
          <Typography variant="h4" gutterBottom>
            React IDE
          </Typography>
          <Typography variant="h6" gutterBottom>
            React.js | JavaScript | APIs
          </Typography>
          <Button size="small" variant='contained' onClick={() => router.push('https://online-ide-exp.netlify.app')}>
              Visit Project
          </Button>
          &nbsp;&nbsp;
          <Button size="small" onClick={() => router.push('https://github.com/Samyc2002/React-IDE')}>
              Source Code
          </Button>
        </BootstrapDialogTitle>
        <DialogContent>
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <Div>
              A video calling app made for one-to one video call.
            </Div>
          </Box>
          <br/>
          <Typography gutterBottom>
            Built this app using React and Socket.io , worked on this app during my college years and learned how to work with real-time socket connections mostly by building this app.
          </Typography>
          <br/>
          <Typography gutterBottom>
            <strong>Features:</strong>
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
                    <ListItemText disableTypography primary="Clean and simple UI" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Run your code on the go" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Compile and execute your code seamlessly" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Run your code using with/without inputs" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Multi-Language support" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Responsive UI" />
                </ListItem>
            </List>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

export { CodersGarageModal, CodeforcesLeaderboardModal, VideoCallsModal, ReactIDEModal };