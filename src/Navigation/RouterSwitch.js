import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {routePaths} from "./RouteConstants";
import AppLayoutTemplate from "../AppLayoutTemplate";
import Dashboard from "../Containers/Dashboard/Dashboard";
import Analytics from "../Containers/Analytics/Analytics";
import CloseDemand from "../Containers/CloseDemand/CloseDemand";
import CreateDemand from "../Containers/CreateDemand/CreateDemand";
import CreateSupply from "../Containers/CreateSupply/CreateSupply";
import {AdminNavList} from "./AdminNavList";
import {ClientNavList} from "./ClientNavList";

export default function RouterSwitch() {
  return (
    <Switch>

      <Route exact path={routePaths.root}>
        <AppLayoutTemplate title={"Admin Dashboard"} navlist={<AdminNavList/>}>
          <Dashboard/>
        </AppLayoutTemplate>
      </Route>

      <Route exact path={routePaths.admin}>
        <AppLayoutTemplate title={"Admin Dashboard"} navlist={<AdminNavList/>}>
          <Dashboard/>
        </AppLayoutTemplate>
      </Route>

      <Route exact path={routePaths.dashboard}>
        <AppLayoutTemplate title={"Admin Dashboard"} navlist={<AdminNavList/>}>
          <Dashboard/>
        </AppLayoutTemplate>
      </Route>

      <Route exact path={routePaths.analytics}>
        <AppLayoutTemplate title={"Admin Analytics tool"} navlist={<AdminNavList/>}>
          <Analytics/>
        </AppLayoutTemplate>
      </Route>

      <Route exact path={routePaths.createSupply}>
        <AppLayoutTemplate title={"Admin Supply Management tool"} navlist={<AdminNavList/>}>
          <CreateSupply/>
        </AppLayoutTemplate>
      </Route>

      <Route path={routePaths.client}>
        <AppLayoutTemplate title={"Demand Management tool"} navlist={<ClientNavList/>}>
          <CloseDemand/>
        </AppLayoutTemplate>
      </Route>

      <Route exact path={routePaths.closeDemand}>
        <AppLayoutTemplate title={"Demand Management tool"} navlist={<ClientNavList/>}>
          <CloseDemand/>
        </AppLayoutTemplate>
      </Route>

      <Route exact path={routePaths.createDemand}>
        <AppLayoutTemplate title={"Demand Management tool"} navlist={<ClientNavList/>}>
          <CreateDemand/>
        </AppLayoutTemplate>
      </Route>

    </Switch>
  );
}
