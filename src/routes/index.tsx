import * as React from "react";
import {
  Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { inject, observer } from "mobx-react";
// import Paths from "../constants/routes";

export const history = createBrowserHistory();

import Home from "./Home";
import DashBoard from "./Dashboard";
import TodoDetails from "./TodoDetails";
import Register from "./Register";

@inject("app")
@observer
export default class extends React.Component<{app?: any}> {
  render() {
    const { app } = this.props;
    const canAccess = !!app.auth.user;
    return (
      <Router history={history}>
        <Switch>
          <Route  exact={true} path="/" component={Home} />
          <Route exact={true} path="/register" component={Register} />
          {canAccess ? <Route exact={true} path="/update" component={Register} /> : <Redirect to="/" />}
          {canAccess ? <Route exact={true} path="/dashboard" component={DashBoard} /> : <Redirect to="/" />}
          {canAccess ? <Route exact={true} path="/todoDetails/:todoId" component={TodoDetails} /> : <Redirect to="/" />}
        </Switch>
      </Router>
    );
  }
}
