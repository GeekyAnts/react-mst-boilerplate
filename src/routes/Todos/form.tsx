import * as React from "react";
import {
  Grid,
  Col,
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Checkbox,
} from "react-bootstrap";

import { observer, inject } from "mobx-react";
import { FormBuilder, Validators, reactiveForm, FormProps } from "react-reactive-form";
import { TodoModel } from "../../modules/base";
import App from "../../modules";

interface Props {
    app?: typeof App.Type;
    name: FormProps;
    place: FormProps;
    isCompleted: FormProps;
    description: FormProps;
    history?: any;
    match: any;
}
const fb = new FormBuilder();
const todoForm = fb.group({
    name: ["", Validators.required],
    place: ["bangalore"],
    description: [""],
    isCompleted: false,
});
@inject("app")
@observer
class TodoForm extends React.Component<Props, {}> {
    handleSubmit(todoItem: typeof TodoModel.Type) {
        const formValues = todoForm.value;
        const { app } = this.props;
        const editMode = !!(todoItem);
        if (editMode) {
            app!.updateTodo(todoItem.id, formValues);
        } else {
            app!.addTodo(formValues);
        }
    }
    componentDidMount() {
        const { match, app } = this.props; 
        const todoItem = app!.todo.getTodo(match.params.todoId);
        if (todoItem) {
            todoForm.setValue({
                name: todoItem.name,
                place: todoItem.place,
                description: todoItem.description,
                isCompleted: todoItem.isCompleted
            });
        }
    }
    componentWillUnmount() {
        todoForm.reset();
      }
    render() {
        const { app, name, place, description, match, isCompleted } = this.props;
        const todoItem = app!.todo.getTodo(match.params.todoId);
        const editMode = !!(todoItem);
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
                    {editMode && <FormGroup>
                        <ControlLabel>Mark as Completed</ControlLabel>
                        <Checkbox {...isCompleted.handler("checkbox")}/>
                    </FormGroup>}
                    <Button 
                        disabled={todoForm.invalid || todoForm.pristine} 
                        bsStyle="primary" 
                        onClick={() => this.handleSubmit(todoItem)}
                    >
                        {editMode ? "Edit" : "Add"}
                    </Button>
                    </Col>
                </Grid>
            </div>
        );
    }
}
export default reactiveForm(TodoForm, todoForm);
