import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AppsIcon from '@material-ui/icons/Apps';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import {Route, useHistory} from "react-router-dom";
import {routePaths} from "./RouteConstants";

export function ClientNavList() {
  let history = useHistory();
  return (
    <div>

      <ListItem button onClick={() => history.push(routePaths.closeDemand)}>
        <ListItemIcon>
          <AppsIcon/>
        </ListItemIcon>
        <ListItemText primary="Closing Demand"/>
      </ListItem>

      <ListItem button onClick={() => history.push(routePaths.createDemand)}>
        <ListItemIcon>
          <AppsIcon/>
        </ListItemIcon>
        <ListItemText primary="Create Demand"/>
      </ListItem>

    </div>
  )
}
