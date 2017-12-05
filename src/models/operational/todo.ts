import { types } from  "mobx-state-tree";
import { history } from "../../routes";
import App from "../../models";
import { TodoModel } from "../base";

const TodoOperations = types.model("TodoOperations")
.actions((untypedSelf) => {
  const self = untypedSelf as typeof App.Type;
  return {
    viewTodo(todo: typeof TodoModel.Type) {
      self.todo.selectTodo(todo);
      // Redirects here
      history.push("/todos/" + todo.id);
    },
    async addTodo(payload: any) {
      try {
        await self.todo.addTodo(payload);
        history.goBack();
      } catch (e) {
        console.error(e);
      }
    }
  };
});

export default TodoOperations;