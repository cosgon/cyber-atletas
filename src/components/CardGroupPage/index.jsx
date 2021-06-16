import { Card, CardContent, Typography, Button } from "@material-ui/core";
import ShowActivities from "../ShowActivities";
import FormActiveties from "../FormActivities";
import useStyles from "./style";
import { useGroups } from "../../provider/Groups";
import { useHistory } from "react-router-dom";
import ActivitiesModal from "../ActivitiesModal";

const CardGroupPage = ({ group }) => {
  const { subGroup, selected, getGroups } = useGroups();
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h1" className={classes.habit}>
          {group.name}
        </Typography>
      </CardContent>
      <CardContent className={classes.descript}>
        <Typography>Categoria: {group.category}</Typography>
        <Typography>Descricao: {group.description}</Typography>
      </CardContent>
      <CardContent className={classes.times}>
        <Button
          className={classes.button}
          onClick={() => history.push("/dashboard")}
        >
          Voltar
        </Button>
        <Button
          className={classes.buttonRemove}
          onClick={() => {
            subGroup(selected);
            getGroups();
            history.push("/dashboard");
          }}
        >
          Desinscrever-se
        </Button>
        <ActivitiesModal />
      </CardContent>
      <CardContent className={classes.container}>
        <CardContent>
          <Typography className={classes.title} variant="h2">
            Atividades
          </Typography>
          <ShowActivities id={group.id} />
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default CardGroupPage;
