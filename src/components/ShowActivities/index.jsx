import useStyles from "./style";
import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Fab,
} from "@material-ui/core";
import { useGroups } from "../../provider/Groups";
import { useEffect } from "react";

const ShowActivities = ({ id }) => {
  const classes = useStyles();

  const { loading, activities, selected, getActivities, deleteActivity } =
    useGroups();
  useEffect(() => {
    getActivities(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading || false ? (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <Grid>
      {activities?.map((activities, index) => (
        <Card className={classes.card} key={index}>
          <CardContent>
            <Fab onClick={() => deleteActivity(activities.id)}>X</Fab>
            <h3>{activities.title}</h3>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default ShowActivities;
