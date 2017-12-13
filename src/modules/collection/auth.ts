import { types } from  "mobx-state-tree";
import { UserModel, AsyncModel } from "../base";
import HttpService, { Params } from "../../services/HttpService";
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
      doGet(params: Params) {
        if (self.getToken()) {
          params = {...params, ...{headers: self.getHeaders(params)}};
          return HttpService.doGet(params);
        } else {
          throw("Token Not Found");
        }
      },
      doPost(params: Params) {
        if (self.getToken()) {
          params = {...params, ...{headers: self.getHeaders(params)}};
          return HttpService.doPost(params);
        } else {
          throw("Token Not Found");
        }
      },
      doDelete(params: Params) {
        if (self.getToken()) {
          params = {...params, ...{headers: self.getHeaders(params)}};
          return HttpService.doDelete(params);
        } else {
          throw("Token Not Found");
        }
      },
      createUser(userData: typeof UserModel.Type) {
        self.user = UserModel.create(userData);
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
          await HttpService.doGet({ url: "allBreads" });
          // Mocked Response
          const userData = {
            name: "kuldeep",
            address: {
                city: "Bangalore",
                country: "India",
            },
            gender: "male",
            token: "73dbkjwfbk913ndq"
        };
          self.createUser(userData as typeof UserModel.Type);
          self.finish();
        } catch (e) {
          self.finishWithError();
          throw(e);
        }
      },
      async logout(token: string) {
        self.init();
        try {
          await HttpService.doGet({ url: "allBreads" });
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
          await HttpService.doGet({ url: "allBreads" });
          // Mocked Response
          const res = {
            name: userData.name,
            address: userData.address,
            token: "73dbkjwfbk913ndq",
            gender: userData.gender,
          };
          self.createUser(res as typeof UserModel.Type);
          self.finish();
        } catch (e) {
          self.finishWithError();
          throw(e);
        }
      },
      async update(userData: UpdateUser) {
        self.init();
        try {
          await HttpService.doGet({ url: "allBreads" });
          // Mocked Response
          const res = {...userData, token: "73dbkjwfbk913ndq"};
          self.updateUser(res);
          self.finish();
        } catch (e) {
          self.finishWithError();
          throw(e);
        }
      }
    };
  })
  .views((untypedSelf) => {
    const self = untypedSelf as typeof AuthModel.Type;
    return {
      getToken() {
        return self.user && self.user.token;
      },
      getHeaders(params: Params) {
        let headers = {};
        const token = self.getToken();
        if (token) {
          headers = { Authorization: `Token ${token}`, ...params.headers };
        }
        return headers;
      }
    };
  });

export default AuthModel;