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

const ShowHabits = () => {
  const classes = useStyles();

  const { habits } = useHabits();

  return (
    <Grid>
      {habits === undefined ? (
        <Grid className={classes.container}>
          <CircularProgress className={classes.loading} />
        </Grid>
      ) : (
        <div>
          <Grid
            direction="row"
            justify="flex-end"
            className={classes.habitsModal}
          >
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
                  <Typography className={classes.text} variant="p">
                    {habit.category}
                  </Typography>
                  <Typography className={classes.text} variant="p">
                    {habit.difficulty}
                  </Typography>
                  <Typography className={classes.text} variant="p">
                    {habit.frequency}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      )}
    </Grid>
  );
};

export default ShowHabits;
