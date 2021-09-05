import {TextField} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function VehicleId({handleInput, formInput}) {
    const classes = useStyles();
    return (
        <TextField
            label="Vehicle ID"
            id="margin-normal"
            name="vehicleId"
            defaultValue={formInput.vehicleId}
            className={classes.textField}
            helperText="Enter vehicle registration number"
            onChange={handleInput}
        />
    )
}