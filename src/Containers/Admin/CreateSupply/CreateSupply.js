import * as React from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import {CreateSupplyForm} from "./Component/CreateSupplyForm";

const axios = require('axios');


export default function CreateSupply() {
  console.log("CreateSupply")

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography component="h1" variant="h4" color="inherit" noWrap>
          Create Supply
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CreateSupplyForm/>
      </Grid>
    </Grid>
  );
}
