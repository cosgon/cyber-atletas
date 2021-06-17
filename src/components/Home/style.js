import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#46344E",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: "90%",
    maxWidth: "620px",
  },

  h2: {
    marginTop: "10px",
  },

  h4: {
    marginTop: "10px",
    color: "#d9d9d9",
  },

  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: "620px",
    marginBottom: "10%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  link: {
    color: "#faed26",
    textDecoration: "none",
    fontSize: "1.5em",
  },
}));

export default useStyles;
