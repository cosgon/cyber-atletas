import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import useStyles from "./style";

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
