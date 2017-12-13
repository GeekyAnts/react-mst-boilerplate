import * as React from "react";
import {
  Button,
  Grid,
  Col,
  Panel,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";
import App from "../../modules";
import { observer, inject } from "mobx-react";
import Paths from "../../constants/routes";

@inject("app")
@observer
export default class TodoView extends React.Component<{app?: typeof App.Type, match?:any}, {}> {
  edit(id: string) {
    if (id) {
      const { app } = this.props;
      app!.navigateTo(Paths.todo.update, { todoId: id });
    }
  }
  render() {
    const { app } = this.props;
    const todoItem = app!.todo.getTodo(this.props.match.params.todoId);
    return ( 
      <div>
        <Grid>
          <Col>
            <Panel header="Todo Details"/>
          </Col>
          <Button onClick={() => {this.edit(todoItem.id); }}>
          Edit
          {todoItem && todoItem.loading ?
            <img style={{height: 20, width: 20 }} src={require("../../assets/loader.gif")}/> : null}
        </Button>
        </Grid>
        <ListGroup>
          <ListGroupItem>
              <p>Todo Name: {todoItem && todoItem.name}</p>
          </ListGroupItem>
          <ListGroupItem>
              <p>Completed: {todoItem && todoItem.isCompleted.toString()}</p>
          </ListGroupItem>
          <ListGroupItem>
              <p>Description: {todoItem && todoItem.description || "None"}</p>
          </ListGroupItem>
          <ListGroupItem>
              <p>Place: {todoItem && todoItem.place || "None"}</p>
          </ListGroupItem>
        </ListGroup>
        <DevTools />
      </div>
    );
  }
}
