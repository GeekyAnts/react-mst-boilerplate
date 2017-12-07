export type CreateTodo = {
    name: string,
    description?: string,
    place?: string,
};
export type UpdateTodo = {
    name: string,
    description?: string,
    place?: string,
    isCompleted?: boolean
};