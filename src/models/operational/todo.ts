import { types } from  "mobx-state-tree";
import { history } from "../../routes";
import App from "../../models";
import { TodoModel } from "../base";

const TodoOperations = types.model("TodoOperations")
.actions((untypedSelf) => {
  const self = untypedSelf as typeof App.Type;
  return {
    onClickTodo(todo: typeof TodoModel.Type) {
      self.todo.selectTodo(todo);
      // Redirects here
      history.push("/todoDetails/" + todo.id);
    }
  };
});

export default TodoOperations;