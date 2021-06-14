import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

   root: {
      backgroundColor: '#46344e',
      flexGrow: '1',
      minHeight: '100vh',
      height: '100%',
      width: '100%',
      minHeight: '30vh',
      display:'flex',
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
   },
   
   img: {
      height: '70%',
      width: '70%',
   },

   h2: {
     margin:"0 10%",  
   }, 

   h4: {
    
      margin: "2px 0", 
      color: "#d9d9d9", 
   },

   menu: {
      display:'flex',
      flexDirection: "row",
      width: '50%',
      marginBottom: "10%",
   },

   link: {
     color: "#faed26",
     textDecoration: "none",
     fontSize: "1.5em",
   }
});

export default useStyles;           