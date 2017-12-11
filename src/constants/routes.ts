export function appendId(path: string, id: string|number ) {
    return path.replace(":id", id.toString());
}
export const Urls = {
    user: {
        dashboard: "/dashboard",
        register: "/register",
        update: "/update",
    },
    todo: {
        todos: "/todos",
        todo: "/todos/:todoId",
        create: "/todos/create",
        update: "/todos/:todoId/update",
    }
};
export default Urls;
