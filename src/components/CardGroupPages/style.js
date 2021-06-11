import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "80%",
        display: "flex",
        margin: "10px 0",
    },
    container: {
        backgroundColor: "#5a556070",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.2s",
        margin: "30px auto",
        borderRadius: "20px",
        padding: "50px 0",
        display: "flex",
        width: "70vw",
    },
    h1: {
        fontSize: "54px",
        fontWeight: "700",
        color: "#f5f5f5",
        marginBottom: "20px",
    },
    loading: {
        color: "#faed26",
        margin: "50vh auto",
    },
    details: {
        width: "80%",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    text: {
        width: "80%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        minWidth: "360px",
    },
    subscribeButton: {
        width: "150px",
        backgroundColor: "#463446",
        border: "1px solid #9b786f",
        '&:hover': {
            backgroundColor: "#9b786f",
        }
    },
    changePage: {
        width: "150px",
        backgroundColor: "#463446",
        border: "1px solid #9b786f",
        '&:hover': {
            backgroundColor: "#9b786f",
        }
    },
    changePageContainer: {
        margin: "10px 0",
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

});
export default useStyles;