import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "#ffffff",

    borderRadius: "2rem",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
    [theme.breakpoints.up("sm")]: {
      width: "34rem",
    },
  },

  contentCard: {
    display: "flex",
    justifyContent: "space-around",
  },

  h5: {
    textAlign: "center",
  },
  h1: {
    fontSize: "54px",
    fontWeight: "700",
    color: "#f5f5f5",
    marginBottom: "20px",
    textAlign: "center",
  },

  loading: {
    color: "#faed26",
    margin: "50vh auto",
  },
  habitsModal: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "2rem",
    marginRight: "2rem",
    marginTop: "2rem",
  },
  subModal: {
    backgroundColor: "#463446",
  },
}));

export default useStyles;
