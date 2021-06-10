import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    background: "#c4c4c4",
    width: "34rem",
    borderRadius: "2rem",
    textAlign: "center",
    marginTop: "20px",
  },
  contentArea: {
    height: "100%",
  },
  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: "1.3rem",
    overflowWrap: "break-word",
  },
  description: {
    color: "#000",
    fontWeight: "lighter",
    fontSize: "1rem",
    overflowWrap: "break-word",
  },
});

export default useStyles;
