import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "#FFF",
    width: "34rem",
    borderRadius: "2rem",
    textAlign: "center",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      width: '20rem',
      padding: '20px'
    },
  },
  test: {
   listStyle: 'none',
  },
  titleTest: {
    width: '23rem',
    [theme.breakpoints.up("sm")]: {
      width: '45rem',
    }
  },
  contentArea: {
    height: "100%",
  },
  title: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: "1.3rem",
    overflowWrap: "break-word",
  },
  description: {
    color: "#FFF",
    fontWeight: "lighter",
    fontSize: "1rem",
    overflowWrap: "break-word",
  },
  loading: {
    color: "#FAED26",
    margin: "50vh auto",
  },
  h1: {
    fontSize: "54px",
    fontWeight: "700",
    color: "#F5F5F5",
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
  button: {
    color: '#463446',
    "&:hover": {
      transition: "0.6s",
      color: "#F5F5F5",
      boxShadow: "1px 1px 20px 4px #FFFFFF40",
    },
  },
}));

export default useStyles;
