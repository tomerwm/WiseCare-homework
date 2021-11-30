import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Text from '../components/CamView/pageComponents/Text';
import LOGO from '../styles/Illustrations/Develor.svg'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    img: {
      height:300,
      width:550,
    },
    btn : {
        left:'50%',
        marginTop: 50,
        height:60,
        width:150,
    },
  }));



export const LandingPage = () => {
    const classes = useStyles();
    return (
        <>
          <Grid container
                spacing={4}
                alignItems="center">
            <Grid item md={8}>
                <Paper>
                 <Text/>
                </Paper>
                <div>
                <Link to="/LiveStream">
                <Button variant="contained" className={classes.btn}>Start</Button>
                </Link>
                </div>
            </Grid>

            <Grid item md={4}>
                    <img  className={classes.img} src={LOGO} />
            </Grid>
          </Grid>
        </>
            )
}
