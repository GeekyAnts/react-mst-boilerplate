import * as React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import { inject, observer } from "mobx-react";
import { history } from "../store";
import Paths from "../constants/routes";
import Home from "./Home";
import DashBoard from "./Dashboard";
import Register from "./Register";
import { Header, Footer } from "../components/layout";
import { AuthGuard } from "./Guards";
import Todos from "./Todos";

@inject("app")
@observer
export default class extends React.Component {
  render() { 
    return (
      <Router history={history}>
        <div>
          <Header/>
          <Switch>
            <Route  exact={true} path="/" component={Home} />
            <Route exact={true} path={Paths.user.register} component={Register} />
            {/* { Routes protected by user authentication } */}
            <AuthGuard>
              <Route path={Paths.todo.todos} component={Todos} />
              <Route exact={true} path={Paths.user.update} component={Register} />
              <Route exact={true} path={Paths.user.dashboard} component={DashBoard} />
            </AuthGuard>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}
