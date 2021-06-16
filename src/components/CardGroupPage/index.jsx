import { Card, CardContent, Typography } from "@material-ui/core";
import ShowActivities from "../ShowActivities";
import FormActiveties from "../FormActivities";
import useStyles from "./style";

const CardGroupPage = ({ group }) => {
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
        <Typography>Atividades:</Typography>
        <FormActiveties />
        <ShowActivities id={group.id} />
      </CardContent>
    </Card>
  );
};

export default CardGroupPage;
