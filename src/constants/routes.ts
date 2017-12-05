export function appendId(path: string, id: string|number ) {
    const splitById = path.split(":");
    return `${splitById[0]}/${id}`;
}
export const Urls = {
    user: {
        dashboard: "/dashboard",
        register: "/register",
        update: "/update",
    },
    todos: {
        detail: "/todoDetails/:todoId"
    },
    todo: {
        todos: "/todos",
        todo: "/todos/:todoId",
        create: "/todos/create",
        update: "/todos/update:todoId",
    }
};
export default Urls;
