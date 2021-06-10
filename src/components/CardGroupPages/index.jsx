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

const CardGroupPages = ({
  allGroups,
  previousPage,
  nextPage,
  setEndPoint,
  loading,
}) => {
  const classes = useStyles();

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

  return loading ? (
    <div className={classes.container}>
      <CircularProgress color="#faed26" className={classes.loading} />
    </div>
  ) : (
    <div className={classes.container}>
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
              <Button
                className={classes.subscribeButton}
                variant="contained"
                color="primary"
                onClick={() => {}}
              >
                inscreva-se
              </Button>
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
