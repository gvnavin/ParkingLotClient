import {Button} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function CreateSupplyButton({mutation}) {
    const classes = useStyles();
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}>
            {
                mutation.isLoading ? 'Creating the supply...' : mutation.isError ? 'Error!' :
                    mutation.isSuccess ? 'Supply Created! Try creating new Supply' : 'Create Supply'
            }
        </Button>
    )
}