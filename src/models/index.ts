import { types } from  "mobx-state-tree";
import {
    TodoOperations,
    AuthOperations
} from "./operational";
import { AuthModel } from "./base";
import { TodoCollection } from "./collection";
import DbService from "../services/Db";
import keys from "../constants/localStorage";
import { history } from "../routes";

const Store = types.model("Store", {
    auth: AuthModel,
    todo: TodoCollection
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
    };
});

export default App;