import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#00000000",
    boxShadow: "none",
  },
  containerGoals: {
    width: "90%",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    margin: "5px 0",
    borderRadius: "2.3rem",
    color: "#FFFFFF",
  },
  title: {
    width: "70%",
    textAlign: "center",
    "&& h4": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    }
  },
  progress: {
    width: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  bar: {
    width: "75%",
    height: "40px",
    backgroundColor: "#5A556070",
    borderRadius: "15px",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    fontWeight: "700",
    fontSize: "24px",
    borderRadius: "100%",
    margin: "10px 10px",
    "&:hover": {
      transition: "0.6s",
      backgroundColor: "#463446",
      boxShadow: "1px 1px 5px 4px #FFFFFF40",
    },
    color: "#FFFFFF",
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",

  }
}
);

export default useStyles;