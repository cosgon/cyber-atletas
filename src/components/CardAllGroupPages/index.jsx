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
import { useGroups } from "../../provider/Groups";
import { useLogin } from "../../provider/Login";
const CardAllGroupPages = ({
  allGroups,
  previousPage,
  nextPage,
  setEndPoint,
  loading,
}) => {
  const api = axios.create({ baseURL: "https://kabit-api.herokuapp.com" });
  const classes = useStyles();
  const { groups, getGroups, subGroup } = useGroups();

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
  const { token } = useLogin();

  const handleSubscribe = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Inscrito no grupo!");
        getGroups();
      })
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
      {allGroups?.map((currentGroup, index) => {
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
                  className={classes.text2}
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
                  color="secondary"
                  onClick={() => handleSubscribe(currentGroup.id)}
                >
                  inscreva-se
                </Button>
              ) : (
                <Button
                  className={classes.button}
                  onClick={() => {
                    subGroup(currentGroup.id);
                    getGroups();
                  }}
                >
                  Desinscrever
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
export default CardAllGroupPages;
