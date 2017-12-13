import { types } from  "mobx-state-tree";
import App from "../../modules";
import Paths from "../../constants/routes";
// import { TodoModel } from "../base";

const TodoOperations = types.model("TodoOperations")
.actions((untypedSelf) => {
  const self = untypedSelf as typeof App.Type;
  return {
    viewTodo(todoId: string) {
      self.navigateTo(Paths.todo.todo, { todoId });
    },
    async addTodo(payload: any) {
      try {
        await self.todo.create(payload);
        self.viewTodo((self.todo.todos[0].id).toString());
      } catch (e) {
        console.error(e);
      }
    },
    async updateTodo(id: string, payload: any) {
      try {
        await self.todo.update(id.toString(), payload);
        self.viewTodo((self.todo.todos[0].id).toString());
      } catch (e) {
        console.error(e);
      }
    }
  };
});

export default TodoOperations;