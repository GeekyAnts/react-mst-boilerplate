import LocalDbService from "./localDb";

function get(key: string) {
    return LocalDbService.get(key);
}

function store(key: string, data: string|object|null) {
   LocalDbService.store(key, data);
}

function update(key: string, data: string|object|null) {
   LocalDbService.update(key, data);
}

function destroy(key: string) {
   LocalDbService.destroy(key);
}

function clear() {
   LocalDbService.clear();
}

export default {
    get,
    store,
    destroy,
    clear,
    update
};