import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import { SiLinux, SiArchlinux, SiVisualstudiocode, SiGnuemacs, SiVim, SiJupyter, SiFigma, SiPostman, SiHeroku, SiNetlify } from "react-icons/si";

import { colors } from '../../styles/colors';

const ToolStack = () => {
    return (
        <>
            <Typography variant="h4" align='center'>
                <strong style={{ color: colors.red }}>Tools</strong> I Use
            </Typography>
            <br/>
            <br/>
            <Grid container spacing={3} sx={{ fontSize: '4rem', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiLinux/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiArchlinux/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiVisualstudiocode/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiVim/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiGnuemacs/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiJupyter/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiFigma/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiPostman/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiHeroku/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiNetlify/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default ToolStack;
