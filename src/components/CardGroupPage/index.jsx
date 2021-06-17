import { CardContent, Typography, Button, Container } from "@material-ui/core";
import ShowActivities from "../ShowActivities";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import ActivitiesModal from "../ActivitiesModal";
import ShowGoals from "../ShowGoals";
import GoalsModal from "../GoalsModal";

const CardGroupPage = ({ group }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container className={classes.container}>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Button
                className={classes.button}
                onClick={() => history.push("/dashboard")}
              >
                Voltar
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <header>
          <CardContent className={classes.title}>
            <Typography variant="h2">{group.name}</Typography>
          </CardContent>
          <CardContent className={classes.info}>
            <CardContent>
              <Typography variant="h4">Categoria:</Typography>
              <Typography>{group.category}</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="h4">Descricao: </Typography>
              <Typography>{group.description}</Typography>
            </CardContent>
          </CardContent>
        </header>

        <main className={classes.containerContent}>
          <CardContent className={classes.containerActivities}>
            <CardContent className={classes.title}>
              <Typography variant="h3">Atividades:</Typography>
            </CardContent>
            <ActivitiesModal />
            <ShowActivities id={group.id} className={classes.title} />
          </CardContent>
          <CardContent className={classes.containerGoals}>
            <CardContent className={classes.title}>
              <Typography variant="h3">Metas</Typography>
            </CardContent>
            <GoalsModal />
            <ShowGoals id={group.id} className={classes.title} />
          </CardContent>
        </main>
      </section>
    </Container>
  );
};

export default CardGroupPage;
