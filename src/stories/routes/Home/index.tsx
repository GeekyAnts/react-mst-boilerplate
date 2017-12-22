import * as React from "react";

import { types } from "mobx-state-tree";
import { spy } from "mobx";

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

class X {
  @observable y: string;
}

const Users = types.model("User", {
  name: types.string
});

const Model = types
  .model("mstModel", {
    users: types.map(Users),
    objectX: types.optional(types.frozen, "")
  })
  .actions(self => {
    return {
      setX(x: any) {
        self.objectX = x;
      }
    };
  });

import { observable } from "mobx";

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
  model: typeof Model.Type;

  componentWillMount() {
    this.model = Model.create({
      users: {
        a: {
          name: "Sanket"
        },
        b: {
          name: "Suraj"
        }
      }
    });

    const x = new X();
    x.y = "Value";

    this.model.setX(x);

    console.log("$$$$$ ", this.model);

    window["model"] = this.model;
  }

  componentDidMount() {
    //console.log(this.x["$mobx"].values.y == this.render["$mobx"].observing[1]);

    setTimeout(() => {
      let x = spy(obj => {
        console.log("spy", obj);
      });

      const objectX = this.model.objectX;
      if (objectX) {
        objectX.y = "asdasd";
      }

      setTimeout(function() {
        x();
      }, 0);
    }, 2000);

    setTimeout(() => {
      const objectX = this.model.objectX;
      if (objectX) {
        objectX.y = "Second change";
      }
    }, 5000);
  }

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

    const a = this.model.objectX;

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
              ##### {a ? a.y : ""}
              #####
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
