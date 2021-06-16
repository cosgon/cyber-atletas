import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'space-evenly',
        width: "80vw",
        margin: "50px auto ",
        borderRadius: "1.7rem",
        backgroundColor: "#5A556070",
        overflow: "auto",
        "&::-webkit-scrollbar": {
            borderRadius: "10px",
            backgroundColor: "#463446",
            backgroundImage:
                "linear-gradient(150deg, #9B786F 0%, rgba(90, 85, 96, 0) 20%)",
            height: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            borderRadius: "5px",
        },
        scrollbarFaceColor: "black",
    },
    descript: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        color: "#FFFFFF",
        padding: "0rem",
        fontSize: "1rem",
    },
    habit: {
        color: "#FFFFFF",
        fontWeight: 800,
        fontSize: "5rem",
        letterSpacing: "0.35rem",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        minWidth: "768px",
    },
    times: {
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
        color: "#FAED26",
        margin: "30px 0 0 0",
    },
    icon: {
        color: "green",
    },
    title: {
        textAlign: "center",
        fontWeight: "700",
        color: "#FFFFFF"
    },
    button: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        "&:hover": {
            transition: "0.6s",
            backgroundColor: "#463446",
            boxShadow: "1px 1px 5px 4px #FFFFFF40",
        },
        color: "#FFFFFF",
        margin: "0 20px",
        width: "150px"
    },
    buttonRemove: {
        background: "#FE6B8B",
        "&:hover": {
            transition: "0.6s",
            backgroundColor: "#463446",
            boxShadow: "1px 1px 5px 4px #FFFFFF40",
        },
        color: "#FFFFFF",
        margin: "0 20px",
        width: "150px"
    }
});
export default useStyles;