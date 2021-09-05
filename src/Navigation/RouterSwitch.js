import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {routePaths} from "./RouteConstants";
import AppLayoutTemplate from "../AppLayoutTemplate";
import Dashboard from "../Containers/Dashboard/Dashboard";
import Analytics from "../Containers/Analytics/Analytics";
import CloseDispatch from "../Containers/CloseDispatch/CloseDispatch";
import CreateDemandAndDispatch from "../Containers/CreateDemandAndDispatch/CreateDemandAndDispatch";
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

      <Route exact path={routePaths.client}>
        <AppLayoutTemplate title={"Demand Management tool"} navlist={<ClientNavList/>}>
          <CloseDispatch/>
        </AppLayoutTemplate>
      </Route>

      <Route exact path={routePaths.closeDispatch}>
        <AppLayoutTemplate title={"Demand Management tool"} navlist={<ClientNavList/>}>
          <CloseDispatch/>
        </AppLayoutTemplate>
      </Route>

      <Route exact path={routePaths.createDemandAndDispatch}>
        <AppLayoutTemplate title={"Demand Management tool"} navlist={<ClientNavList/>}>
          <CreateDemandAndDispatch/>
        </AppLayoutTemplate>
      </Route>

    </Switch>
  );
}
