import { Grid, Button, Avatar, Typography } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./style";
import Groups from "../../components/Groups";
import ShowHabits from "../../components/ShowHabits";
import { useHabits } from "../../provider/Habits";
import { useGroups } from "../../provider/Groups";
import { useEffect } from "react";
import { useLogin } from '../../provider/Login';
import axios from "axios";

const Dashboard = () => {
  const classes = useStyles();

  const [display, setDisplay] = useState("habits");
  const { handleFormGet } = useHabits();
  const { getGroups } = useGroups();
  const { userId } = useLogin();
  const [userName, setUserName] = useState('');
  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com",
  });

  const getUserName = () => {
    api
      .get(`/users/${userId}/`)
      .then(({data}) => {
        setUserName(data.username);
        console.log(data);
      })
      .catch(err => console.log('entrou'));
  };

  useEffect(() => {
    handleFormGet();
    getGroups();
    getUserName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = (value) => {
    handleFormGet();
    getGroups();
    setDisplay(value);
  };

  return (
    <Grid className={classes.root}>
      <Grid
        container
        className={classes.userBox}
      >
        <Avatar className={classes.userImage} />
        <Typography
          variant="h3"
          className={classes.userName}
        >
          {userName}
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
          DEVS
        </Button>
      </Grid>
      <Grid
        container
        className={classes.resumeBox}
      >
        {display === "habits" && <ShowHabits />}
        {display === "groups" && <Groups />}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
