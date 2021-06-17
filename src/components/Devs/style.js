import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
   title: {
      color: '#FFF',
      fontWeight: '900',
   },
   box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: '31rem',
      alignItems: 'center',
      textAlign: 'left',
   },
   button: {
      borderRadius: '13px',
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: '#FFF',
      padding: '20px',
      width: '300px',
      justifyContent: 'start',
      '&:hover': {
         transition: "0.6s",
         backgroundColor: "#463446",
         boxShadow: "1px 1px 5px 4px #FFFFFF40",
      },
   },
});

export default useStyles;