import * as React from "react";
import {
  Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { inject, observer } from "mobx-react";
import Paths from "../constants/routes";

export const history = createBrowserHistory();

import Home from "./Home";
import DashBoard from "./Dashboard";
import TodoDetails from "./TodoDetails";
import Register from "./Register";
import { Header, Footer } from "../components/layout";
import Todos from "./Todos";

@inject("app")
@observer
export default class extends React.Component<{app?: any}> {
  render() { 
    const { app } = this.props;
    const canAccess = !!app.auth.user;
    return (
      <Router history={history}>
        <div>
          <Header/>
          <Switch>
            <Route  exact={true} path="/" component={Home} />
            <Route exact={true} path={Paths.user.register} component={Register} />
            {/* <Route exact={true} path="/todos" component={TodoList}> */}
            {/* <Switch>   */}
              {/* <Route exact={true} path={Paths.todo.create} component={TodoForm} />
              <Route exact={true} path={Paths.todo.update} component={TodoForm} />
              <Route exact={true} path="/todos/:todoId" component={TodoView} />
              <Route exact={true} path="/todos" component={TodoList} />
              <Route component={TodoList}/> */}
            {/* </Switch> */}
            {/* </Route> */}
            <Route path="/todos" component={Todos} />
            {canAccess ? <Route exact={true} path={Paths.user.update} component={Register} /> : <Redirect to="/" />}
            {canAccess ? <Route exact={true} path={Paths.user.dashboard} component={DashBoard} /> : <Redirect to="/" />}
            {canAccess ? <Route exact={true} path={Paths.todos.detail} component={TodoDetails} /> : <Redirect to="/" />}
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}
