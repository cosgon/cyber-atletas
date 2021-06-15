import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // width: "80%",
    // display: "flex",
    // margin: "10px 0",

    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: "#ffffff",
    width: "34rem",
    borderRadius: "2rem",
    textAlign: "center",
    marginTop: "20px",
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
  container: {
    backgroundColor: "#5a556070",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "0.2s",
    margin: "30px auto",
    borderRadius: "20px",
    padding: "50px 0",
    display: "flex",
    width: "70vw",
    paddingTop: "20px",
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
});

export default useStyles;
