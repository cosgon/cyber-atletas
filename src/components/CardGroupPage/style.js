import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    container: {
        boxSizing: "border-box",
        overflow: "hidden",
        minWidth: "320px",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#463446"
        },
        [theme.breakpoints.up("sm")]: {
            margin: "30px auto",
            backgroundColor: "#5A556070",
            borderRadius: "2.3rem"
        }
    },
    header: {
        margin: "20px 0 0 0",
    },
    button: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        "&:hover": {
            transition: "0.6s",
            backgroundColor: "#463446",
            boxShadow: "1px 1px 5px 4px #FFFFFF40",
        },
        color: "#FFFFFF",
    },
    title: {
        textAlign: "center",
        '&& h2': {
            color: "#FFFFFF",
            fontWeight: "700",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        '&& h3': {
            color: "#FFFFFF",
            fontWeight: "700",
            overflow: "hidden",
            textOverflow: "ellipsis",
        }
    },
    info: {
        textAlign: "center",
        '&& h4': {
            color: "#FFFFFF",
            fontWeight: "700",
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        '&& p': {
            color: "#FFFFFF",
            fontWeight: "700",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }
    },
    containerContent: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start",

    },
    containerActivities: {
        [theme.breakpoints.up("sm")]: {
            width: "40%"
        }
    },
    containerGoals: {
        [theme.breakpoints.up("sm")]: {
            width: "40%"
        }
    },
}));
export default useStyles;