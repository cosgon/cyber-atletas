import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        backgroundColor: "#463446",
        width: "80vw",
        borderRadius: "2rem",
        textAlign: "center",
    },
    descript: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        color: "#FAED26",
        padding: "0rem",
        fontSize: "1rem",
    },
    habit: {
        color: "#FAED26",
        fontWeight: 800,
        fontSize: "2rem",
        letterSpacing: "0.35rem",
    },
    container: {
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