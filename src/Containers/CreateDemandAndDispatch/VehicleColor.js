import {TextField} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function VehicleColor({handleInput, formInput}) {
    const classes = useStyles();
    return (
        <TextField
            label="Vehicle Color"
            id="margin-normal"
            name="vehicleColor"
            defaultValue={formInput.vehicleColor}
            className={classes.textField}
            helperText="Enter vehicle color"
            onChange={handleInput}
        />
    )
}