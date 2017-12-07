import { types } from  "mobx-state-tree";
import { TodoModel, AsyncModel } from "../base";
import TodoService from "../../services/Todo";
import { CreateTodo, UpdateTodo } from "../../types/todo";

const TodoCollection = types.compose(types.model({
    todos: types.array(TodoModel),
  }), AsyncModel).actions(untypedSelf => {
    const self = untypedSelf as typeof TodoCollection.Type;
    return {
        addTodo(todo: typeof TodoModel.Type) {
            self.todos.unshift(TodoModel.create(todo));
        },
        updateTodos(todoList: Array<Object>) {
            todoList.forEach((todo: typeof TodoModel.Type) => {
                self.addTodo(todo);
            });
        },
        async create(payload: CreateTodo) {
            self.init();
            try {
                const res = await TodoService.createTodo(payload) as typeof TodoModel.Type;
                self.addTodo(res);
                self.finish();
                return res;
            } catch (e) {
                self.finishWithError();
                throw(e);
            }
        },
        async update(id: number|string, payload: UpdateTodo) {
            self.init();
            try {
                const res = await TodoService.updateTodo(id, payload);
                self.getTodo(id)!.update(res as UpdateTodo);
                self.finish();
            } catch (e) {
                self.finishWithError();
                throw(e);
            }
        },
        async getAll() {
            self.init();
            self.todos.clear();
            try {
                const res = await TodoService.getAllTodos();
                self.updateTodos(res);
                self.finish();
            } catch (e) {
                self.finishWithError();
                throw(e);
            }
        }
    };
})
.views(untypedSelf => {
    const self = untypedSelf as typeof TodoCollection.Type;
    return {
        getTodo(id: number|string) {
            return self.todos.find(t => t.id.toString() === id);
        }
    };
});

export default TodoCollection;
