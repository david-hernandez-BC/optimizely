function hasCookie(cookie) {
    var regexText = "(?:(?:^|.*;\\s*)" + cookie + "\\s*\\=\\s*([^;]*).*$)|^.*$";
    var regex = new RegExp(regexText, "g");
    var cookieValue = document.cookie.replace(regex, "$1");
    return !cookieValue == '';
}