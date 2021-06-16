import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "#ffffff",
    width: "34rem",
    borderRadius: "2rem",
    textAlign: "center",
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loading: {
    color: "#faed26",
    margin: "50vh auto",
  },
  buttonRemove: {
    borderRadius: "100%",
    "&:hover": {
      transition: "0.6s",
    },
    color: "#FFFFFF",
    margin: "0 20px",

  },
});

export default useStyles;
