import {TextField} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function ParkingAreaId({handleInput, formInput}) {
    const classes = useStyles();
    return (
        <TextField
            label="Parking Area Id"
            id="margin-normal"
            name="parkingAreaId"
            defaultValue={formInput.parkingAreaId}
            className={classes.textField}
            helperText="Enter Id of the Parking Area"
            onChange={handleInput}
        />
    )
}