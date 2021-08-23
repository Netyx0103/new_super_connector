import zIndex from '@material-ui/core/styles/zIndex';
import React from 'react';
import './App.css';
import {
  createTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from '@material-ui/core/styles';


const ourtheme = createTheme({
    
    
    
  palette: {
    type: 'light',
    primary: {main: '#ffffff'},
    secondary: {
      main:'#5200FF',
          }    
  },
});

export default ourtheme;




