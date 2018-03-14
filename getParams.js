function getParam(paramName) {
    let paramValue = "", isFound = !1;
    if (window.location.search.indexOf("?") == 0 && window.location.search.indexOf("=") > 1) {
        let arrSource = unescape(window.location.search).substring(1, window.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
  }