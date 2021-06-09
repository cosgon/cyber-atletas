import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./style.css";
const useStyles = makeStyles({
  root: {
    width: "80%",
    display: "flex",
    margin: "10px 0",
  },
});

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
    <div className={"container flex"}>
      <CircularProgress color="#faed26" className="loading" />
    </div>
  ) : (
    <div className={"container flex"}>
      <h1>Grupos:</h1>
      {allGroups.map((currentGroup, index) => {
        return (
          <Card className={classes.root} key={index}>
            <CardActionArea className={"details"}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  #{currentGroup.id} - {currentGroup.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {currentGroup.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={"subscribe"}>
              <Button variant="contained" color="primary" onClick={() => {}}>
                inscreva-se
              </Button>
            </CardActions>
          </Card>
        );
      })}
      <div className={"flex btn_change_page"}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePreviousPage}
        >
          Previous
        </Button>
        <Button variant="contained" color="primary" onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};
export default CardGroupPages;
