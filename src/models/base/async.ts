import { types } from  "mobx-state-tree";

const Async = types.model("Async", {
    loading: types.optional(types.boolean, false),
    error: types.optional(types.boolean, false),
}).actions(untypedSelf => {
    const self = untypedSelf as typeof Async.Type;
    return {
        init() {
            self.loading = true;
        },
        finish() {
            self.loading = false;
        },
        finishWithError() {
            self.loading = false;
            self.error = true;
        }
    };
});

export default Async;