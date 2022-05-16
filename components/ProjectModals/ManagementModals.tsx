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

const PARSEC2022Modal = ({ show, setShow }: Iprops) => {
  const router = useRouter();

  return (
    <>
      <BootstrapDialog
        onClose={() => setShow(false)}
        open={show}
        maxWidth="lg"
        // PaperComponent={CustomDiv}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setShow(false)}>
          <Typography variant="h4" gutterBottom>
            PARSEC 2022
          </Typography>
          <Typography variant="h6" gutterBottom>
            Annual Tech Fest | IIT Dharwad | 2020
          </Typography>
          <Button size="small" variant='contained' onClick={() => router.push('https://parsec.iitdh.ac.in')}>
              Visit Website
          </Button>
        </BootstrapDialogTitle>
        <DialogContent>
          <Div>
            PARSEC 2022 was the first Annual Technical fest of IIT Dharwad. The event was successfully held in Feb 2020 for 4 days and had about 1.8k participants visiting from all over India. It aimed to bring together the technical community under a single roof.
          </Div>
          <br/>
          <Typography>
            <strong>The various events hosted under the fest included:</strong>
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
                    <ListItemText disableTypography primary="DevHack 3.0 - A Software Hackathon" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="AlgoStrike 2.0 - Algorithmic Programming Contest" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Venividivici 2.0 - CTF Security Challenge" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="TechnoQuiz - Science and Technology Quiz" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="DesignÕ - CAD Modelling Event" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Ascensus - Case Study Competition" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="GuardAIns - AI Bot making tournament" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Libertas - Finance and Data driven case study event" />
                </ListItem>
            </List>
          </Typography>
          <br/>
          <Typography>
            <strong>My Contribution:</strong>
            <br/>
            In PARSEC, I mainly worked on the designing, marketing and outreach activities which included:
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
                    <ListItemText disableTypography primary="Inviting Institutes from all over the country to be a part of the fest" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Strategizing the relevant procedures to reach out to a greater audience" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Marketing with ads over instagram, facebook and LinkedIn" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Giving presentations about the fest in other Institutes in Dharwad" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Designing illustrations and graphics for the event" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Designing banners, posters and stickers and decoration activities for the institute" />
                </ListItem>
            </List>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

const SOI2022Modal = ({ show, setShow }: Iprops) => {
    const router = useRouter();
  
    return (
      <>
        <BootstrapDialog
          onClose={() => setShow(false)}
          open={show}
          maxWidth="lg"
          // PaperComponent={CustomDiv}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setShow(false)}>
            <Typography variant="h4" gutterBottom>
              Summer of Innovation 2022
            </Typography>
            <Typography variant="h6" gutterBottom>
              Tech Marathon | Open Student Society | IIT Dharwad | 2022
            </Typography>
            <Button size="small" variant='contained' onClick={() => router.push('https://oss2019.github.io/summer-of-innovation-2021')}>
                Visit Website
            </Button>
          </BootstrapDialogTitle>
          <DialogContent>
            <Box sx={{ display: 'grid', placeItems: 'center' }}>
              <Div>
                  Summer of Innovation was a 3 month long technical marathon conducted between May 2022 and August 2022. It included problem statements from several technical domains and was conducted completely virtually.
              </Div>
            </Box>
            <br/>
            <Typography gutterBottom>
              <strong>The problem statements hosted included:</strong>
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
                      <ListItemText disableTypography primary="Web development Hackathon" />
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <AdjustIcon/>
                      </ListItemIcon>
                      <ListItemText disableTypography primary="Robotics Simulation" />
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <AdjustIcon/>
                      </ListItemIcon>
                      <ListItemText disableTypography primary="Case Study" />
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <AdjustIcon/>
                      </ListItemIcon>
                      <ListItemText disableTypography primary="Sentiment Analysis" />
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <AdjustIcon/>
                      </ListItemIcon>
                      <ListItemText disableTypography primary="Twitter Bot for IPL Updates" />
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <AdjustIcon/>
                      </ListItemIcon>
                      <ListItemText disableTypography primary="Object recognition" />
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <AdjustIcon/>
                      </ListItemIcon>
                      <ListItemText disableTypography primary="Image Classification" />
                  </ListItem>
                  <ListItem>
                      <ListItemIcon>
                          <AdjustIcon/>
                      </ListItemIcon>
                      <ListItemText disableTypography primary="Competitive Coding Event" />
                  </ListItem>
              </List>
            </Typography>
            <br/>
            <Typography gutterBottom>
                <strong>My Contribution:</strong>
                <br/>
                    As the Competitive Programming Team Lead, I was in charge of all the management activities related to the event. We had a period of one month and the registered contestants had to give contests on codeforces during that time. Their evaluations were handled by codeforces and at the end of the event, we had a one to one showoff where people were given problems and had to solve on screen.
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
                        <ListItemText disableTypography primary="Managing the Competitive programming events" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AdjustIcon/>
                        </ListItemIcon>
                        <ListItemText disableTypography primary="Design posters and Merchandise for the events" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AdjustIcon/>
                        </ListItemIcon>
                        <ListItemText disableTypography primary="Setting questions and evaluating them" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AdjustIcon/>
                        </ListItemIcon>
                        <ListItemText disableTypography primary="Solving queries that arose during the contests" />
                    </ListItem>
                </List>
            </Typography>
          </DialogContent>
        </BootstrapDialog>
      </>
    )
}

const SOI2021Modal = ({ show, setShow }: Iprops) => {
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
            Summer of Innovation 2021
          </Typography>
          <Typography variant="h6" gutterBottom>
            Tech Marathon | Open Student Society | IIT Dharwad | 2021
          </Typography>
          <Button size="small" variant='contained' onClick={() => router.push('https://oss2019.github.io/summer-of-innovation-2021')}>
              Visit Website
          </Button>
        </BootstrapDialogTitle>
        <DialogContent>
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <Div>
                Summer of Innovation was a 3 month long technical marathon conducted between May 2021 and August 2021. It included problem statements from several technical domains and was conducted completely virtually.
            </Div>
          </Box>
          <br/>
          <Typography gutterBottom>
            <strong>The problem statements hosted included:</strong>
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
                    <ListItemText disableTypography primary="Web development Hackathon" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Robotics Simulation" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Case Study" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Sentiment Analysis" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Twitter Bot for IPL Updates" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Object recognition" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Image Classification" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Competitive Coding Event" />
                </ListItem>
            </List>
          </Typography>
          <br/>
          <Typography gutterBottom>
            <strong>My Contribution:</strong>
            <br/>
            As the Design Team Lead, I was in charge of all sorts of designing activities.
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
                    <ListItemText disableTypography primary="Deisgn illustrations and graphics including logos for general use over the event" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Design posters and Merchandise for the events" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="I was also responsible for distribution of prizes and certificates" />
                </ListItem>
            </List>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

const LogorithmicModal = ({ show, setShow }: Iprops) => {
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
            Inter IIT Tech Collaboration
          </Typography>
          <Typography variant="h6" gutterBottom>
            Monthly Technical Events | PAN IIT | 2021
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent>
          <Box sx={{ display: 'grid', placeItems: 'center' }}>
            <Div>
                Currently spanning 12 IITs in our country, the initiative aims to conduct tech related events on a monthly basis with each event being the host for 1 month. The events cover a wide variety of technical domains from competitive programming to case study and game development.
            </Div>
          </Box>
          <br/>
          <Typography gutterBottom>
            <strong>My Contribution:</strong>
            <br/>
                As the Design Team Lead of our institute, I was a part of the core event committee. My responsibilities include:
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
                    <ListItemText disableTypography primary="Overseeing the participation in the event from IIT Dharwad" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Managing the participant queries from IIT Dharwad" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AdjustIcon/>
                    </ListItemIcon>
                    <ListItemText disableTypography primary="Managing the complete lifecycle of conduction of event in July 2021" />
                </ListItem>
            </List>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  )
}

export { PARSEC2022Modal, SOI2022Modal, SOI2021Modal, LogorithmicModal };