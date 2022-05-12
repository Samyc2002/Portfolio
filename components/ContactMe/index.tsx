import React from 'react';
import { Typography } from '@mui/material';
import { colors } from '../../styles/colors';

import SocialIcons from '../SocialIcons';

const ContactMe = () => {
    return (
        <>
            <Typography variant="h5" align="center">
                <strong style={{ color: colors.red }}>Connect</strong> with me
            </Typography>
            <br/>
            <br/>
            <SocialIcons button additionalStyles={{ justifyContent: 'center' }}/>
        </>
    )
}

export default ContactMe;
