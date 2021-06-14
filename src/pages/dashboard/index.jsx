import { Grid, Button, Avatar, Typography } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./style";

const Dashboard = () => {
  const classes = useStyles();

  const [display, setDisplay] = useState("habits");

  const handleClick = (value) => {
    setDisplay(value);
    console.log(display);
  };

  return (
    <Grid>
      <Grid
        container
        alignItems="center"
        justify="space-evenly"
        direction="column"
        className={classes.userBox}
      >
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          direction="column"
          className={classes.userBox}
        >
          <Avatar className={classes.userImage} />
          <Typography variant="h3" className={classes.userName}>
            Nome do usuário
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleClick("habits")}
          >
            Hábitos
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleClick("groups")}
          >
            Grupos
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleClick("ativits")}
          >
            Atividades
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleClick("goals")}
          >
            Objetivos
          </Button>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
          className={classes.resumeBox}
        >
          {display === "habits" && <h2>Hábitos</h2>}
          {display === "groups" && <h2>Grupos</h2>}
          {display === "ativits" && <h2>Atividades</h2>}
          {display === "goals" && <h2>Metas</h2>}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
