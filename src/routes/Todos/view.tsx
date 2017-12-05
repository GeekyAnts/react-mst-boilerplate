import * as React from "react";
import {
  Button,
  // HelpBlock,
} from "react-bootstrap";
import DevTools from "mobx-react-devtools";

import { observer, inject } from "mobx-react";

interface State {
  inputString: string;
}
@inject("todo")
@observer
export default class TodoView extends React.Component<{todo?:any, match?:any}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputString: ""
    };
  }
  render() {
    const { todo } = this.props;
    const todoItem = todo.getTodo(this.props.match.params.todoId);
    return ( 
      <div>
        <p>Todo Name: {todoItem!.name}</p>
        <p>Completed: {todoItem!.isCompleted.toString()}</p>
        <Button onClick={() => {todoItem.update({ name: "Updated", isCompleted: false }); }}>
          Update
          {todoItem.loading ?
            <img style={{height: 20, width: 20 }} src={require("../../assests/loader.gif")}/> : null}
        </Button>
        <DevTools />
      </div>
    );
  }
}
