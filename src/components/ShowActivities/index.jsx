import useStyles from "./style";
import { Card, CardContent, CircularProgress } from "@material-ui/core";
import { useGroups } from "../../provider/Groups";

const ShowActivities = () => {
  const classes = useStyles();

  const { loading, activities } = useGroups();
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
