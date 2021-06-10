import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   root: {
      backgroundColor: '#46344E',
      backgroundImage: 'linear-gradient(180deg, #9B786F 0%, rgba(90, 85, 96, 0) 75.05%)',
      flexGrow: '1',
      minHeight: '100vh',
      width: '100%',
   },
   userBox: {
      height: '553px',
      width: '290px',
      left: '204px',
      borderRadius: '50px',
      backgroundColor: '#5A5560'
   },
   resumeBox: {
      height: '553px',
      width: '700px',
      borderRadius: '50px',
      backgroundColor: '#5A5560'
   },
   userImage: {
      marginTop: '10px',
      width: '130px',
      height: '130px',
   },
   userName: {
      fontFamily: 'Roboto',
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '42px',
      letterSpacing: '0em',
      color: '#FAED26',
   },
   button: {
      color: '#FAED26',
      backgroundColor: '#463446',
      width: '14rem',
      height: '3.5rem',
      fontWeight: '900',
      fontSize: '1.3rem',
      borderRadius: '1.8rem',
      '&:hover': {
         transition: '0.6s',
         backgroundColor: '#463446',
         boxShadow: '1px 1px 11px 4px #FAED26',
      },
   },
})

export default useStyles;