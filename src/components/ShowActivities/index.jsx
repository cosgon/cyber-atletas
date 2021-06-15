import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import useStyles from "./style";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import { toast, ToastContainer } from "react-toastify";

const ShowActivities = () => {
  const [showActivities, setShowActivities] = useState();

  const classes = useStyles();

  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const getActivities = () => {
    api.get("groups/13/").then((response) => {
      setShowActivities(response.data.activities);
      toast.success("Atividade Cadastrada");
    });
  };

  useEffect(() => {
    getActivities();
  }, []);

  return showActivities === undefined ? (
    <div>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <div>
      <ToastContainer />
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
