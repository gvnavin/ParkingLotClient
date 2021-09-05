import {FormControl, FormHelperText, InputLabel, MenuItem} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import React from "react";
import {demandType} from "../../../../Constants/Constants";

export function DemandTypeList({handleInput, formInput}) {
  return (
    <FormControl>
      <InputLabel shrink id="select-recommendation-widget-label">Demand Type</InputLabel>
      <br/>
      <Select
        labelId="select-recommendation-widget-label"
        id="select-recommendation-widget"
        value={formInput.demandType}
        name="recommendationWidget"
        onChange={handleInput}
        displayEmpty
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value={demandType.parkingLot}>{demandType.parkingLot}</MenuItem>
      </Select>
      <FormHelperText>Select Demand Type to enter the details of the demand</FormHelperText>
    </FormControl>
  )
}