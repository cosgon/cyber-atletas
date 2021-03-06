import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    "&:hover": {
      transition: "0.6s",
      backgroundColor: "#463446",
      boxShadow: "1px 1px 5px 4px #FFFFFF40",
    },
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default useStyles;
