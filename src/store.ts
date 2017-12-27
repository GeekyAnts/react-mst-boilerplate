import AppStore from "./modules";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const initialState = {
    auth: {user: null},
    todo: {selectedTodo: `reference(Todo)`, todos: []},
};
const app = AppStore.create(initialState);
app.load();
const Store = {app, ...app};
export default Store;