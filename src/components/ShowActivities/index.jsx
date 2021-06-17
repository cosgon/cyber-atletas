import { Card, CardContent, Fab, Typography } from "@material-ui/core";
import { useGroups } from "../../provider/Groups";
import { useEffect } from "react";
import useStyles from "./style";

const ShowActivities = () => {
  const classes = useStyles();

  const { activities, selected, getActivities, deleteActivity } = useGroups();
  useEffect(() => {
    getActivities(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card className={classes.container}>
      <ul>
        {activities?.map((activities) => (
          <li className={classes.card} key={activities.id}>
            <CardContent className={classes.containerActivity}>
              <CardContent className={classes.title}>
                <Typography variant="h4">{activities.title}</Typography>
              </CardContent>
              <CardContent>
                <Fab
                  variant="contained"
                  color="secondary"
                  className={classes.buttonRemove}
                  aria-label="Remove"
                  onClick={() => deleteActivity(activities.id)}
                >
                  X
                </Fab>
              </CardContent>
            </CardContent>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ShowActivities;
