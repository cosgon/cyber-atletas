import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#463446",
    width: "34rem",
    height: "10rem",
    borderRadius: "2rem",
    textAlign: "center",
  },
  teste: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "#FAED26",
    padding: "1rem",
    fontSize: "1rem",
  },
  habit: {
    color: "#FAED26",
    fontWeight: 800,
    fontSize: "2rem",
    letterSpacing: "0.35rem",
  },
  teste2: {
    height: "100%",
  },
  times: {
    color: "#FAED26",
  },
  icon: {
    color: "green",
  },
});

const CardDashboard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.teste2}>
        <CardContent>
          <Typography className={classes.habit}>TREINO DE DORSAL</Typography>
        </CardContent>
        <CardContent className={classes.teste}>
          <Typography>Esporte</Typography>
          <Typography>Difícil</Typography>
          <Typography>Semanal</Typography>
        </CardContent>
        <CardContent className={classes.times}>
          <Typography>
            <CheckCircleOutlineIcon className={classes.icon} /> Quantas vezes: 1
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardDashboard;
