import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Developer from '../styles/Illustrations/Developer.svg'

export const LandingPage = () => {
    return (
        <>
          <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center">
            <Grid item md={3}>
                <Paper>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                    Header
                    </Typography>
                </Paper>
            </Grid>
            <Grid item md={3}>
                <Paper> </Paper>
            </Grid>
            <Grid item md={3}>
                <Link to="/LiveStream">Get Start</Link>
            </Grid>
          </Grid>
        </>
            )
}
