function get(key: string) {
    const data  = localStorage.getItem(key) ? localStorage.getItem(key) : null;
    return data ? JSON.parse(data) : null;
}

function store(key: string, data: string|object|null) {
    if (typeof data === "object") {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        localStorage.setItem(key, data);
    }
}

function update(key: string, data: string|object|null) {
    store(key, data);
}

function destroy(key: string) {
    localStorage.removeItem(key);
}

function clear() {
    localStorage.clear();
}

export default {
    get,
    store,
    destroy,
    clear,
    update
};