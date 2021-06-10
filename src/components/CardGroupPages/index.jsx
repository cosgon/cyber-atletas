import useStyles from "./style";
import {
  CircularProgress,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
} from "@material-ui/core";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGroups } from "../../provider/groups";
const CardGroupPages = ({
  allGroups,
  previousPage,
  nextPage,
  setEndPoint,
  loading,
}) => {
  const api = axios.create({ baseURL: "https://kabit-api.herokuapp.com" });
  const classes = useStyles();
  const { groups } = useGroups();
  const handlePreviousPage = () => {
    if (previousPage) {
      setEndPoint(previousPage);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      setEndPoint(nextPage);
    }
  };
  const token =
    JSON.parse(localStorage.getItem("token")) ||
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNzYxMTg1LCJqdGkiOiJkY2M0MjA3MGM4YmQ0MDY5YmM2YTkwNzFhZWEyYTk4MyIsInVzZXJfaWQiOjY1NH0.WY0jp43T0DvcRdu7X00dePa3at1ZlhTeEhjCvDQ4yTo";

  const handleSubscribe = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => toast.success("Inscrito no grupo!"))
      .catch((error) => toast.error(`${error}`));
  };
  return loading ? (
    <div className={classes.container}>
      <CircularProgress className={classes.loading} />
    </div>
  ) : (
    <div className={classes.container}>
      <ToastContainer />
      <h1 className={classes.h1}>Grupos:</h1>
      {allGroups.map((currentGroup, index) => {
        return (
          <Card className={classes.root} key={index}>
            <CardActionArea className={classes.details}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.text}
                >
                  #{currentGroup.id} - {currentGroup.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.text}
                >
                  {currentGroup.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {groups.filter(
                (currentSubGroup) => currentSubGroup.id === currentGroup.id
              ).length === 0 ? (
                <Button
                  className={classes.subscribeButton}
                  variant="contained"
                  color="primary"
                  onClick={() => handleSubscribe(currentGroup.id)}
                >
                  inscreva-se
                </Button>
              ) : (
                <Button
                  className={classes.subscribeButton}
                  variant="contained"
                  color="primary"
                  disabled
                >
                  inscrito
                </Button>
              )}
            </CardActions>
          </Card>
        );
      })}
      <div className={classes.changePageContainer}>
        {previousPage ? (
          <Button
            className={classes.changePage}
            variant="contained"
            color="primary"
            onClick={handlePreviousPage}
          >
            Anterior
          </Button>
        ) : (
          <div></div>
        )}
        {nextPage ? (
          <Button
            className={classes.changePage}
            variant="contained"
            color="primary"
            onClick={handleNextPage}
          >
            Proximo
          </Button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default CardGroupPages;
