import { types } from  "mobx-state-tree";
import { TodoModel, AsyncModel, FilterModel } from "../base";
import HttpService from "../../services/HttpService";
import { CreateTodo, UpdateTodo } from "../../types/todo";
// Mocked Todos
const mockedTodos = [
    {
        name: "Get Things Done 1",
        id: "0",
        isCompleted: false,
    },
    {
        name: "Get Things Done 2",
        id: "1",
        isCompleted: false,
    },
    {
        name: "Get Things Done 3",
        id: "2",
        isCompleted: true,
    },
    {
        name: "Get Things Done 4",
        id: "3",
        isCompleted: false,
    },
    {
        name: "Get Things Done 5",
        id: "4",
        isCompleted: false,
    },
    {
        name: "Get Things Done 6",
        id: "5",
        isCompleted: true,
    }
];
const TodoCollection = types.compose(types.model({
    todos: types.array(TodoModel),
    currentFilter: types.optional(FilterModel, { start: 0 }),
  }), AsyncModel).actions(untypedSelf => {
    const self = untypedSelf as typeof TodoCollection.Type;
    return {
        addTodo(todo: typeof TodoModel.Type) {
            self.todos.unshift(TodoModel.create(todo));
        },
        updateTodos(todoList: Array<Object>) {
            todoList.forEach((todo: typeof TodoModel.Type) => {
                self.todos.push(TodoModel.create(todo));
            });
        },
        async create(payload: CreateTodo) {
            self.init();
            try {
                // Mocked api
                await HttpService.doGet({ url: "allBreads" });
                // Mocked Response
                const res = {
                    id: Math.random().toString(),
                    isCompleted: false,
                    name: payload.name,
                    place: payload.place,
                    description: payload.description
                };
                self.addTodo(res as typeof TodoModel.Type);
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
                // Mocked api
                await HttpService.doGet({ url: "allBreads" });
                // Mocked Response
                const res = {
                    isCompleted: payload.isCompleted,
                    name: payload.name,
                    place: payload.place,
                    description: payload.description
                };
                self.getTodo(id)!.update(res as UpdateTodo);
                self.finish();
            } catch (e) {
                self.finishWithError();
                throw(e);
            }
        },
        async getAll(start: number) {
            self.init();
            self.todos.clear();
            self.currentFilter.setFilter({ start });
            try {
                const filteredTodo =  mockedTodos.slice(self.currentFilter.start, self.currentFilter.start + 3);
                // Mocked api
                await HttpService.doGet({ url: "allBreads" });        
                // Mocked Response
                self.updateTodos(filteredTodo);
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
