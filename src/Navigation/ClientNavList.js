import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import {useHistory} from "react-router-dom";
import {routePaths} from "./RouteConstants";

export function ClientNavList() {
  let history = useHistory();
  return (
    <div>

      <ListItem button onClick={() => history.push(routePaths.closeDispatch)}>
        <ListItemIcon>
          <AppsIcon/>
        </ListItemIcon>
        <ListItemText primary="Close Dispatch"/>
      </ListItem>

      <ListItem button onClick={() => history.push(routePaths.createDemandAndDispatch)}>
        <ListItemText primary="Create Demand & Dispatch"/>
      </ListItem>

    </div>
  )
}
