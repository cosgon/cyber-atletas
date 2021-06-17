import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#00000000",
    boxShadow: "none",

  },
  containerActivity: {
    width: "90%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    flexDirection: "column",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "5px 0",
    borderRadius: "2.3rem",
    color: "#FFFFFF",
  },
  title: {
    width: "10rem",
    textAlign: "center",
    "&& h4": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    }
  }, buttonRemove: {
    width: "100%",
    height: "10px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
})
);

export default useStyles;
