import {Button} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function FindEntitiesButton({queryInfo}) {
    const classes = useStyles();
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}>
            {
                queryInfo.isLoading ? 'Finding the entities...' : queryInfo.isError ? 'Error!' :
                  queryInfo.isSuccess ? 'Entities Found! Try new search' : 'Find Entities'
            }
        </Button>
    )
}