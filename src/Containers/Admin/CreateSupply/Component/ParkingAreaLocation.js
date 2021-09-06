import {TextField} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function ParkingAreaLocation({handleInput, formInput}) {
    const classes = useStyles();
    return (
        <TextField
            label="Parking Area Location"
            id="margin-normal"
            name="parkingAreaLocation"
            defaultValue={formInput.parkingAreaLocation}
            className={classes.textField}
            helperText="Enter Location of the Parking Area"
            onChange={handleInput}
        />
    )
}