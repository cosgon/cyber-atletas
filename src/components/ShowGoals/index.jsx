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
import { GolfCourseSharp } from "@material-ui/icons";

const ShowGoals = ({ id }) => {
  const classes = useStyles();
  const [operator, setOperator] = useState("");
  const {
    setOneGoal,
    oneGoal,
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

  useEffect(() => {
    getGoals(selected);

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
                  updateGoals(goals.id, goals.how_much_achieved, "add");
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
                  updateGoals(goals.id, goals.how_much_achieved, "sub");
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
