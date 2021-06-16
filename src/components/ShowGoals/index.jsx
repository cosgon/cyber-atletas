import useStyles from "./style";
import { Card, CardContent, CircularProgress } from "@material-ui/core";
import { useGroups } from "../../provider/Groups";
import { useEffect } from "react";

const ShowGoals = ({ id }) => {
  const classes = useStyles();

  const { goals, loading, selected, getGoals } = useGroups();

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
            <h3>titulo: {goals.title}</h3>
            <p> Dificuldade {goals.difficulty}</p>
            <p>{goals.how_much_achieved}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShowGoals;
