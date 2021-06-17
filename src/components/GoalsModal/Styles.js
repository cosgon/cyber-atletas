import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: "1.9rem",
    fontWeight: "700",
    width: "100%",
    color: "#FFFFFF",
    "&&:hover": {
      transition: "0.2s",
      backgroundColor: "#463446",
      boxShadow: "1px 1px 5px 4px #FFFFFF50",
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
