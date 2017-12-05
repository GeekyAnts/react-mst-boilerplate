import TodoList from "./list";
import TodoView from "./view";
import TodoForm from "./form";
import * as React from "react";
import Paths from "./../../constants/routes";
import { Route, Switch } from "react-router";

const Todos = ({ match }: { match: any}) => {
    return (
        <div>
            <Switch>
                <Route exact={true} path={Paths.todo.create} component={TodoForm} />
                <Route exact={true} path={Paths.todo.update} component={TodoForm} />
                <Route exact={true} path="/todos/:todoId" component={TodoView} />
                <Route exact={true} path="/todos" component={TodoList} />
            </Switch>
        </div>
    );
};
export default Todos;
