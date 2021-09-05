import {Button} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function CreateDemandButton({mutation}) {
    const classes = useStyles();
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}>
            {
                mutation.isLoading ? 'Creating the demand...' : mutation.isError ? 'Error!' :
                    mutation.isSuccess ? 'Demand Created! Try creating new demand' : 'Create Demand'
            }
        </Button>
    )
}