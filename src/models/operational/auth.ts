import { types } from  "mobx-state-tree";
import { history } from "../../routes";
import { RegisterUser, UpdateUser } from "../../interfaces/user";
import Path from "../../constants/routes";
import App from "../../models";

const AuthOperations = types.model("AuthOperations")
.actions((untypedSelf) => {
    const self = untypedSelf as typeof App.Type;
    return {
        async login(username: string, password: string) {
            try {
                await self.auth.login(username, password);
                // Redirect to dashboard
                history.push(Path.user.dashboard);
            } catch (e) {
            
            }
        },
        async logout(token: string) {
            try {
                await self.auth.logout(token);
                // Redirect to dashboard
                history.replace("/");
            } catch (e) {
                console.error(e);
            }
        },
        async register(userData: RegisterUser) {
            try {
                await self.auth.register(userData);
                history.push(Path.user.dashboard);
            } catch (e) {
            
            }
        },
        async update(userData: UpdateUser) {
            try {
                await self.auth.update(userData);
                history.push(Path.user.dashboard);
            } catch (e) {
                console.error(e);
            }
        }
    };
});

export default AuthOperations;