import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  subscribeButton: {
    width: "150px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: "1px solid #9b786f",
    "&:hover": {
      backgroundColor: "#9b786f",
    },
  },
});

export default useStyles;
