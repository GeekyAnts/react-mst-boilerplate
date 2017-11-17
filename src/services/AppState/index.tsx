import { types } from "mobx-state-tree";

const AppState = types
  .model("AppState", {
    name: types.string
  })
  .actions(self => {
    return {
      changeName(name: string) {
        self.name = name;
      }
    };
  });

export default AppState;
