import Store from "../store";
import HttpService, { Params } from "./HttpService";

export function doGet(params: Params) {
    params = {...params, ...{token: Store.auth.user!.token}};
    return HttpService.doGet(params);
}

export function doPost(params: Params) {
    params = {...params, ...{token: Store.auth.user!.token}};
    return HttpService.doPost(params);
}

export function doDelete(params: Params) {
    params = {...params, ...{token: Store.auth.user!.token}};
    return HttpService.doDelete(params);
}

export default {
    doGet,
    doPost,
    doDelete,
};