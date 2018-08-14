export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    var cookie = '';
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) 
        cookie = c.substring(name.length, c.length);
        if(/^ecdCN(\w|%)+/.test(cookie)) {
            cookie = decodeURI(decodeURI(cookie)).slice(5)
        }
    }
    return cookie;
}

export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    if(/[\u4e00-\u9fa5]/.test(cname)) {
        throw new TypeError("cookie's key can not set by chinese!")
    }
    if(/[\u4e00-\u9fa5]/.test(cvalue)) {
        cvalue = encodeURI(encodeURI('ecdCN'+cvalue))
    }
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

export function deleteCookie(cname) {
    var d = new Date();
    d.setTime(d.getTime() - 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=''; " + expires;
}