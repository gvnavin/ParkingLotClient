import {Button} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function CloseDispatchButton({mutation}) {
    const classes = useStyles();
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}>
            {
                mutation.isLoading ? 'Closing the dispatch...' : mutation.isError ? 'Error!' :
                    mutation.isSuccess ? 'Dispatch Closed! Try creating new Dispatch Closure' : 'Close Dispatch'
            }
        </Button>
    )
}