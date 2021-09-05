import {TextField} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function DispatchId({handleInput, formInput}) {
    const classes = useStyles();
    return (
        <TextField
            label="Dispatch Id"
            id="margin-normal"
            name="dispatchId"
            defaultValue={formInput.dispatchId}
            className={classes.textField}
            helperText="Enter dispatch id to close"
            onChange={handleInput}
        />
    )
}