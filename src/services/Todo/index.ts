
const mockedTodos = [
    {
        name: "Get Things Done 1",
        id: 0,
        isCompleted: false,
    },
    {
        name: "Get Things Done 2",
        id: 1,
        isCompleted: false,
    },
    {
        name: "Get Things Done 3",
        id: 2,
        isCompleted: true,
    }
];
function createTodo(name: string): Promise<object> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            try {
                return resolve({
                    name: name,
                    id: Math.random(),
                    isCompleted: false,
                });
            } catch (e) {
                return reject(e);
             }
        }, 2000);
    });
}
function deleteTodo(id: number): Promise<number|string> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            try {
                return resolve(id);
            } catch (e) {
                return reject(e);
             }
        }, 2000);
    });
}
function updateTodo(id: number, data: any): Promise<object> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            try {
                return resolve({
                    id,
                    name: data.name,
                    isCompleted: data.isCompleted
                });
            } catch (e) {
                return reject(e);
             }
        }, 2000);
    });
}
function getAllTodos(): Promise<Array<Object>> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            try {
                return resolve(mockedTodos);
            } catch (e) {
                return reject(e);
             }
        }, 2000);
    });
}
function getTodo(id: number): Promise<object|string> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            try {
                const userData = {
                    name: "kuldeep",
                    city: "Bangalore"
                };
                return resolve(userData);
            } catch (e) {
                return reject(e);
             }
        }, 2000);
    });
}
export default { createTodo, updateTodo, deleteTodo, getAllTodos, getTodo };