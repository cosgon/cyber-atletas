import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "#ffffff",
    width: "34rem",
    borderRadius: "2rem",
    textAlign: "center",
    marginTop: "20px",
  },
  contentArea: {
    height: "100%",
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1.3rem",
    overflowWrap: "break-word",
  },
  description: {
    color: "#ffffff",
    fontWeight: "lighter",
    fontSize: "1rem",
    overflowWrap: "break-word",
  },
  loading: {
    color: "#faed26",
    margin: "50vh auto",
  },
  h1: {
    fontSize: "54px",
    fontWeight: "700",
    color: "#f5f5f5",
    marginBottom: "20px",
    textAlign: "center",
  },
  groupsModal: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "2rem",
    marginRight: "2rem",
    marginTop: "2rem",
  },
});

export default useStyles;
