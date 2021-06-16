import useStyles from "./style";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
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
      {activities?.map((activities) => (
        <Card className={classes.card}>
          <CardContent>
            <Typography>
              <h3>{activities.title}</h3>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShowActivities;
