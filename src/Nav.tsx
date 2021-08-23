import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import icon from '@material-ui/icons'
import { createStyles, makeStyles, Theme,createTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home'
import colors from '@material-ui/core'
import { light } from '@material-ui/core/styles/createPalette';
import { styled } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { StylesProvider } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Zoom from '@material-ui/core/Zoom';
import yourstyle from './muistyle';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Container } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import ourtheme from './muitheme';
import SuperConnector from './SuperConnector';




 

export default function test() {
  const classes = yourstyle();
  return (
  <div>
    <ThemeProvider theme={ourtheme}>
    <div>
       <AppBar position="sticky">
        <Typography variant="h5" color="secondary">
          <Toolbar className={classes.navbar}>
              <Link to="/">
              <Button 
               className={classes.gradientbutton}             

              startIcon={<HomeIcon/>}
              >
                HoHey
              </Button>  
            </Link>                     
           <Link to="/videolist">
              <Button 
                  className={classes.gradientbutton}             
                  startIcon={<PlayArrowIcon/>}
              >
                Videos
              </Button>  
            </Link>  

            <Container maxWidth="sm">

            <Link to="/uploadpage">
            <Tooltip  
              TransitionComponent={Zoom} 
              title="Upload Video">
               <IconButton  
                edge="end" 
                size='medium' 
                color="secondary" 
                className={classes.GoToUpload}>
                
                <PublishIcon ></PublishIcon>
               
              </IconButton>
            </Tooltip>
           </Link>
           </Container>
            
          
            
            </Toolbar>

          </Typography>
          </AppBar>
         
    </div>
    </ThemeProvider>

    <SuperConnector />
  </div>
  );
}


