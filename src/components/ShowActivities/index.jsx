import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
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
  const api = axios.create({
    baseURL: "https://kabit-api.herokuapp.com/",
  });

  const getActivities = () => {
    api
      .get("groups/13/")
      .then((response) => setShowActivities(response.data.activities));
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <>
      <h1> oi</h1>
      {console.log(showActivities)}
    </>
  );
};

export default ShowActivities;
