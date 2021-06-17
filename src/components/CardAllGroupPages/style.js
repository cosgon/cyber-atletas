import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        width: "80%",
        display: "flex",
        margin: "10px 0",
        background: "linear-gradient(0deg, #FE6B8B 20%, #FF8E53 90%)",
        color: '#FFF',
        borderRadius: '12px',
    },
    container: {
        backgroundColor: "#5A556060",
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
        color: "#F5F5F5",
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
        fontWeight: '600',
    },
    text2: {
        fontWeight: '500',
    },
    subscribeButton: {
        width: "150px",
        // background: "linear-gradient(180deg, #FE6B8B 30%, #FF8E53 90%)",
        backgroundColor: '#FE6B8B',
        borderRadius: '6px',
        '&:hover': {
            color: 'rgb(127, 255, 0)',
            boxShadow: "1px 1px 5px 4px #FFFFFF70",
            backgroundColor: '#FE6B8B'
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
    },
    button: {
        width: "150px",
        background: "linear-gradient(180deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: '6px',
        color: '#FFF',
        '&:hover': {
            color: 'rgb(255,69,0)',
            background: '#FE6B8B',
            boxShadow: "1px 1px 5px 4px #FFFFFF70",
        }
    }

});
export default useStyles;