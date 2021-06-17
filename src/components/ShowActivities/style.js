import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#00000000",
    boxShadow: "none",

  },
  containerActivity: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    flexDirection: "row",
    flexWrap: "nowrap",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px 0",
    borderRadius: "2.3rem",
    color: "#FFFFFF",
  },
  title: {
    width: "9rem",
    textAlign: "center",
    "&& h4": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    }
  }
})
);

export default useStyles;
