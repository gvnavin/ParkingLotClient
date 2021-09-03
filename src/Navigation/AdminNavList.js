import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppsIcon from "@material-ui/icons/Apps";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import {useHistory} from "react-router-dom";
import {routePaths} from "./RouteConstants";

export function AdminNavList() {
  let history = useHistory();
  return (
    <div>

      <ListItem button onClick={() => history.push(routePaths.dashboard)}>
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Dashboard"/>
      </ListItem>

      <ListItem button onClick={() => history.push(routePaths.analytics)}>
        <ListItemIcon>
          <PersonalVideoIcon/>
        </ListItemIcon>
        <ListItemText primary="Analytics"/>
      </ListItem>

      <ListItem button onClick={() => history.push(routePaths.createSupply)}>
        <ListItemIcon>
          <AppsIcon/>
        </ListItemIcon>
        <ListItemText primary="Create Supply"/>
      </ListItem>

    </div>
  )
}
