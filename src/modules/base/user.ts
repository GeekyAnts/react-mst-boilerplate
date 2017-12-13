import { types } from  "mobx-state-tree";
import { UpdateUser } from "../../types/user";

const UserModel = types.model("User", {
    name: types.string,
    token: types.string,
    address: types.model({
      city: types.string,
      country: types.string,
    }),
    gender: types.string,
  }).actions(self => ({
    edit(userData: UpdateUser) {
      self.address = userData.address;
      self.gender = userData.gender;
  },
}));

export default UserModel;
