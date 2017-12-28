import * as React from "react";
import {
  Navbar,
  Grid,
  Col,
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  // HelpBlock,
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";

import { observer, inject } from "mobx-react";

interface State {
  username: string;
  password: string;
}
interface Props {}
@inject("app")
@observer
export default class Home extends React.Component<{app?: any}, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChanges(event: any, name: string) {
    const newState = this.state;
    newState[name] = event.target.value;
    this.setState(newState);
  }
  handleSubmit(event: any) {
    const { app } = this.props;
    app.login("kuldeep", "kuldeep");
    event.preventDefault();
  }

  render() {
    const { app } = this.props;
    console.log("iuwbfuwehfuiw", this.props)
    return (
      <div>
        <Navbar inverse={true} collapseOnSelect={true} staticTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">MST TypeScript Boilerplate</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Col>
            <Panel header="Simple Login"/>
            <FormGroup controlId="username">
              <ControlLabel>Usename</ControlLabel>
              <FormControl
               value={this.state.username}
               onChange={(event: any) => this.handleChanges(event, "username")}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl
               value={this.state.password}
               onChange={(event: any) => this.handleChanges(event, "password")}
              />
            </FormGroup>
            <Button onClick={() => this.handleSubmit(event)}>
              {app.auth.state === "PENDING" ? "Logging In ..." : "Login"}
            </Button>
          </Col>
        </Grid>
        <DevTools />
      </div>
    );
  }
}