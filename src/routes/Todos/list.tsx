import * as React from "react";
import {
  Grid,
  Panel,
  ListGroup,
  ListGroupItem,
  Button
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";
import { observer, inject } from "mobx-react";
import { Urls } from "../../constants/routes";
import { TodoModel } from "../../models/base";
import App from "../../models";

@inject("app")
@observer
export default class Dashboard extends React.Component<{app?: typeof App.Type, history?: any}, {}> {
  componentDidMount() {
    const { app } = this.props;
    app!.todo.getAll();
  }
  edit(item: typeof TodoModel.Type) {
    const { app } = this.props;
    app!.navigateTo(Urls.todo.update, { todoId: item.id });
  }
  delete(item: typeof TodoModel.Type) {
  }
  view(item: typeof TodoModel.Type) {
    const { app } = this.props;
    app!.viewTodo(item.id.toString());
  }
  create() {
    const { app } = this.props;
    app!.navigateTo(Urls.todo.create);
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
            <img style={{height: 20, width: 20 }} src={require("../../assets/loader.gif")}/> : null}
             <ListGroup>
          {
            app!.todo.todos.map((item: typeof TodoModel.Type, index: number) => 
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
