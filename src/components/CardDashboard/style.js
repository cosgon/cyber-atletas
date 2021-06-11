import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        backgroundColor: "#463446",
        width: "34rem",
        height: "10rem",
        borderRadius: "2rem",
        textAlign: "center",
    },
    teste: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        color: "#FAED26",
        padding: "1rem",
        fontSize: "1rem",
    },
    habit: {
        color: "#FAED26",
        fontWeight: 800,
        fontSize: "2rem",
        letterSpacing: "0.35rem",
    },
    teste2: {
        height: "100%",
    },
    times: {
        color: "#FAED26",
    },
    icon: {
        color: "green",
    },
});
export default useStyles;