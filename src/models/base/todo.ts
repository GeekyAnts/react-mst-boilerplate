import { types } from  "mobx-state-tree";
import { UpdateTodo } from "../../types/todo";
import AsyncModel from "./async";

const TodoModel = types.compose(
  types.model("Todo", {
    name: types.string,
    id: types.identifier(types.string),
    isCompleted: types.optional(types.boolean, false),
    place: types.optional(types.string, ""),
    description: types.optional(types.string, "")
  }), AsyncModel).actions(untypedSelf => {
    const self = untypedSelf as typeof TodoModel.Type;
    return {
      update(payload: UpdateTodo) {
        self.name = payload.name;
        if (payload.isCompleted !== undefined) {
          self.isCompleted = payload.isCompleted;
        }
        if (payload.place) {
          self.place = payload.place;
        } 
        if (payload.description) {
          self.description = payload.description;
        }
      }
  };
  });

export default TodoModel;
