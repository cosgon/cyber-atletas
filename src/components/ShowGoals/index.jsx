import useStyles from "./style";
import {
  Card,
  CardContent,
  Fab,
  Button,
  LinearProgress,
  Typography,
} from "@material-ui/core";
import { useGroups } from "../../provider/Groups";
import { useEffect } from "react";

const ShowGoals = () => {
  const classes = useStyles();
  const { updateGoals, goals, loading, selected, getGoals, deleteGoal } =
    useGroups();

  useEffect(() => {
    getGoals(selected);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className={classes.container}>
      <ul>
        {goals?.map((goals, index) => (
          <li key={index}>
            <CardContent className={classes.containerGoals}>
              <CardContent>
                <Fab
                  variant="contained"
                  color="secondary"
                  className={classes.buttonRemove}
                  aria-label="Remove"
                  onClick={() => {
                    deleteGoal(goals.id);
                  }}
                >
                  X
                </Fab>
              </CardContent>
              <CardContent className={classes.title}>
                <Typography variant="h4">{goals.title}</Typography>
                <Typography variant="h4">{goals.difficulty}</Typography>
              </CardContent>
              <LinearProgress
                className={classes.bar}
                variant="determinate"
                color="secondary"
                value={goals.how_much_achieved}
              />
              <div className={classes.buttons}>
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={() =>
                    updateGoals(goals.id, goals.how_much_achieved, "sub")
                  }
                >
                  -
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={() =>
                    updateGoals(goals.id, goals.how_much_achieved, "add")
                  }
                >
                  +
                </Button>
              </div>
            </CardContent>
            <CardContent></CardContent>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ShowGoals;
