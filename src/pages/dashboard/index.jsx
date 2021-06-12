import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Avatar, Typography } from '@material-ui/core';
<<<<<<< HEAD
import CardDashboard from '../../components/CardDashboard';
import { useState } from 'react';
=======

import CardDashboard from '../../components/CardDashboard';
>>>>>>> 871822cae786ff8cac247f47ef58c596b8de8d3d

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
      borderRadius: '2.3rem',
      backgroundColor: '#5a556070',
   },
   resumeBox: {
      height: '553px',
      width: '700px',
      borderRadius: '2.3rem',
      backgroundColor: '#5a556070',
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
      borderRadius: '1.2rem',
      '&:hover': {
         transition: '0.6s',
         backgroundColor: '#463446',
         boxShadow: '1px 1px 11px 4px #FAED26',
      },
   },
})

const Dashboard = () => {
   const classes = useStyles();

<<<<<<< HEAD
   const [display, setDisplay] = useState('habits');

   const handleClick = (value) => {
      setDisplay(value);
      console.log(display);
   }

=======
>>>>>>> 871822cae786ff8cac247f47ef58c596b8de8d3d
   return (
      <Grid
         container
         justify='space-evenly'
         alignItems='center'
         className={classes.root}
      >
         <Grid container alignItems='center' justify='space-evenly' direction='column' className={classes.userBox}>
            <Avatar className={classes.userImage}/>
            <Typography
               variant='h3'
               className={classes.userName}
            >
               Nome do usuário
            </Typography>
<<<<<<< HEAD
            <Button
               variant="contained"
               className={classes.button}
               onClick={() => handleClick('habits')}
            >
               Hábitos
            </Button>
            <Button
               variant="contained"
               className={classes.button}
               onClick={() => handleClick('groups')}
            >
               Grupos
            </Button>
            <Button
               variant="contained"
               className={classes.button}
               onClick={() => handleClick('ativits')}
            >
               Atividades
            </Button>
            <Button
               variant="contained"
               className={classes.button}
               onClick={() => handleClick('goals')}
            >
=======
            <Button variant="contained" className={classes.button}>
               Hábitos
            </Button>
            <Button variant="contained" className={classes.button}>
               Grupos
            </Button>
            <Button variant="contained" className={classes.button}>
               Atividades
            </Button>
            <Button variant="contained" className={classes.button}>
>>>>>>> 871822cae786ff8cac247f47ef58c596b8de8d3d
               Objetivos
            </Button>
         </Grid>
         <Grid container alignItems='center' justify='space-evenly' className={classes.resumeBox}>
<<<<<<< HEAD
            {display === 'habits' && <h2>Hábitos</h2>}
            {display === 'groups' && <h2>Grupos</h2>}
            {display === 'ativits' && <h2>Atividades</h2>}
            {display === 'goals' && <h2>Metas</h2>}
=======
            <CardDashboard/>
>>>>>>> 871822cae786ff8cac247f47ef58c596b8de8d3d
         </Grid>
      </Grid>
   )
}

export default Dashboard;