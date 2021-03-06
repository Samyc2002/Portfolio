import React from 'react';
import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';
import { useRouter } from 'next/router';
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';

import { CodersGarageModal, CodeforcesLeaderboardModal, VideoCallsModal, ReactIDEModal } from '../ProjectModals/ProjectModals';

const CodersGarage = () => {
    const [show, setShow] = React.useState(false);
    const router = useRouter();

    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setShow(true)}>
                    <CardMedia title="Coder's Garage">
                        <Zoom>
                            <Image src="/Projects/CG.png" alt="Coder's Garage" width={600} height={300} objectFit="cover" />
                        </Zoom>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Coder&apos;s Garage | Owner
                        </Typography>
                        <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
                            <Chip label='React.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Node.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Express.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='UI-Design' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='OAuth' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='OAuth2' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='TypeScript' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='MongoDB' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Socket.io' variant='outlined' sx={{ margin: '3px' }}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ padding: '1rem 2rem' }}>
                    <Button size="small" variant='contained' onClick={() => router.push('https://coders-garage.netlify.app')}>
                        Visit Project
                    </Button>
                    <Button size="small" onClick={() => router.push('https://github.com/Samyc2002/Coders-Garage')}>
                        Source Code
                    </Button>
                </CardActions>
            </Card>
            <CodersGarageModal show={show} setShow={setShow} />
        </>
    )
}

const CodeforcesLeaderboard = () => {
    const [show, setShow] = React.useState(false);
    const router = useRouter();

    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setShow(true)}>
                    <CardMedia title="Codeforces Leaderboard">
                        <Zoom>
                            <Image src="/Projects/CFL.png" alt="Codeforces Leaderboard" width={600} height={300} objectFit="cover" />
                        </Zoom>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Codeforces Leaderboard | Full Stack Developer | Team Lead
                        </Typography>
                        <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
                            <Chip label='React.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Node.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Express.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='OAuth2' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='TypeScript' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='MongoDB' variant='outlined' sx={{ margin: '3px' }}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ padding: '1rem 2rem' }}>
                    <Button size="small" variant='contained' onClick={() => router.push('https://cf-leaderboard.netlify.app')}>
                        Visit Project
                    </Button>
                    <Button size="small" onClick={() => router.push('https://github.com/oss2019/CodeForces-Leaderboard')}>
                        Source Code
                    </Button>
                </CardActions>
            </Card>
            <CodeforcesLeaderboardModal show={show} setShow={setShow} />
        </>    
    )
}

const VideoCalls = () => {
    const [show, setShow] = React.useState(false);
    const router = useRouter();

    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setShow(true)}>
                    <CardMedia title="Video Calls">
                        <Zoom>
                            <Image src="/Projects/VC.png" alt="Video Calls" width={600} height={300} objectFit="cover" />
                        </Zoom>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Video Calls | Owner
                        </Typography>
                        <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
                            <Chip label='React.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Node.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Express.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='JavaScript' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='Socket.io' variant='outlined' sx={{ margin: '3px' }}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ padding: '1rem 2rem' }}>
                    <Button size="small" variant='contained' onClick={() => router.push('https://video-chat-exp.netlify.app')}>
                        Visit Project
                    </Button>
                    <Button size="small" onClick={() => router.push('https://github.com/Samyc2002/Video-Calls')}>
                        Source Code
                    </Button>
                </CardActions>
            </Card>
            <VideoCallsModal show={show} setShow={setShow} />
        </>
    )
}

const ReactIDE = () => {
    const [show, setShow] = React.useState(false);
    const router = useRouter();

    return (
        <>
            <Card sx={{ maxWidth: 600 }}>
                <CardActionArea onClick={() => setShow(true)}>
                    <CardMedia title="Online React IDE">
                        <Zoom>
                            <Image src="/Projects/RIDE.png" alt="Online React IDE" width={600} height={300} objectFit="cover" />
                        </Zoom>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Online React IDE | Owner
                        </Typography>
                        <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
                            <Chip label='React.js' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='JavaScript' variant='outlined' sx={{ margin: '3px' }}/>
                            <Chip label='APIs' variant='outlined' sx={{ margin: '3px' }}/>
                        </Stack>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ padding: '1rem 2rem' }}>
                    <Button size="small" variant='contained' onClick={() => router.push('https://online-ide-exp.netlify.app')}>
                        Visit Project
                    </Button>
                    <Button size="small" onClick={() => router.push('https://github.com/Samyc2002/React-IDE')}>
                        Source Code
                    </Button>
                </CardActions>
            </Card>
            <ReactIDEModal show={show} setShow={setShow} />
        </>
    )
}

export { CodersGarage, CodeforcesLeaderboard, VideoCalls, ReactIDE };
