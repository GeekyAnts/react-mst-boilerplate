export function appendId(path: string, id: string|number ) {
    return path.replace(":id", id.toString());
}
export const Urls = {
    user: {
        dashboard: "/dashboard",
        register: "/register",
        update: "/update",
    },
    todos: {
        detail: "/todoDetails/:id"
    },
    todo: {
        todos: "/todos",
        todo: "/todos/:id",
        create: "/todos/create",
        update: "/todos/:id/update",
    }
};
export default Urls;
