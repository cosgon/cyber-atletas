import { makeStyles, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

   root: {
      backgroundColor: '#46344E',
      flexGrow: '1',
      minHeight: '100vh',
      height: '100%',
      width: '100%',
      display:'flex',
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
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: "10% auto",
   },

   link: {
      textDecoration: "none",
      margin: "2px 0", 
      color: "#D9D9D9", 
    },

    textField: {
       borderColor: "#D9D9D9",
    },

    box : {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '415px',
      color: 'red',
    }
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
      '&& label': {
         color: '#FAED26',
      },
      '&& input': {
         color: '#FAED26',
      }
   },
})(TextField);

export default useStyles;           