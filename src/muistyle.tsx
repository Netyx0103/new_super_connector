
import { createStyles, makeStyles, Theme,createTheme, ThemeProvider } from '@material-ui/core/styles';
import { alpha } from '@material-ui/core/styles';
import ourtheme from './Nav';

const yourstyle = makeStyles({
    gradientbutton: {
      variant:"outlined",
      background: 'linear-gradient(45deg, #7600FF 30%, #5200FF 90%)',
      boxShadow: '0 4px 5px 2px rgba(82, 0, 255, .3)',
      borderRadius: 5,
      size:"large",
      color:"#ffffff",
      margin: 10,



    },
    bruh: {
      color:"secondary"  
    
    
    },
    GoToUpload: {
      size:'medium',
      color:"secondary" ,
    },
    navbar:{
      backround: 'secondary',
      position: "sticky",
    }
  
    })
    
export default  yourstyle;
