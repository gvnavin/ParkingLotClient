import {FormControl, FormHelperText, InputLabel, MenuItem} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import React from "react";
import {demandType, filterKeys} from "../../../../Constants/Constants";

export function RequiredFilterKeyList({handleInput, formInput}) {
  return (
    <FormControl>
      <InputLabel shrink id="select-recommendation-widget-label">Filter Key</InputLabel>
      <br/>
      <Select
        labelId="select-recommendation-widget-label"
        id="select-recommendation-widget"
        value={formInput.requiredFilterKey}
        name="requiredFilterKey"
        onChange={handleInput}
        displayEmpty
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value={filterKeys.color}>{filterKeys.color}</MenuItem>
        <MenuItem value={filterKeys.vehicleRegistrationId}>{filterKeys.vehicleRegistrationId}</MenuItem>
      </Select>
      <FormHelperText>Select Demand Type to enter the details of the demand</FormHelperText>
    </FormControl>
  )
}