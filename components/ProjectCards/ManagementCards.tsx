import React from 'react';
import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';
import { Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';

import { PARSEC2022Modal, SOI2022Modal, SOI2021Modal, LogorithmicModal } from '../ProjectModals/ManagementModals';

const PARSEC2022 = () => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setShow(true)}>
                    <CardMedia title="PARSEC 2022">
                        <Zoom>
                            <Image src="/Events/PARSEC2022.png" alt="PARSEC 2022" width={600} height={300} objectFit="cover" />
                        </Zoom>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            PARSEC 2022 | Design Team and Event Management Team
                        </Typography>
                        <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
                            <Chip label='Annual Tech Fest' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='IIT Dharwad' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='2022' variant='outlined' sx={{ margin: '3px' }}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
            <PARSEC2022Modal show={show} setShow={setShow} />
        </>
    )
}

const SOI2022 = () => {
    const [show, setShow] = React.useState(false);

    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setShow(true)}>
                    <CardMedia title="Summer of Innovation 2022">
                        <Zoom>
                            <Image src="/Events/SOI2021.jpg" alt="Summer of Innovation 2022" width={600} height={300} objectFit="cover" />
                        </Zoom>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Summer of Innovation 2022 | Competitive Programming Team Lead
                        </Typography>
                        <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
                            <Chip label='Technical Event Marathon' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='IIT Dharwad' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='2022' variant='outlined' sx={{ margin: '3px' }}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
            <SOI2022Modal show={show} setShow={setShow} />
        </>
    )
}

const SOI2021 = () => {
    const [show, setShow] = React.useState(false);
    
    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setShow(true)}>
                    <CardMedia title="Summer of Innovation 2021">
                        <Zoom>
                            <Image src="/Events/SOI2021.jpg" alt="Summer of Innovation 2021" width={600} height={300} objectFit="cover" />
                        </Zoom>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Summer of Innovation 2021 | Design Team
                        </Typography>
                        <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
                            <Chip label='Technical Event Marathon' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='IIT Dharwad' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='2021' variant='outlined' sx={{ margin: '3px' }}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
            <SOI2021Modal show={show} setShow={setShow} />
        </>
    )
}

const Logorithmic = () => {
    const [show, setShow] = React.useState(false);
    
    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setShow(true)}>
                    <CardMedia title="Inter IIT Tech Collaboration">
                        <Zoom>
                            <Image src="/Events/IITC.jpeg" alt="Inter IIT Tech Collaboration" width={600} height={300} objectFit="cover" />
                        </Zoom>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Inter IIT Tech Collaboration | Design Team
                        </Typography>
                        <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
                            <Chip label='Collaborative Event between IITs' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Inter - IIT Event' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='2021' variant='outlined' sx={{ margin: '3px' }}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
            <LogorithmicModal show={show} setShow={setShow} />
        </>
    )
}

export { PARSEC2022, SOI2022, SOI2021, Logorithmic };
