import { types, getSnapshot } from "mobx-state-tree";

function createFormModel(name: string, formModelType: any) {
  const BaseFieldsModel = types
    .model(name + "BaseFieldsModel", {})
    .actions(self => {
      return {
        afterCreate() {
          console.log("Fields created");
        },
        updateField(field: string, val: any) {
          console.log("before", self[field]);
          self[field] = val;
          console.log("after", self[field]);
          console.log(field, val);
        }
      };
    });

  const FieldsModel = types.model(name + "FieldsModel", formModelType);

  const BaseFormModel = types
    .model(name, {
      name: types.string,
      initialized: types.optional(types.boolean, true),
      invalid: types.optional(types.boolean, false),
      pristine: types.optional(types.boolean, true),
      submitFailed: types.optional(types.boolean, false),
      submitSucceeded: types.optional(types.boolean, true),
      submitting: types.optional(types.boolean, false),
      valid: types.optional(types.boolean, true),
      dirty: types.optional(types.boolean, false),
      anyTouched: types.optional(types.boolean, false),
      fields: types.compose(FieldsModel, BaseFieldsModel)
    })
    .actions(untypedSelf => {
      const self = untypedSelf as typeof BaseFormModel.Type;

      return {
        afterCreate() {},
        updateField(field: string, val: any) {
          self.fields.updateField(field, val);
        },
        touch(field: string) {},
        untouch(field: string) {},
        handleSubmit() {},
        submit() {
          self.handleSubmit();
        },
        reset() {},
        validate() {},
        getHandlers() {
          let handlers = {};

          for (var key in getSnapshot(self.fields)) {
            handlers[key] = {
              get value() {
                return self.fields[key];
              },
              onChange: function(key: string, e: any) {
                self.updateField(key, e.target.value);
              }.bind(null, key)
            };
          }

          return handlers;
        }
      };
    });

  return BaseFormModel;
}

const LoginFormModel = createFormModel("LoginFormModel", {
  username: types.string,
  password: types.string
}).actions(self => {
  return {
    handleSubmit() {
      alert("sdfsdf");
    }
  };
});

export default LoginFormModel;
