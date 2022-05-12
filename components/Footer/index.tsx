import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import SocialIcons from '../SocialIcons';

const Footer = () => {
    return (
        <footer>
            <Container maxWidth="lg">
                <Grid
                    container
                    sx={{
                        padding: '2rem 0 1rem 0'
                    }}
                    rowSpacing={{
                        xs: 3,
                        md: 0
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={5}
                        sx={{
                            textAlign: {
                                xs: 'center',
                                md: 'left'
                            }
                        }}
                    >
                        <Typography variant="body1">
                            Designed and developed by{' '}Samriddha Chattopadhyay
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={3}
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="body1">
                            Copyright &copy; {new Date().getFullYear()}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: {
                                    xs: 'center',
                                    md: 'right'
                                }
                            }}
                        >
                            <SocialIcons
                                additionalStyles={{
                                    justifyContent: {
                                        xs: 'center',
                                        md: 'flex-end'
                                    }
                                }}
                            />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer;
