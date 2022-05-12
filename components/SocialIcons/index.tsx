import React from 'react';
import { useRouter } from 'next/router';
import { Grid, IconButton, Typography } from '@mui/material';
import { FiInstagram, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import styles from './styles.module.css';

interface Iprops {
    additionalStyles?: any;
    button?: boolean;
}
 
const SocialIcons = ({ button, additionalStyles }: Iprops) => {
  const router = useRouter();
  return (
    <>
        {button?(
            <Grid container sx={additionalStyles}>
                <Grid item xs={2} sm={1}>
                    <IconButton size="large" color="inherit" onClick={() => router.push('https://github.com/Samyc2002')}>
                        <FiGithub/>
                    </IconButton>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <IconButton size="large" color="inherit" onClick={() => router.push('https://www.linkedin.com/in/samriddha-chattopadhyay-b13555200')}>
                        <FiLinkedin/>
                    </IconButton>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <IconButton size="large" color="inherit" onClick={() => router.push('mailto:200020040@iitdh.ac.in')}>
                        <FiMail/>
                    </IconButton>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <IconButton size="large" color="inherit" onClick={() => router.push('https://www.instagram.com/samriddhachattopadhyay')}>
                        <FiInstagram/>
                    </IconButton>
                </Grid>
            </Grid>
        ):(
            <Grid container sx={additionalStyles}>
                <Grid item xs={2} sm={1}>
                    <div className={styles.anchor} onClick={() => router.push('https://github.com/Samyc2002')}>
                        <FiGithub/>
                    </div>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <div className={styles.anchor} onClick={() => router.push('https://www.linkedin.com/in/samriddha-chattopadhyay-b13555200')}>
                        <FiLinkedin/>
                    </div>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <div className={styles.anchor} onClick={() => router.push('mailto:200020040@iitdh.ac.in')}>
                        <FiMail/>
                    </div>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <div className={styles.anchor} onClick={() => router.push('https://www.instagram.com/samriddhachattopadhyay')}>
                        <FiInstagram/>
                    </div>
                </Grid>
            </Grid>
        )}
    </>
  )
}

export default SocialIcons;