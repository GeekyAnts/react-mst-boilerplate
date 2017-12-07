import { types } from  "mobx-state-tree";
import { UserModel, AsyncModel } from "../base";
import AuthService from "../../services/Auth";
import DbService from "../../services/Db";
import { RegisterUser, UpdateUser } from "../../types/user";
import keys from "../../constants/localStorage";

const AuthModel = types.compose(
  types.model("Auth", {
    user: types.maybe(UserModel), 
  }), AsyncModel)
  .actions(untypedSelf => {
    const self = untypedSelf as typeof AuthModel.Type;
    return {
      createUser(userData: typeof UserModel.Type) {
        self.user = UserModel.create({
          name: userData.name,
          address: userData.address,
          token: userData.token,
          gender: userData.gender
        });
        DbService.store(keys.user, self.user);
      },
      destroyUser() {
        delete self.user;
        DbService.destroy(keys.user);
      },
      updateUser(userData: UpdateUser) {
        self.user!.edit(userData);
        DbService.update(keys.user, self.user);
      },
      async login(username: string, password: string) {
        self.init();
        try {
          const res = await AuthService.login(username, password);
          self.createUser(res);
          self.finish();
        } catch (e) {
          self.finishWithError();
          throw(e);
        }
      },
      async logout(token: string) {
        self.init();
        try {
          await AuthService.logout(token);
          self.destroyUser();
          self.finish();
        } catch (e) {
          self.finishWithError();
          throw(e);
        }
      },
      async register(userData: RegisterUser) {
        self.init();
        try {
          const res = await AuthService.register(userData);
          self.createUser(res);
          self.finish();
        } catch (e) {
          self.finishWithError();
          throw(e);
        }
      },
      async update(userData: UpdateUser) {
        self.init();
        try {
          const res = await AuthService.update(userData);
          self.updateUser(res);
          self.finish();
        } catch (e) {
          self.finishWithError();
          throw(e);
        }
      }
    };
  });

export default AuthModel;