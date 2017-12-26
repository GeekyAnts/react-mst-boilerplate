import * as React from "react";
import {
  Grid,
  Panel,
  ListGroup,
  ListGroupItem,
  Button,
  Pagination,
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";
import { observer, inject } from "mobx-react";
import { Urls } from "../../constants/routes";
import { TodoModel } from "../../modules/base";
import App from "../../modules";

@inject("app")
@observer
export default class Dashboard extends React.Component<{app?: typeof App.Type, history?: any}, {}> {
  componentDidMount() {
    const { app } = this.props;
    app!.todo.getAll(app!.todo.currentFilter.start);
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
  handleSelect(eventKey: number) {
    const { app } = this.props;
    app!.todo.getAll((eventKey - 1) * 3);
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
          <Pagination
            bsSize="medium"
            items={2}
            activePage={app!.todo.currentFilter.start / 3 + 1}
            onSelect={(eventKey: any) => this.handleSelect(eventKey)}
          />
          </ListGroup>
        </Grid>
        <DevTools />
      </div>
    );
  }
}
