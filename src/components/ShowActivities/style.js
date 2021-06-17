import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#00000000",

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
    width: "70%",
    textAlign: "center",
    "&& h4": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    }
  }
}
  /*   
  {
    card: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: "#ffffff",
      borderRadius: "2rem",
      textAlign: "center",
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
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
  }
  */

);

export default useStyles;
