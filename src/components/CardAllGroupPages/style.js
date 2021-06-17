import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        overflow: "hidden",
        minWidth: "320px",
        color: "#FFFFFF",
        backgroundColor: "#463446",
        [theme.breakpoints.up("sm")]: {
            margin: "30px auto",
            backgroundColor: "#5A556070",
            borderRadius: "2.3rem"
        }
    }, title: {
        width: '90%',
        textAlign: "center",
        "&& h1": {
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "&& h2": {
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "&& h3": {
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "&& h4": {
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "&& h5": {
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "&& h6": {
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
        "&& p": {
            overflow: "hidden",
            textOverflow: "ellipsis",
        },
    },
    boxAllGroups: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",

    },

    containerGroup: {
        display: "flex",
        width: "22rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: "2.3rem",
        padding: "10px 0 ",
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            flexWrap: "wrap",
            margin: "20px 10px"
        }
    },
    containerChangePage: {
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
    },
    loading: {
        display: "flex",
        justifyContent: "cente",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        margin: "0 auto"
    }
}));
export default useStyles;