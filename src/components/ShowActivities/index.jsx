import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useStyles from "./style";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Grid,
} from "@material-ui/core";

const ShowActivities = () => {
  const [showActivities, setShowActivities] = useState();
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const getActivities = () => {
    setLoading(true);
    api.get("groups/13/").then((response) => {
      setShowActivities(response.data.activities);
      setLoading(false);
    });
  };

  useEffect(() => {
    getActivities();
  }, []);

  {
    console.log(showActivities);
  }
  return showActivities === undefined ? (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <div>
      {showActivities.map((activities) => (
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
