import React from 'react';
import { SiFirebase } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { Typography, Grid, Card, CardContent } from '@mui/material';
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiDjango } from "react-icons/di";

import { colors } from '../../styles/colors';

const TechStack = () => {
    return (
        <>
            <Typography variant="h4" align='center'>
                Professional <span style={{ color: colors.red, fontWeight: 600 }}>Skillset</span>
            </Typography>
            <br/>
            <br/>
            <Grid container spacing={3} sx={{ fontSize: '4rem', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <CgCPlusPlus/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent  sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <DiJavascript1/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent  sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <DiNodejs/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent  sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <DiReact/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent  sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <DiMongodb/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent  sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <DiPython/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent  sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <DiGit/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent  sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <SiFirebase/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <Card variant="outlined" sx={{ border: '1px solid rgba(255, 255, 255, 0.5)', transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { border: `1px solid ${colors.orange}` } }}>
                        <CardContent  sx={{ display: 'grid', placeItems: 'center', transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', '&:hover': { color: colors.orange } }}>
                            <DiDjango/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default TechStack;
