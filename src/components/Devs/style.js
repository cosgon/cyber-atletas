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
   },
   button: {
      borderRadius: '13px',
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: '#FFF',
      padding: '20px',
      '&:hover': {
         transition: "0.6s",
         backgroundColor: "#463446",
         boxShadow: "1px 1px 5px 4px #FFFFFF40",
      },
   },
   linkedin: {
      color: '#0A66C2'
   },
});

export default useStyles;