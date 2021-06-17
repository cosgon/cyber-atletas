import { Grid, Typography, IconButton } from '@material-ui/core';
import useStyles from "./style";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Devs = () => {
   const classes = useStyles();

   return (
      <Grid className={classes.container}>
         <Typography variant='h3' className={classes.title}>
            DEVS:
         </Typography>
         <Grid className={classes.box}>
            <IconButton
               className={classes.button}
               href='https://www.linkedin.com/in/andre-nascimento-b543831a9/'
               target='_blank'
            >
               <LinkedInIcon/> André Nascimento
            </IconButton>
            <IconButton
               className={classes.button}
               href='https://www.linkedin.com/in/charles-pinheiro-052356205/'
               target='_blank'
            >
               <LinkedInIcon/> Charles Pinheiro
            </IconButton>
            <IconButton
               className={classes.button}
               href='https://www.linkedin.com/in/eduardo-godoi-12263b122/'
               target='_blank'
            >
               <LinkedInIcon/> Eduardo Godoi
            </IconButton>
            <IconButton
               className={classes.button}
               href='https://www.linkedin.com/in/guilhermecosgoncalves/'
               target='_blank'
            >
               <LinkedInIcon/> Guilherme Gonçalves
            </IconButton>
            <IconButton
               className={classes.button}
               href='https://www.linkedin.com/in/mmarquelio/'
               target='_blank'
            >
               <LinkedInIcon/> Maria Marquelio
            </IconButton>
         </Grid>
      </Grid>

   
   )
};

export default Devs;