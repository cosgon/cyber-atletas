import useStyles from "./style";
import { Card, CardContent, CircularProgress } from "@material-ui/core";
import { useGroups } from "../../provider/Groups";
import { useEffect } from "react";

const ShowActivities = ({ id }) => {
  const classes = useStyles();

  const { loading, activities, selected, getActivities } = useGroups();
  useEffect(() => {
    getActivities(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading || false ? (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <div>
      {activities?.map((activities, index) => (
        <Card className={classes.card} key={index}>
          <CardContent>
            <h3>{activities.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShowActivities;
