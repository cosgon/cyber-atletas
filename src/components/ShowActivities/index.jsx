import { useEffect, useState } from "react";

import axios from "axios";
import useStyles from "./style";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";

const ShowActivities = ({ id }) => {
  const [showActivities, setShowActivities] = useState();
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const getActivities = () => {
    setLoading(true);
    api
      .get(`groups/${id}/`)
      .then((response) => {
        setShowActivities(response.data.activities);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // useEffect(() => {
  //   getActivities();
  // }, []);

  return loading ? (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <div>
      {showActivities?.map((activities) => (
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
