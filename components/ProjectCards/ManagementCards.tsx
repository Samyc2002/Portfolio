import React from 'react';
import Image from 'next/image';
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';

const PARSEC2022 = () => {
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardMedia title="PARSEC 2022">
                    <Image src="/Events/PARSEC2022.png" alt="PARSEC 2022" width={600} height={300} objectFit="cover" />
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
    )
}

const SOI2022 = () => {
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardMedia title="Summer of Innovation 2022">
                    <Image src="/Events/SOI2021.jpg" alt="Summer of Innovation 2022" width={600} height={300} objectFit="cover" />
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
    )
}

const SOI2021 = () => {
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardMedia title="Summer of Innovation 2021">
                    <Image src="/Events/SOI2021.jpg" alt="Summer of Innovation 2021" width={600} height={300} objectFit="cover" />
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
    )
}

const Logorithmic = () => {
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardActionArea>
                <CardMedia title="Inter IIT Tech Collaboration">
                    <Image src="/Events/IITC.jpeg" alt="Inter IIT Tech Collaboration" width={600} height={300} objectFit="cover" />
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
    )
}

export { PARSEC2022, SOI2022, SOI2021, Logorithmic };
