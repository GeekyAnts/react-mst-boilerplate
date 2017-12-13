import AppStore from "./modules"; 

const initialState = {
    auth: {user: null},
    todo: {selectedTodo: `reference(Todo)`, todos: []},
};
const app = AppStore.create(initialState);
app.load();
const Store = {app, ...app};
export default Store;