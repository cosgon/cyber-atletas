import { useHabits } from "../../provider/Habits";
import useStyles from "./Styles";
import HabitsModal from "../HabitsModal/index";
import { ToastContainer } from "react-toastify";

import {
  CircularProgress,
  CardActionArea,
  Grid,
  CardContent,
  Typography,
  Card,
} from "@material-ui/core";
import ShowActivities from "../ShowActivities";

const ShowHabits = () => {
  const classes = useStyles();

  const { habits, loading } = useHabits();

  console.log(loading);

  return loading ? (
    <Grid className={classes.container}>
      <CircularProgress className={classes.loading} />
    </Grid>
  ) : (
    <div>
      <Grid className={classes.habitsModal}>
        <HabitsModal />
      </Grid>
      <ToastContainer />
      <h1 className={classes.h1}>Hábitos:</h1>

      {habits.map((habit) => (
        <Card className={classes.root} key={habit.id}>
          <CardActionArea>
            <Typography className={classes.h5} variant="h5">
              {habit.title}
            </Typography>

            <CardContent className={classes.contentCard}>
              <p className={classes.text} variant="p">
                {habit.category}
              </p>
              <p className={classes.text} variant="p">
                {habit.difficulty}
              </p>
              <p className={classes.text} variant="p">
                {habit.frequency}
              </p>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <ShowActivities />
    </div>
  );
};

export default ShowHabits;
