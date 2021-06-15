import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import ShowActivities from "../ShowActivities";
import useStyles from "./style";

const CardDashboard = ({ group }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.habit}>{group.name}</Typography>
      </CardContent>
      <CardContent className={classes.descript}>
        <Typography>Categoria: {group.category}</Typography>
        <Typography>Descricao: {group.description}</Typography>
      </CardContent>
      <CardContent className={classes.times}>
        <Typography>
          Atividades:
          <ShowActivities id={group.id} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDashboard;
