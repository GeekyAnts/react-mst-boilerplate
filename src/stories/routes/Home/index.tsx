import * as React from "react";
import {
  Navbar,
  Grid,
  Col,
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";

import { observer } from "mobx-react";

import LoginFormModel from "../../../models/LoginFormModel";

function FieldGroup({ id, label, help, ...props }: any) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

@observer
export default class Home extends React.Component {
  loginForm: typeof LoginFormModel.Type;

  constructor(props: any) {
    super(props);
    this.loginForm = LoginFormModel.create({
      name: "Sanket",
      fields: {
        username: "asdasd",
        password: "asdasds"
      }
    });

    this.loginForm.updateField("username", "Sanket");
    this.loginForm.updateField("password", "123456");
  }

  render() {
    const { username, password }: any = this.loginForm.getHandlers();
    return (
      <div>
        <Navbar inverse collapseOnSelect staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">MST TypeScript Boilerplate</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Col>
            <Panel header="Login">
              <form>
                <FieldGroup
                  id="username"
                  type="text"
                  label="Email"
                  placeholder=""
                  {...username}
                />
                <FieldGroup
                  id="password"
                  type="password"
                  label="Password"
                  placeholder=""
                  {...password}
                />
                <Button bsStyle="primary">asdasdsadas</Button>
              </form>
            </Panel>
          </Col>
        </Grid>
        <DevTools />
      </div>
    );
  }
}
