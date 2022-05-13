import React from 'react';
import { Typography } from '@mui/material';
import { colors } from '../../styles/colors';

import SocialIcons from '../SocialIcons';

const ContactMe = () => {
    return (
        <>
            <Typography variant="h5" align="center">
                <span style={{ color: colors.red, fontWeight: 600 }}>Connect</span> with me
            </Typography>
            <br/>
            <br/>
            <SocialIcons button additionalStyles={{ justifyContent: 'center' }}/>
        </>
    )
}

export default ContactMe;
