import useStyles from "./style";
import {
  Card,
  CardContent,
  CircularProgress,
  Fab,
  Button,
  LinearProgress,
} from "@material-ui/core";
import { useGroups } from "../../provider/Groups";
import { useEffect, useState } from "react";

const ShowGoals = ({ id }) => {
  const classes = useStyles();

  const {
    getOneGoal,
    counter,
    updateGoals,
    setCounter,
    goals,
    loading,
    selected,
    getGoals,
    deleteGoal,
  } = useGroups();

  console.log(counter);

  useEffect(() => {
    getGoals(selected);
    getOneGoal(goals.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading || false ? (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <div>
      {goals?.map((goals, index) => (
        <Card className={classes.card} key={index}>
          <CardContent>
            <h3>Titulo: {goals.title}</h3>
            <p> Dificuldade: {goals.difficulty}</p>
            <div className={classes.progress}>
              <Button
                className={classes.increment}
                variant="contained"
                onClick={() => {
                  setCounter(counter + 10);
                  updateGoals(goals.id);
                }}
              >
                {" "}
                +
              </Button>
              <div className={classes.linearBar}>
                <LinearProgress
                  variant="determinate"
                  value={goals.how_much_achieved}
                />
              </div>

              <Button
                className={classes.increment}
                variant="contained"
                onClick={() => {
                  setCounter(counter - 10);
                  updateGoals(goals.id);
                }}
              >
                {" "}
                -
              </Button>
            </div>
          </CardContent>
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
        </Card>
      ))}
    </div>
  );
};

export default ShowGoals;
