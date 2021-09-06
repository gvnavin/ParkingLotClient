import {TextField} from "@material-ui/core";
import React from "react";
import {useStyles} from "./Styles";

export function NoOfParkingLots({handleInput, formInput}) {
    const classes = useStyles();
    return (
        <TextField
            label="No Of Parking Lots"
            id="margin-normal"
            name="noOfParkingLots"
            defaultValue={formInput.noOfParkingLots}
            className={classes.textField}
            helperText="Enter the Number of Parking Lots In this Area"
            onChange={handleInput}
        />
    )
}