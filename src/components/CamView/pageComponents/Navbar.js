import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TitleTwoToneIcon from '@mui/icons-material/TitleTwoTone';

export const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <TitleTwoToneIcon/>
            </Typography>
              <Link to="/">
                <Button variant="contained" color="primary">
               <HomeIcon/>
                </Button>
              </Link>
          </Toolbar>
        </AppBar>
      </Box>
    )
}