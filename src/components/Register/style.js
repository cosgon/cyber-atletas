import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({

   root: {
      backgroundColor: '#46344E',
      minHeight: '100vh',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
   },

   img: {
      height: '40%',
      width: '30%',
   },

   button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: '5px',
      border: 0,
      color: 'white',
      height: '3rem',
      padding: '0 2rem',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      margin: "10% auto",
   },

   link: {

      textDecoration: "none",
      margin: "2px 0",
      color: "#D9D9D9",
      '&:hover': {
         filter: 'brightness(2)'
      }
   },

   box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '26rem',
      color: '#EF5350',
   },

}));

export const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#FE6B8B',
      },
      secondary: {
         main: '#FAED26',
      },
   },
});

export const CssTextField = withStyles({
   root: {
      '&& fieldset': {
         borderColor: '#FAED26',
      },
      '&&:hover fieldset': {
         borderColor: '#FAED26',
      },
      '&& label' : {
         color: '#FAED26'
      },
      '&& input': {
         color: '#FAED26',
      }
   },
})(TextField);

export default useStyles;