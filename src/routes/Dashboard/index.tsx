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
  ListGroup,
  ListGroupItem
  // HelpBlock,
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";

import { observer, inject } from "mobx-react";
import App from "../../models";

interface State {
  inputString: string;
}
@inject("app")
@observer
export default class Dashboard extends React.Component<{app?: typeof App.Type, history?: any}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputString: ""
    };
  }
  handleSubmit= (e: any) => {
    if (e.which === 13) {
      const { app } = this.props;
      app!.todo.create(this.state.inputString);
      this.setState({
        inputString: "",
      });
    }
  }
  handleChanges = (event: any) => {
    this.setState({
      inputString: event.target.value
    });
    // event.preventDefault();
  }
  componentDidMount() {
    const { app } = this.props;
    app!.todo.getAll();
  }
  logout() {
    const { app } = this.props;
    app!.logout(app!.auth!.user!.token);
  }
  update() {
    const { history } = this.props;
    history.push("/update");
  }
  render() {
    const { app } = this.props;
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
          <p>Welcome to dashboard {app!.auth.user && app!.auth.user!.name}</p>
          <p>Address: {app!.auth.user && app!.auth.user!.address.city}, 
          {app!.auth.user && app!.auth.user!.address.country}</p>
          <p>Gender: {app!.auth.user && app!.auth.user!.gender}</p>
          <Button bsStyle="danger" onClick={() => this.logout()}>
            {app!.auth.loading ? "Logging Out ..." : "Logout"}
          </Button>
          <Button onClick={() => this.update()}>Update</Button>
          <Col>
            <FormGroup controlId="username">
              <ControlLabel>AddTodo</ControlLabel>
              <FormControl
                value={this.state.inputString}
                onChange={(event: any) => this.handleChanges(event)}
                onKeyDown={(event) => this.handleSubmit(event)}
              />
            </FormGroup>
          </Col>
        </Grid>
        <Grid>
          <Panel header="Todo List"/>
          {app!.todo.loading ?
            <img style={{height: 20, width: 20 }} src={require("../../assests/loader.gif")}/> : null}
             <ListGroup>
          {
            app!.todo.todos.map((item: any, index: number) => 
            <ListGroupItem onClick={() => app!.onClickTodo(item)} key={index}>
              <div>
                <p>{item.name}</p>
              </div>
            </ListGroupItem>)
          }
          </ListGroup>
        </Grid>
        <DevTools />
      </div>
    );
  }
}
