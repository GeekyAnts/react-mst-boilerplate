// import * as _ from "lodash";
import { getUrl } from "../utils";

const request = require("superagent");
// const URLs = {};

const TIME_OUT = 10000;

type Methods = "GET"|"POST"|"DELETE"|"PUT"; 
export type Params = {
    // Url
    url: string;
    // Params to append in the url
    urlParams?: {[key: string]: string|number|boolean|null};
    // Params
    params?: {[key: string]: string|number|boolean|null};
    // Query Params
    query?: {[key: string]: string|number|boolean|null};
    // Authentication Token
    token?: string;
    // Headers
    headers?: {[key: string]: string};
    // Files
    files?: {[key: string]: string|object|null};
    callbackProcessor?: () => void;
};

function rejectWithAnError(error: any) {
    let err = null;
    if (error.response) {
      err = { error: true, message: error.response };
    } else {
      err = { error: true, message: error };
    }
    return Promise.reject(err);
}
  
function errorCallback(error: any) {
    return rejectWithAnError(error)
        .catch(status =>
            Promise.reject(status));
}

function _callbackProcessor({ text }: {text: any}) {
    return JSON.parse(text);
}
function _doRequest(method: Methods, params: Params) {
    let req = null;
    const url = getUrl(params.url, params.urlParams);
    const requestData = params.params || {};
    const queryData = params.query || {};
    const headers = params.headers || {};
    const callbackProcessor = params.callbackProcessor || _callbackProcessor;
    switch (method) {
        case "GET":
            req = request.get(url).query(requestData || queryData);
            break;
        case "POST":
            req = request.post(url);
            req = req.query(queryData).send(requestData);
            break;
        case "DELETE":
            req = request.del(url).query(requestData);
            break;
        default:
            if (process.env.NODE_ENV === "development") {
                throw new Error(`"${method}" is not a valid method.`);
            }
    }
    return req
    .accept("application/json")
    .set(headers)
    .timeout(TIME_OUT)
    .then(callbackProcessor)
    .catch(errorCallback);
}

export function doGet(params: Params) {
    return _doRequest("GET", params);
}

export function doPost(params: Params) {
    return _doRequest("POST", params);
}

export function doDelete(params: Params) {
    return _doRequest("DELETE", params);
}

export default {
    doGet,
    doPost,
    doDelete,
};
