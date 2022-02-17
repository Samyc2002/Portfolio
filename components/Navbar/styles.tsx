import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    align: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        cursor: 'pointer'
    },
    text: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500
    }
}));