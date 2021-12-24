import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Text from '../components/CamView/pageComponents/Text';
import sittingMan from '../styles/Illustrations/Develor.svg';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    img: {
      height:300,
      width:550,
    },
    btn : {
        left:'50%',
        marginTop: 50,
    },
  }));

export const LandingPage = () => {
    const classes = useStyles();
    return (
        <>
        <Container  maxWidth="lg">
          <Grid container
                spacing={4}
                alignItems="center">
            <Grid item md={8}>
                 <Text/>
            </Grid>

            <Grid item md={4}>
                    <img  className={classes.img} src={sittingMan} alt="illustration"/>
            </Grid>
          </Grid>
                <Link to="/livestream">
                <Button variant="contained" className={classes.btn} size="large">Start</Button>
                </Link>
                </Container>
        </>
            )
}
