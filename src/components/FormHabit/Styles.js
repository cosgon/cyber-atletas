import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  subscribeButton: {
    width: "150px",
    backgroundColor: "#463446",
    border: "1px solid #9b786f",
    "&:hover": {
      backgroundColor: "#9b786f",
    },
  },
});

export default useStyles;
