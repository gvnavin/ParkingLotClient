import {FormControl, FormHelperText, InputLabel, MenuItem} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import React from "react";
import {demandType, enititesType} from "../../../../Constants/Constants";

export function RequiredEntityTypeList({handleInput, formInput}) {
  return (
    <FormControl>
      <InputLabel shrink id="select-recommendation-widget-label">Demand Type</InputLabel>
      <br/>
      <Select
        labelId="select-recommendation-widget-label"
        id="select-recommendation-widget"
        value={formInput.requiredEntityType}
        name="requiredEntityType"
        onChange={handleInput}
        displayEmpty
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value={enititesType.parkingLot}>{enititesType.parkingLot}</MenuItem>
        <MenuItem value={enititesType.parkingArea}>{enititesType.parkingArea}</MenuItem>
        <MenuItem value={enititesType.vehicle}>{enititesType.vehicle}</MenuItem>
      </Select>
      <FormHelperText>Select Demand Type to enter the details of the demand</FormHelperText>
    </FormControl>
  )
}