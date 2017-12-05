import { types } from  "mobx-state-tree";
import AsyncModel from "./async";
import TodoService from "../../services/Todo";


const TodoModel = types.compose(
  types.model("Todo", {
    name: types.string,
    id: types.identifier(types.number),
    isCompleted: types.optional(types.boolean, false),
  }), AsyncModel).actions(untypedSelf => {
    const self = untypedSelf as typeof TodoModel.Type;
    return {
      async update(payload: Object) {
        self.init();
        try {
            const res = await TodoService.updateTodo(self.id, payload) as typeof TodoModel.Type;
            self.updateTodo(res.name, res.isCompleted);
            self.finish();
        } catch (e) {
          self.finishWithError();
        }
    },
    updateTodo(name: string, isCompleted: boolean) {
      if (name) {self.name = name; }
      if (isCompleted) {self.isCompleted = isCompleted; }
    }
  };
  });

export default TodoModel;
