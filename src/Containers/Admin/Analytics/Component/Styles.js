import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    leftIcon: {
        marginRight: theme.spacing(1)
    },
    rightIcon: {
        marginLeft: theme.spacing(1)
    },
    iconSmall: {
        fontSize: 20
    },
    root: {
        padding: theme.spacing(3, 2),
        width: '100%',
        maxWidth: '90ch',
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400
    },
    inline: {
        display: 'inline',
    },
}));