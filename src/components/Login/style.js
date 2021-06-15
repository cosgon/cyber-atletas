import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

   root: {
      backgroundColor: '#46344e',
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
      color: "#d9d9d9", 
    },

    textField: {
       borderColor: "#d9d9d9",
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

export default useStyles;           