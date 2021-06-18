import useStyles from "./style";
import {
  CircularProgress,
  CardContent,
  Typography,
  Button,
  Card,
  Container,
} from "@material-ui/core";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGroups } from "../../provider/Groups";
import { useHistory } from "react-router-dom";
const CardAllGroupPages = ({
  allGroups,
  previousPage,
  nextPage,
  setEndPoint,
  loading,
}) => {
  const { groups, getGroups, subGroup, handleSubscribe } = useGroups();
  const history = useHistory();

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

  const classes = useStyles();
  return loading ? (
    <div className={classes.loading}>
      <CircularProgress />
    </div>
  ) : (
    <Container className={classes.container}>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <Button
                className={classes.HomeButton}
                onClick={() => history.push("/dashboard")}
              >
                Voltar
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <ToastContainer />
      <CardContent className={classes.titles}>
        <Typography variant="h3">Grupos:</Typography>
      </CardContent>
      <ul className={classes.boxAllGroups}>
        {allGroups?.map((currentGroup) => {
          return (
            <li key={currentGroup.id} className={classes.containerGroup}>
              <CardContent className={classes.title}>
                <Typography variant="h5">
                  #{currentGroup.id} - {currentGroup.name}
                </Typography>
                <Typography>{currentGroup.description}</Typography>
              </CardContent>
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
                  className={classes.unSubscribeButton}
                  onClick={() => {
                    subGroup(currentGroup.id);
                    getGroups();
                  }}
                >
                  Desinscrever
                </Button>
              )}
            </li>
          );
        })}
      </ul>

      <CardContent className={classes.containerChangePage}>
        {previousPage ? (
          <Button
            className={classes.subscribeButton}
            variant="contained"
            color="primary"
            onClick={handlePreviousPage}
          >
            Anterior
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handlePreviousPage}
            disabled
          >
            Anterior
          </Button>
        )}
        {nextPage ? (
          <Button
            className={classes.subscribeButton}
            variant="contained"
            color="primary"
            onClick={handleNextPage}
          >
            Proximo
          </Button>
        ) : (
          <Button
            className={classes.changePage}
            variant="contained"
            color="primary"
            onClick={handleNextPage}
            disabled
          >
            Proximo
          </Button>
        )}
      </CardContent>
    </Container>
  );
};
export default CardAllGroupPages;
