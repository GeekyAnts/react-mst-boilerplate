import { types } from  "mobx-state-tree";

const Filter = types.model("Filter", {
    start: types.number
}).actions(untypedSelf => {
    const self = untypedSelf as typeof Filter.Type;
    return {
        setFilter(filter: { start?: number }) {
            self.start = filter.start || 0;
        },
        setInitialFilter() {
            self.start = 0;
        },
        clearFilter() {
            self.start = 0;
        }
    };
});

export default Filter;