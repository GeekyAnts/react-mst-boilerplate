import * as React from "react";
import {
  Router,
  Route,
  Switch,
} from "react-router-dom";
import {
  Grid,
  Col,
} from "react-bootstrap";
import { inject, observer } from "mobx-react";
import { history } from "../store";
import Paths from "../constants/routes";
import Home from "./Home";
// import DashBoard from "./Dashboard";
import Sidebar from "./SideBar";
import Register from "./Register";
import { Header, Footer } from "../components/layout";
import { AuthGuard } from "./Guards";
import Todos from "./Todos";

const DashBoard = () => <h2> Welcome to React-MST-Boilerplate</h2>;

@inject("app")
@observer
export default class extends React.Component {
  render() { 
    return (
      <Router history={history}>
        <div>
            <Header/>
            <Grid>
                <Col xs={6} md={2}>
                    <Sidebar />
                </Col>
                <Col xs={12} md={10}>
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
                </Col>
            </Grid>
            <Footer/>
        </div>
      </Router>
    );
  }
}
