import {Button} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function DispatchDemandButton({mutation, formInput}) {
    const classes = useStyles();
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => { mutation.mutate(formInput) }}>
            {
                mutation.isLoading ? 'Dispatching the demand...' : mutation.isError ? 'Error!' :
                    mutation.isSuccess ? 'Demand Dispatched! Try creating new Dispatch' : 'Dispatch Demand'
            }
        </Button>
    )
}