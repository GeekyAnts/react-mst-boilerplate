import { types } from  "mobx-state-tree";
import {
    TodoOperations,
    AuthOperations
} from "./operational";
import { Todo, Auth } from "./collection";
import DbService from "../services/Db";
import keys from "../constants/localStorage";
import { appendId } from "../constants/routes";
import { history } from "../routes";

const Store = types.model("Store", {
    auth: Auth,
    todo: Todo
});

const App = types.compose(AuthOperations, TodoOperations, Store)
.named("App").actions((untypedSelf) => {
    const self = untypedSelf as typeof App.Type;
    return {
        load() {
            const user = DbService.get(keys.user);
            if (user) {
                self.auth.createUser(user);
                history.replace("/dashboard");
            }
        },
        navigateTo(path: string, id?: string|number) {
            if (id) {
              history.push(appendId(path, id));
            } else {
              history.push(path);
            }
        }
    };
});

export default App;