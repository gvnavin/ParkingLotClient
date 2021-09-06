import {TextField} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function RequiredFilterValue({handleInput, formInput}) {
    const classes = useStyles();
    return (
        <TextField
            label="Filter Value"
            id="margin-normal"
            name="requiredFilterValue"
            defaultValue={formInput.requiredFilterValue}
            className={classes.textField}
            helperText="Enter value of the filter"
            onChange={handleInput}
        />
    )
}