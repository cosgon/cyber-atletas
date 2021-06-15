import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   root: {
      backgroundColor: "#46344E",
      backgroundImage: "url(https://www.imagemhost.com.br/images/2021/06/15/Paleta-de-cores-2.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "100vh",
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
   },
   userBox: {
      height: "553px",
      width: "290px",
      borderRadius: "2.3rem",
      backgroundColor: "#5a556070",
   },
   resumeBox: {
      height: "553px",
      width: "700px",
      borderRadius: "1.7rem",
      backgroundColor: "#5a556070",
      overflow: 'auto',
      "&::-webkit-scrollbar": {
         borderRadius: '10px',
         backgroundColor: '#463446',
         backgroundImage:
            "linear-gradient(150deg, #9B786F 0%, rgba(90, 85, 96, 0) 20%)",
         height: '4rem'
      },
      "&::-webkit-scrollbar-thumb": {
         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
         borderRadius: '10px',
      },
      scrollbarFaceColor: 'black'
   },
   userImage: {
      marginTop: "10px",
      width: "130px",
      height: "130px",
   },
   userName: {
      fontFamily: "Roboto",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: "42px",
      letterSpacing: "0em",
      color: "#FAED26",
   },
   button: {
      color: "#FFF",
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      width: "14rem",
      height: "3.5rem",
      fontWeight: "900",
      fontSize: "1.3rem",
      borderRadius: 9,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      "&:hover": {
         transition: "0.6s",
         backgroundColor: "#463446",
         boxShadow: "1px 1px 5px 4px #FFFFFF40",
      },
   },
});

export default useStyles;