import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import {CreateDemandAndDispatchForm} from "./CreateDemandAndDispatchForm";

export default function CreateDemandAndDispatch() {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography component="h1" variant="h4" color="inherit" noWrap>
          Create Demand and Dispatch
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CreateDemandAndDispatchForm/>
      </Grid>
    </Grid>
  );
}
