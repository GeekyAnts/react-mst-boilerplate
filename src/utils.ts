import { URLs, API_HOST } from "./constants/urls";

function replaceUrlParams(url: string, urlParams?: {[key: string]: string|number|boolean|null}) {
    const _urlParams = urlParams;
    url = `${url}/`;
    url = url.replace(/:(.*?)\//g, (rawUrl, urlParam) => {
      const value = _urlParams![urlParam];
      delete _urlParams![urlParam];
      return rawUrl.replace(urlParam, value!.toString()).replace(":", "");
    });
    return url.substr(0, url.length - 1);
}
  
function getUrl(url: string, urlParams?: {[key: string]: string|number|boolean|null}) {
    url = URLs[url];
    if (urlParams) {
        url = URLs[url];
        url = replaceUrlParams(url, urlParams);
    }
    return API_HOST + url;
}

export {
    replaceUrlParams,
    getUrl,
};
