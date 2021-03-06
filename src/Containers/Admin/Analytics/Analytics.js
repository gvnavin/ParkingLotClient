import * as React from 'react';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import {FilterForm} from "./Component/FilterForm";

export default function Analytics() {
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Typography component="h1" variant="h4" color="inherit" noWrap>
          Analytics
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FilterForm/>
      </Grid>
    </Grid>
  );
}
