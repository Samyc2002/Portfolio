import { Box } from '@mui/material';
import React from 'react';

const Loading = () => {
    return (
        <Box sx={{ display: 'grid', placeItems: 'center', height: { xs: '70vh', md: '80vh' } }}>
            <div className="container">
                <h3 className="head">Connecting to server</h3>
                <div className="component PC">
                    <div className="flare"></div>
                </div>
                <div className="component signals">
                    <div className="dot first"></div>
                    <div className="dot second"></div>
                    <div className="dot third"></div>
                </div>
                <div className="component server">
                    <div className="slot"></div>
                    <div className="slot"></div>
                    <div className="button"></div>
                    <div className="button"></div>
                </div>
            </div>
        </Box>
    )
}

export default Loading;