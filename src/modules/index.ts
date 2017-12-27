import { types } from  "mobx-state-tree";
import {
    TodoOperations,
    AuthOperations
} from "./operational";
import { Todo, Auth } from "./collection";
import DbService from "../services/Db";
import keys from "../constants/localStorage";
import { Urls } from "../constants/routes";
import { replaceUrlParams } from "../utils";
import { history } from "../store";

export type Methods = "PUSH"|"REPLACE"|"BACK"|"FORWARD";

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
                self.navigateTo(Urls.user.dashboard, {}, "REPLACE");
            }
        },
        navigateTo(url: string, urlParams?: {[key: string]: string|number|boolean|null}, method?: Methods) {
            const path = replaceUrlParams(url, urlParams);
            switch (method) {
                case "REPLACE":
                    history.replace(path);
                    break;
                case "BACK":
                    history.goBack();
                    break;
                case "FORWARD":
                    history.goForward();
                    break;
                default:
                    history.push(path);
            }
        }
    };
});

export default App;