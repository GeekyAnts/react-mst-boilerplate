import { types } from  "mobx-state-tree";

const Async = types.model("Async", {
    loading: types.optional(types.boolean, false),
    loadingMsg: types.optional(types.string, ""),
    error: types.optional(types.boolean, false),
}).actions(untypedSelf => {
    const self = untypedSelf as typeof Async.Type;
    return {
        init() {
            self.loading = true;
        },
        finish() {
            self.loading = false;
            self.loadingMsg = "";
        },
        finishWithError() {
            self.loading = false;
            self.loadingMsg = "";
            self.error = true;
        },
        setLoadingMsg(msg: string) {
            self.loadingMsg = msg;
        }
    };
});

export default Async;