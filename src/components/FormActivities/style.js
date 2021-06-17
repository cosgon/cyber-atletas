import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  subscribeButton: {
    width: "229px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 9,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginTop: "1rem",
    "&:hover": {
      transition: "0.6s",
      backgroundColor: "#463446",
      boxShadow: "1px 1px 5px 4px #FFFFFF40",
    },
  },
});

export default useStyles;
