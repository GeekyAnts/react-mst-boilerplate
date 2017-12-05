import * as React from "react";
import {
  Grid,
  Panel,
  ListGroup,
  ListGroupItem,
  Button
  // HelpBlock,
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";

import { observer, inject } from "mobx-react";
import { Urls, appendId } from "../../constants/routes";
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
  navigateTo(path: string, id?: string|number) {
    const { history } = this.props;
    if (id) {
      history.push(appendId(path, id));
    } else {
      history.push(path);
    }
  }
  edit(item: any) {
    this.navigateTo(Urls.todo.update, item.id);
  }
  delete(item: any) {
  }
  view(item: any) {
    const { app } = this.props;
    app!.viewTodo(item);
  }
  create() {
    this.navigateTo(Urls.todo.create);
  }
  render() {
    const { app } = this.props;
    return (
      <div>
        <Grid>
          <Panel header="Todo List">
            <Button onClick={() => this.create()}>Create</Button>
          </Panel>
          {app!.todo.loading ?
            <img style={{height: 20, width: 20 }} src={require("../../assests/loader.gif")}/> : null}
             <ListGroup>
          {
            app!.todo.todos.map((item: any, index: number) => 
            <ListGroupItem  key={index}>
              <div>
                <p>{item.name}</p>
                <Button onClick={() => this.edit(item)}>Edit</Button>
                <Button onClick={() => this.view(item)}>View</Button>
                <Button bsStyle="danger" onClick={() => this.delete(item)}>Delete</Button>
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
