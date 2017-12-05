import * as React from "react";
import {
  Grid,
  Col,
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
//   ListGroup,
//   ListGroupItem
  // HelpBlock,
} from "react-bootstrap";
// import DevTools from "mobx-react-devtools";

import { observer, inject } from "mobx-react";
import { FormBuilder, Validators, reactiveForm } from "react-reactive-form";
// import Path from "../../constants/routes";
import App from "../../models";

interface Props {
    app?: typeof App.Type;
    name: any,
    place: any,
    description: any,
    history?: any;
}

const fb = new FormBuilder();
const todoForm = fb.group({
    name: ["", Validators.required],
    place: ["bangalore"],
    description: [""],
});
@inject("app")
@observer
class TodoForm extends React.Component<Props, {}> {
    addTodo() {
        const formValues = todoForm.value;
        const { app } = this.props;
        app!.addTodo(formValues);
    }
    render() {
        const { app, name, place, description } = this.props;
        const editMode = !!(app!.auth!.user);
        return (
            <div>
                <Grid>
                    <Col>
                    <Panel header={editMode ? "Update Todo" : "Add Todo"}/>
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl {...name.handler()}/>
                        <span style={{color: "red"}}>
                            {name.touched && name.hasError("required") && "Name is required"}
                        </span>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Place</ControlLabel>
                        <FormControl type="select" {...place.handler()}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="description" {...description.handler()}/>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={() => this.addTodo()}>Add</Button>
                    </Col>
                </Grid>
            </div>
        );
    }
}
export default reactiveForm(TodoForm, todoForm);
