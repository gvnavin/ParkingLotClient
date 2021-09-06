import {TextField} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function ParkingAreaOwner({handleInput, formInput}) {
    const classes = useStyles();
    return (
        <TextField
            label="Parking Area Owner"
            id="margin-normal"
            name="parkingAreaOwner"
            defaultValue={formInput.parkingAreaOwner}
            className={classes.textField}
            helperText="Enter owner of the Parking Area"
            onChange={handleInput}
        />
    )
}